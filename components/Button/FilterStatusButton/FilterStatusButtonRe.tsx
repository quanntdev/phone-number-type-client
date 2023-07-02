import { Button, Grid, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import styles from "./styles.module.scss";
import { rowsPerPage, SELECT_ALL_INDEX } from "../../../constants";
import SelectDefault from "../../Input/SelectDefault";
import { useRouter } from "next/router";

const FilterStatusButtonRe = (props: any) => {
  const {
    dataStatusList,
    setStatusId = () => {},
    statusId = SELECT_ALL_INDEX,
    setPage = () => {},
    setQuerySearch = () => {},
    setDisableShowHideButton = () => {},
    keyword,
    placeholder = 'Select Status',
    disable = false,
    querySearchFilter,
    keywordReset
  } = props;

  const router = useRouter();

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
      if(q[`${keywordReset}`]) {
        delete q[`${keywordReset}`];
      }
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
    <Grid style={{ width: 200, marginLeft: 20 }}>
      <SelectDefault
        fillterAll={true}
        placeholder={placeholder}
        keyword={keyword}
        keyMenuItem="id"
        keyValue="name"
        size="small"
        padding="3px 0 3px"
        data={dataStatusList}
        value={statusId}
        handleChange={handleChangeSelect}
        disabled={disable}
      />
    </Grid>
  );
};

export default FilterStatusButtonRe;
