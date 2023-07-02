import { Button, Grid, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { rowsPerPage, SELECT_ALL_INDEX } from "../../../constants";
import SelectDefault from "../../Input/SelectDefault";
import { useRouter } from "next/router";

const FilterStatusButton = (props: any) => {
  const {
    dataStatusList,
    setStatusId = () => {},
    statusId,
    setPage = () => {},
  } = props;
  const [openFilter, setOpenFilter] = useState<null | HTMLElement>(null);
  const router = useRouter();

  useEffect(() => {
    if(router.query['statusId']) {
      setStatusId(router.query['statusId']);
    }
  }, [router.query])

  const handleChangeSelect = function (key: any, value: any) {
    setStatusId(value);
    const q = router.query;
    if (value !== 0) {
      delete q[`page`];
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          [key]: value,
        },
      });
    } else {
      delete q[`${key}`];
      router.push({
        pathname: router.pathname,
        query: {
          ...q,
        },
      });
    }
    setPage(1);
  };

  return (
    <Grid style={{ width: 200, marginLeft: 30 }}>
      <SelectDefault
        fillterAll={true}
        placeholder="Not Done Yet"
        keyword="statusId"
        keyMenuItem="id"
        keyValue="name"
        size="small"
        padding="3px 0 3px"
        data={dataStatusList}
        value={statusId ?? ""}
        handleChange={handleChangeSelect}
      />
    </Grid>
  );
};

export default FilterStatusButton;
