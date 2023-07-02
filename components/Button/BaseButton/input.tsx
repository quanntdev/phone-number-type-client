import Button from "@mui/material/Button";

const BaseButton = (props: any) => {
  const { title, onClickAction } = props;

  return (
    <>
      <Button
        sx={{ padding: "10px 20px", borderRadius: "10px", color: "white" }}
        variant="contained"
        onClick={onClickAction}
      >
        {title}
      </Button>
    </>
  );
};

export default BaseButton;
