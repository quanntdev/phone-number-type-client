import { Box, Button } from "@mui/material"

const ButtonSaveAndCancel = (props: any) => {
  const {
    onClickSave,
    onClickCancel,
  } = props;
  return (
    <Box className="flex-end">
      <Button onClick={onClickCancel}>Cancel</Button>
      <Button onClick={onClickSave}>Save</Button>
    </Box>
  )
}

export default ButtonSaveAndCancel;
