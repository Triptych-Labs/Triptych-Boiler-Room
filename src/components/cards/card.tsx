import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import Theme from "../../utils/theme/theme";

export const StyledCard = styled(Paper)({
  background: Theme.palette.secondary.light,
  color: Theme.typography.body1.color,
  textAlign: "center",
  justifyContent: "center",
  padding: "10px",
  margin: "10px",
});
