import { useEffect } from "react";
import { searchPhone } from "../../redux/actions/phone";
import { connect } from "react-redux";
import phone from "../../redux/reducers/phone";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { PHONE_NAME } from "../../constants";

const Dashboard = (props: any) => {
  const {dataPhoneList} = props.phone;
  const { searchPhone } = props;

  console.log(dataPhoneList);

  useEffect(() => {
    searchPhone();
  }, [])
  return (<>
    <Box sx={{textAlign: "center", fontWeight: "700"}}>Phone Number Table</Box>
    <Box sx={{marginTop: "20px"}}>
        <Paper sx={{width: "100%", overflow: "hidden"}}>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell width={'5%'}>#</TableCell>
                            <TableCell className="text-align-center" width={'60%'}>Phone Number</TableCell>
                            <TableCell className="text-align-center" width={'20%'}>Phone Operator</TableCell>
                            <TableCell className="text-align-center" width={'20%'}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataPhoneList?.items?.map((phone:any, index:number) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                <TableCell className="list-index">
                                    {dataPhoneList?.items?.length > 0 && index+1}
                                </TableCell>
                                <TableCell className="text-align-center">
                                    {phone?.phone}
                                </TableCell>
                                <TableCell className="text-align-center">
                                    {PHONE_NAME[phone?.type_id]}
                                </TableCell>
                                <TableCell className="text-align-center">
                                    {dataPhoneList?.items?.length > 0 && index+1}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    </Box>
  </>);
};

const mapStateToProps = (state: any) => ({
  phone: state.phone,
});

const mapDispatchToProps = {
  searchPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);;
