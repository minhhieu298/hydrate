// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaletteColor } from "@mui/material/styles";

// Mở rộng kiểu PaletteColor để thêm các shade tùy chỉnh
declare module "@mui/material/styles" {
  interface PaletteOptions {
    customBase?: {
      baseWhite?: string;
      base10?: string;
      base20?: string;
      base25?: string;
      base30?: string;
      base40?: string;
      base50?: string;
      base55?: string;
      base60?: string;
      base70?: string;
      base80?: string;
      base90?: string;
      baseBlack?: string;
    };
    customPrimary?: {
      primary10?: string;
      primary20?: string;
      primary30?: string;
      primary40?: string;
      primary50?: string;
      primary60?: string;
      primary70?: string;
      primary80?: string;
    };
    customRed?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customGreen?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customOrange?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customPurple?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customBlue?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customYellow?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customTeal?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customSupport?: {
      primary5001?: string;
      primary5003?: string;
      primary5005?: string;
      greendefault01?: string;
      greendefault03?: string;
      greendefault05?: string;
      reddefault01?: string;
      reddefault03?: string;
      reddefault05?: string;
      orangedefault01?: string;
      orangedefault03?: string;
      orangedefault05?: string;
      purpledefault01?: string;
      purpledefault03?: string;
      purpledefault05?: string;
      bluedefault01?: string;
      bluedefault03?: string;
      bluedefault05?: string;
      yellowdefault01?: string;
      yellowdefault03?: string;
      yellowdefault05?: string;
      primary25?: string;
    };
    customAdditional?: {
      baseWhite03?: string;
      base2006?: string;
      base4003?: string;
      base5003?: string;
      base6006?: string;
      base8003?: string;
      base8008?: string;
    };
    customLogoFPT?: {
      blue?: string;
      orange?: string;
      green?: string;
    };
  }
  interface Palette {
    customBase?: {
      baseWhite?: string;
      base10?: string;
      base20?: string;
      base25?: string;
      base30?: string;
      base40?: string;
      base50?: string;
      base55?: string;
      base60?: string;
      base70?: string;
      base80?: string;
      base90?: string;
      baseBlack?: string;
    };
    customPrimary?: {
      primary10?: string;
      primary20?: string;
      primary30?: string;
      primary40?: string;
      primary50?: string;
      primary60?: string;
      primary70?: string;
      primary80?: string;
    };
    customRed?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customGreen?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customOrange?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customPurple?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customBlue?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customYellow?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customTeal?: {
      lighter?: string;
      light?: string;
      default?: string;
      dark?: string;
      darker?: string;
    };
    customSupport?: {
      primary5001?: string;
      primary5003?: string;
      primary5005?: string;
      greendefault01?: string;
      greendefault03?: string;
      greendefault05?: string;
      reddefault01?: string;
      reddefault03?: string;
      reddefault05?: string;
      orangedefault01?: string;
      orangedefault03?: string;
      orangedefault05?: string;
      purpledefault01?: string;
      purpledefault03?: string;
      purpledefault05?: string;
      bluedefault01?: string;
      bluedefault03?: string;
      bluedefault05?: string;
      yellowdefault01?: string;
      yellowdefault03?: string;
      yellowdefault05?: string;
      primary25?: string;
    };
    customAdditional?: {
      baseWhite03?: string;
      base2006?: string;
      base4003?: string;
      base5003?: string;
      base6006?: string;
      base8003?: string;
      base8008?: string;
    };
    customLogoFPT?: {
      blue?: string;
      orange?: string;
      green?: string;
    };
  }

  interface TypographyVariants {
    "heading48-B56"?: React.CSSProperties;
    "heading32-S40"?: React.CSSProperties;
    "heading28-S42"?: React.CSSProperties;
    "heading24-B36"?: React.CSSProperties;
    "heading24-S36"?: React.CSSProperties;
    "heading20-S30"?: React.CSSProperties;
    "heading18-B27"?: React.CSSProperties;
    "heading18-M27-I"?: React.CSSProperties;
    "body16-B24"?: React.CSSProperties;
    "body16-S24"?: React.CSSProperties;
    "body16-M24"?: React.CSSProperties;
    "body16-R24"?: React.CSSProperties;
    "body16-R24-U"?: React.CSSProperties;
    "body16-M24-I"?: React.CSSProperties;
    "body14-B21"?: React.CSSProperties;
    "body14-S21"?: React.CSSProperties;
    "body14-M21"?: React.CSSProperties;
    "body14-R21"?: React.CSSProperties;
    "body14-R21-U"?: React.CSSProperties;
    "body14-M21-I"?: React.CSSProperties;
    "sub12-B18"?: React.CSSProperties;
    "sub12-S18"?: React.CSSProperties;
    "sub12-M18"?: React.CSSProperties;
    "sub12-R18"?: React.CSSProperties;
    "sub12-R18-U"?: React.CSSProperties;
    "sub12-M18-I"?: React.CSSProperties;
  }

