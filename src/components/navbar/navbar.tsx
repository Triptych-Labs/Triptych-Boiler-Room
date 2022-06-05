import * as React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Theme from "../../utils/theme/theme";
import Image from "next/image";
import Link from "next/link";

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
            <Box
              sx={{
                position: "fixed",
                height: "5%",
                width: "25%",
              }}
            >
              <Link href="/">
                <a>
                  <Image
                    src={process.env.NEXT_PUBLIC_LOGO_FILE}
                    width={300}
                    layout="fill"
                    objectFit="contain"
                    alt="logo"
                  />
                </a>
              </Link>
            </Box>

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
