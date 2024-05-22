import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import { error, green, info, neutral, success, warning, gray } from "./colors";

export function createPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: green.light,
    },
    divider: "#F2F4F7",
    error,
    info,
    mode: "light",
    neutral,
    primary: green,
    secondary: gray,
    success,
    text: {
      primary: green.darkest,
      secondary: neutral[500],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
}