  // Cho phép cấu hình các biến thể mới trong theme
  interface TypographyVariantsOptions {
    "heading48-B56"?: React.CSSProperties;
    "heading32-S40"?: React.CSSProperties;
    "heading28-S42"?: React.CSSProperties;
    "heading24-B36"?: React.CSSProperties;
    "heading24-S36"?: React.CSSProperties;
    "heading20-S30"?: React.CSSProperties;
    "heading18-B27"?: React.CSSProperties;
    "heading18-M27-I"?: React.CSSProperties;
    "body16-B24"?: React.CSSProperties;
    "body16-S24"?: React.CSSProperties;
    "body16-M24"?: React.CSSProperties;
    "body16-R24"?: React.CSSProperties;
    "body16-R24-U"?: React.CSSProperties;
    "body16-M24-I"?: React.CSSProperties;
    "body14-B21"?: React.CSSProperties;
    "body14-S21"?: React.CSSProperties;
    "body14-M21"?: React.CSSProperties;
    "body14-R21"?: React.CSSProperties;
    "body14-R21-U"?: React.CSSProperties;
    "body14-M21-I"?: React.CSSProperties;
    "sub12-B18"?: React.CSSProperties;
    "sub12-S18"?: React.CSSProperties;
    "sub12-M18"?: React.CSSProperties;
    "sub12-R18"?: React.CSSProperties;
    "sub12-R18-U"?: React.CSSProperties;
    "sub12-M18-I"?: React.CSSProperties;
  }
  interface TypographyOptions {
    "heading48-B56"?: React.CSSProperties;
    "heading32-S40"?: React.CSSProperties;
    "heading28-S42"?: React.CSSProperties;
    "heading24-B36"?: React.CSSProperties;
    "heading24-S36"?: React.CSSProperties;
    "heading20-S30"?: React.CSSProperties;
    "heading18-B27"?: React.CSSProperties;
    "heading18-M27-I"?: React.CSSProperties;
    "body16-B24"?: React.CSSProperties;
    "body16-S24"?: React.CSSProperties;
    "body16-M24"?: React.CSSProperties;
    "body16-R24"?: React.CSSProperties;
    "body16-R24-U"?: React.CSSProperties;
    "body16-M24-I"?: React.CSSProperties;
    "body14-B21"?: React.CSSProperties;
    "body14-S21"?: React.CSSProperties;
    "body14-M21"?: React.CSSProperties;
    "body14-R21"?: React.CSSProperties;
    "body14-R21-U"?: React.CSSProperties;
    "body14-M21-I"?: React.CSSProperties;
    "sub12-B18"?: React.CSSProperties;
    "sub12-S18"?: React.CSSProperties;
    "sub12-M18"?: React.CSSProperties;
    "sub12-R18"?: React.CSSProperties;
    "sub12-R18-U"?: React.CSSProperties;
    "sub12-M18-I"?: React.CSSProperties;
  }
  type Variant =
    | "heading48-B56"
    | "heading32-S40"
    | "heading28-S42"
    | "heading24-B36"
    | "heading24-S36"
    | "heading20-S30"
    | "heading18-B27"
    | "heading18-M27-I"
    | "body16-B24"
    | "body16-S24"
    | "body16-M24"
    | "body16-R24"
    | "body16-R24-U"
    | "body16-M24-I"
    | "body14-B21"
    | "body14-S21"
    | "body14-M21"
    | "body14-R21"
    | "body14-R21-U"
    | "body14-M21-I"
    | "sub12-B18"
    | "sub12-S18"
    | "sub12-M18"
    | "sub12-R18"
    | "sub12-R18-U"
    | "sub12-M18-I";
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "heading48-B56"?: true;
    "heading32-S40"?: true;
    "heading28-S42"?: true;
    "heading24-B36"?: true;
    "heading24-S36"?: true;
    "heading20-S30"?: true;
    "heading18-B27"?: true;
    "heading18-M27-I"?: true;
    "body16-B24"?: true;
    "body16-S24"?: true;
    "body16-M24"?: true;
    "body16-R24"?: true;
    "body16-R24-U"?: true;
    "body16-M24-I"?: true;
    "body14-B21"?: true;
    "body14-S21"?: true;
    "body14-M21"?: true;
    "body14-R21"?: true;
    "body14-R21-U"?: true;
    "body14-M21-I"?: true;
    "sub12-B18"?: true;
    "sub12-S18"?: true;
    "sub12-M18"?: true;
    "sub12-R18"?: true;
    "sub12-R18-U"?: true;
    "sub12-M18-I"?: true;
  }

  type Variant =
    | "heading48-B56"
    | "heading32-S40"
    | "heading28-S42"
    | "heading24-B36"
    | "heading24-S36"
    | "heading20-S30"
    | "heading18-B27"
    | "heading18-M27-I"
    | "body16-B24"
    | "body16-S24"
    | "body16-M24"
    | "body16-R24"
    | "body16-R24-U"
    | "body16-M24-I"
    | "body14-B21"
    | "body14-S21"
    | "body14-M21"
    | "body14-R21"
    | "body14-R21-U"
    | "body14-M21-I"
    | "sub12-B18"
    | "sub12-S18"
    | "sub12-M18"
    | "sub12-R18"
    | "sub12-R18-U"
    | "sub12-M18-I";
}
