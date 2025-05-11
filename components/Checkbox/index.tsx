import { Checkbox, CheckboxProps, styled } from "@mui/material";

const UncheckIcon = styled("span")(({ theme }) => ({
  borderRadius: "3.2px",
  width: 16,
  height: 16,
  backgroundColor: theme.palette.customBase?.base20,
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.customSupport?.primary5003,
  },
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.customBase?.base50,
  }),
}));

const CheckedIcon = styled(UncheckIcon)(({ theme }) => ({
  backgroundColor: theme.palette.customPrimary?.primary50,
  "&::before": {
    display: "block",
    width: 16,
    height: 16,
    content: '""',
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
  },
}));

export const CustomCheckBox = (props: CheckboxProps) => {
  return (
    <Checkbox
      disableRipple
      checkedIcon={<CheckedIcon />}
      icon={<UncheckIcon />}
      {...props}
    />
  );
};
