import { Button, Grid, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import SelectDefault from "../../Input/SelectDefault";
import { useRouter } from "next/router";

const FilterUserAssignedButton = (props: any) => {
  const { dataUserList, setPage = () => {}, setUserAssignedId = () => {}, userAssignedId } = props;
  const [disabled, setDisabled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const q = Object.entries(router.query);
    if (q.length > 0 && q.find((item: any) => item.includes("mytask"))) {
      setDisabled(true);
      setUserAssignedId(null);
    } else {
      setDisabled(false);
    }
  }, [router.query]);

  useEffect(() => {
    if (router?.query?.userAssign){
      setUserAssignedId(Number(router?.query?.userAssign));
    }
  }, [router.query]);

  const handleChangeSelect = function (key: any, value: any) {
    setUserAssignedId(value);
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
        disabled={disabled}
        fillterAll={true}
        data={dataUserList?.items}
        placeholder="All User Assigned"
        padding="3px 0 3px"
        handleChange={handleChangeSelect}
        fullWidth
        value={userAssignedId ?? null}
        size="small"
        keyword="userAssign"
        keyMenuItem="id"
        keyValue="profile"
        keyValuePropertyOne="first_name"
        keyValuePropertyTwo="last_name"
      />
    </Grid>
  );
};

export default FilterUserAssignedButton;
