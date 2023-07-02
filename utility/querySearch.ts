import { rowsPerPage } from "./../constants/index";
const setParamFilter = (rowsPerPage: any, page: any, router: any) => {
  return (
    `limit=${rowsPerPage}&offset=${page * rowsPerPage}` +
    (router.query?.keyword ? `&keyword=${router.query?.keyword}` : "")
  );
};
export default setParamFilter;
