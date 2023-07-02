import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import InputBase from "../Input/InputBase";
import { connect } from "react-redux";
import { createPhone } from "../../redux/actions/phone";
import { getFirstValueInObject } from "../../helpers";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const  CreatePhoneDialog = (props: any) => {
  const handleClose = () => {
    handleOpenCreateBox(false);
  };

  const { open, handleOpenCreateBox, modalDetail, dataPhoneNumber , setDataPhoneNumber , createPhone, dataError} = props;
  const {dataCreatePhone} = props.phone

  const handleOnchange = (key: any, value: any) => {
    setDataPhoneNumber({...dataPhoneNumber, [key] : value})
  }

  const handleCreatePhone = () => {
    createPhone(dataPhoneNumber)
  }

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {modalDetail}
        </BootstrapDialogTitle>
        <DialogContent sx={{ width: "400px" }} dividers>
          <InputBase
            required={true}
            labelText="Phone Number"
            keyword="phone"
            placeholder={"Phone Number"}
            handleChange={handleOnchange}
            errorText={getFirstValueInObject(dataError?.phone)}
            value={dataPhoneNumber.phone}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCreatePhone}>
            Create new Phone
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
    phone: state.phone,
  });
  
  const mapDispatchToProps = {
    createPhone
  };

  export default connect(mapStateToProps, mapDispatchToProps)(CreatePhoneDialog);