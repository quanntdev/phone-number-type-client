import { TextField, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

const InputFormatNumber = (props: any) => {
  const {
    labelText,
    handleChange,
    errorText,
    placeholder,
    value,
    require = false,
    disabled = false,
    size,
    variant = "outlined",
    onKeyUp,
    allowNegative,
    allowedDecimalSeparators,
    decimalScale,
    decimalSeparator,
    prefix,
    suffix,
    displayErrorText = true,
    label,
    disable = false,
  } = props;
  return (
    <>
      {label && (
        <Typography className={require ? "require" : ""}>{label}</Typography>
      )}
      <NumericFormat
        customInput={TextField}
        label={labelText}
        variant={variant}
        placeholder={placeholder}
        size={size}
        required={require}
        disabled={disabled}
        value={value}
        onChange={(e: any) =>
          props?.keyword
            ? handleChange(props?.keyword, e.target.value)
            : handleChange(e.target.value)
        }
        error={!!errorText}
        onKeyUp={onKeyUp}
        helperText={displayErrorText && errorText}
        allowNegative={allowNegative}
        allowedDecimalSeparators={allowedDecimalSeparators}
        decimalScale={decimalScale}
        decimalSeparator={decimalSeparator}
        prefix={prefix}
        suffix={suffix}
        fullWidth
        thousandSeparator={!disable}
      />
    </>
  );
};

export default InputFormatNumber;
