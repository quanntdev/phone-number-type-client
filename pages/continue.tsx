import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const ContinuePage = (props: any) => {
  return <div></div>;
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});
const mapDispatchToProps = {  };
export default connect(mapStateToProps, mapDispatchToProps)(ContinuePage);
