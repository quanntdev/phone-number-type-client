import { useEffect, useState } from "react";
import { searchPhone, deletePhone } from "../../redux/actions/phone";
import { connect } from "react-redux";
import phone from "../../redux/reducers/phone";
import {
  Box,
  Button,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { PHONE_NAME, keyPage, rowsPerPage } from "../../constants";
import BaseButton from "../../components/Button/BaseButton/input";
import BaseDialog from "../../components/Dialog";
import CreatePhoneDialog from "../../components/Dialog";
import { Router, useRouter } from "next/router";
import DeleteIcon from '@mui/icons-material/Delete';
import PaginationDefault from "../../components/Pagination";
import { getPageFromParams } from "../../helpers";
import SearchIcon from '@mui/icons-material/Search';

export interface PhoneNumberType {
  phone: string;
}

export const PhoneNumberData = {
  phone: "",
};

const INIT_ERROR = {
  phone: "",
};

const Dashboard = (props: any) => {
  const { dataPhoneList, dataCreatePhone, dataDeletePhone } = props.phone;
  const { searchPhone, errors, deletePhone } = props;

  const [openCreateBox, setOpenCreateBox] = useState(false);
  const [dataPhoneNumber, setDataPhoneNumber] =
    useState<PhoneNumberType>(PhoneNumberData);
  const [dataError, setDataError] = useState<PhoneNumberType>(INIT_ERROR);
  const [itemIndex, setItemIndex] = useState<number>(1);
  const [querySearch, setQuerySearch] = useState<string>("");
  const [keyword, setKeyword] = useState<any>("");

  const router = useRouter();

  useEffect(() => {
    const page = getPageFromParams(router.query[keyPage]);
    if (page) {
      setItemIndex(page * rowsPerPage + 1);
    }
    if (!page) {
      setItemIndex(1);
    }
    const querySearch =
      `limit=${rowsPerPage}&offset=${page * rowsPerPage}` +
      (router.query?.keyword ? `&keyword=${router.query?.keyword}` : "");
    if(router.query?.keyword) {
        setKeyword(router.query?.keyword)
    }
    searchPhone(querySearch);
  }, [searchPhone, router.query, dataDeletePhone, dataCreatePhone]);

  const handleOpenCreateBox = () => {
    setOpenCreateBox(!openCreateBox);
  };

  useEffect(() => {
    setOpenCreateBox(false);
  }, [dataCreatePhone]);

  useEffect(() => {
    if (openCreateBox == false) {
      setDataPhoneNumber(PhoneNumberData);
    }
  }, [openCreateBox]);

  useEffect(() => {
    setDataError({ ...INIT_ERROR, ...errors });
  }, [errors]);

  const handleDelete = (id:number) => {
    deletePhone(id);
  }

  const handleSearchKeyword = (value:any) => {
    setKeyword(value);
  }

  const handleSearch = () => {
    router.push({
       pathname: router.pathname,
       query: {
        ...router.query,
        'keyword': keyword
       }
    })
  }


  return (
    <>
      <Box sx={{ textAlign: "center", fontWeight: "700",marginBottom: '40px' }}>
        Phone Number Table
      </Box>
      <CreatePhoneDialog
        handleOpenCreateBox={handleOpenCreateBox}
        open={openCreateBox}
        modalDetail={"Create New Phone"}
        setDataPhoneNumber={setDataPhoneNumber}
        dataPhoneNumber={dataPhoneNumber}
        dataError={dataError}
      />
      <BaseButton
        onClickAction={handleOpenCreateBox}
        title={"Create New Phone"}
      />
      <Box sx={{marginTop: "30px"}}>
        <TextField sx={{
            width: "370px",
            background: "white",
        }}
        placeholder="Search Phone Number"
        name="keyword"
        onChange={(e:any) => handleSearchKeyword(e.target.value)}
        value={keyword}
        />
        <Button sx={{height: "60px", position: "absolute", marginLeft: "-65px"}} onClick={handleSearch}>
            <SearchIcon />
        </Button>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell width={"5%"}>#</TableCell>
                  <TableCell className="text-align-center" width={"60%"}>
                    Phone Number
                  </TableCell>
                  <TableCell className="text-align-center" width={"20%"}>
                    Phone Operator
                  </TableCell>
                  <TableCell className="text-align-center" width={"20%"}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataPhoneList?.items?.map((phone: any, index: number) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell className="list-index">
                      {dataPhoneList?.items?.length > 0 && index + itemIndex}
                    </TableCell>
                    <TableCell className="text-align-center">
                      {phone?.phone}
                    </TableCell>
                    <TableCell className="text-align-center">
                      {PHONE_NAME[phone?.type_id]}
                    </TableCell>
                    <TableCell className="text-align-center">
                      <Button onClick={()=> handleDelete(phone?.id)}><DeleteIcon/></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        {dataPhoneList?.total > rowsPerPage && (
                <PaginationDefault total={dataPhoneList?.total} />
                 )}
      </Box>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  phone: state.phone,
  errors: state.phone?.error?.response?.data?.properties ?? {},
});

const mapDispatchToProps = {
  searchPhone,
  deletePhone
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
