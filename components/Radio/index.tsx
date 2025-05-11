import { Radio, RadioProps, styled } from "@mui/material";

const UncheckIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  backgroundColor: theme.palette.customBase?.base20,

  "input:disabled ~ &": {
    background: theme.palette.customBase?.base30,
    ...theme.applyStyles("dark", {
      background: theme.palette.customBase?.base60,
    }),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.customBase?.base50,
  }),
}));

const CheckedIcon = styled(UncheckIcon)(({ theme }) => ({
  backgroundColor: theme.palette.customPrimary?.primary50,
  "&::before": {
    position: "absolute",
    content: '""',
    display: "block",
    width: 8,
    height: 8,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: theme.palette.customBase?.baseWhite,
    borderRadius: "inherit",
  },
  "input:disabled ~ &": {
    ...theme.applyStyles("dark", {
      background: theme.palette.customBase?.base40,
    }),
  },
}));

export const CustomRadio = (props: RadioProps) => {
  return (
    <Radio checkedIcon={<CheckedIcon />} icon={<UncheckIcon />} {...props} />
  );
};
