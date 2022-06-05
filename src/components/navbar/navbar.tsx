import * as React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Theme from "../../utils/theme/theme";

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${Theme.palette.primary.main};
  color: ${Theme.typography.body1.color};
`;

export const Navbar = () => {
  return (
    <AppBar position="static">
      <TopBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".03rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {String(process.env.NEXT_PUBLIC_PROJECT_NAME || "...")}
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "flex", md: "flex" },
              }}
            >
              <WalletMultiButton />
            </Box>
          </Toolbar>
        </Container>
      </TopBar>
    </AppBar>
  );
};
export default Navbar;
