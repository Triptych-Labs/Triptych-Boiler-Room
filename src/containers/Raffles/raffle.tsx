import {Metaplex} from "@metaplex-foundation/js-next";

import React, {useState, useEffect, useCallback, useMemo} from "react";
import {Transaction, Message} from "@solana/web3.js";

import {Box, Grid, Paper} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useRecoilState} from "recoil";
import {PublicKey} from "@solana/web3.js";
import {useWallet} from "@solana/wallet-adapter-react";
import {Connection} from "@solana/web3.js";
import {Theme} from '../../utils/theme/theme';

import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';

import Link from 'next/link';

import {motion, useAnimation, AnimatePresence} from "framer-motion";

import axios from "axios";
import {
  resyncAtom,
  nftsAtom,
  nftsSelectionAtom,
  nftsQuestedAtom,
  nftsQuestedExhaustAtom,
  questsAtom,
  questedAtom,
  questsSelectionAtom,
  questsProgressionAtom,
  showCompletedAtom,
} from "./state/atoms";
import {StyledCard} from "../../components/cards";

import {NFTGalleryItems, QuestStart} from "./enrollment";
import {QuestedGalleryItems} from "./manage";
import {QuestAction} from "./rewards";

declare function get_quests(oracle: String): Promise<any>;
declare function get_quested(oracle: String, holder: String): Promise<any>;
declare function enroll_questor(wallet_publicKey: String): Promise<any>;
declare function enroll_questees(
  wallet_publicKey: String,
  questees: String
): Promise<any>;
declare function start_quests(
  wallet_publicKey: String,
  questees: String,
  oracle: String,
  questIndex: String
): Promise<any>;
declare function end_quests(
  wallet_publicKey: String,
  questees: String,
  oracle: String,
  questIndex: String
): Promise<any>;
declare function do_rngs(
  wallet_publicKey: String,
  questees: String,
  oracle: String,
  questIndex: String
): Promise<any>;
declare function mint_rewards(
  wallet_publicKey: String,
  questees: String,
  oracle: String,
  questIndex: String
): Promise<any>;
declare function get_rewards(
  wallet_publicKey: String,
  questees: String,
  oracle: String,
  questIndex: String
): Promise<any>;

const ORACLE = new PublicKey("8gvUXYSdqZ5dyGcN1fas5Q7qLRJgJNE693Bt7xgYZXBh");

const RaffleInfoMetadata = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {duration: 5}}}
        exit={{opacity: 0, transition: {duration: 5}}}
        key={"raffle-info"}
      >
        <StyledCard sx={{margin: '10%', display: 'flex', flexDirection: 'column', height: 'inherit'}} className="raffle-information-card">
          <Typography gutterBottom variant="h5" component="div">
            Raffle Info
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Transactions
            </Typography>
            <div style={{height: '400px'}}>
              <DataGrid
                rows={[
                  {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
                  {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
                  {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
                  {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
                  {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
                  {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
                  {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
                  {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
                  {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
                ]}
                columns={[
                  {field: 'id', headerName: 'ID', width: 70},
                  {field: 'firstName', headerName: 'First name', width: 130},
                  {field: 'lastName', headerName: 'Last name', width: 130},
                  {
                    field: 'age',
                    headerName: 'Age',
                    type: 'number',
                    width: 90,
                  },
                  {
                    field: 'fullName',
                    headerName: 'Full name',
                    description: 'This column has a value getter and is not sortable.',
                    sortable: false,
                    width: 160,
                    valueGetter: (params: GridValueGetterParams) =>
                      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
                  },
                ]}
                pageSize={5}
                rowsPerPageOptions={[5]}
                style={{color: 'inherit', backgroundColor: Theme.palette.secondary.light}}
              />
            </div>
          </CardContent>
        </StyledCard>
      </motion.div>
    </AnimatePresence>
  );
}

const RaffleInfoTicketing = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {duration: 3.5}}}
        exit={{opacity: 0, transition: {duration: 3.5}}}
        key={"raffle-info"}
      >
        <StyledCard sx={{margin: '10%', display: 'flex', flexDirection: 'column', height: 'inherit'}} className="raffle-information-card">
          <Typography gutterBottom variant="h5" component="div">
            Ticketing
          </Typography>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              0/500 Tickets Remaining!
            </Typography>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <StyledCard sx={{margin: '10%', display: 'flex', flexDirection: 'column', height: 'inherit'}} className="raffle-information-modal">
                <Grid container>
                  <Grid item xs={4}>
                    <Button>
                      Buy
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography gutterBottom variant="h5" component="div">
                      Buy
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Button>
                      View
                    </Button>
                  </Grid>
                </Grid>
                <CardContent>
                  <TextField
                    style={{fontSize: '1.50rem', width: '20%', color: 'inherit'}}
                    inputProps={{min: 0, style: {textAlign: 'center', color: Theme.typography.body1.color}}}
                    label="Tickets"
                    id="standard-size-small"
                    defaultValue="0"
                    variant="standard"
                  />
                  <Button sx={{fontSize: '1.0rem', }}>
                    Confirm
                  </Button>
                </CardContent>
              </StyledCard>
            </div>
          </CardContent>
        </StyledCard>
      </motion.div>
    </AnimatePresence>
  );
}

const RaffleInfo = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {duration: 6}}}
        exit={{opacity: 0, transition: {duration: 6}}}

        style={{fontSize: 100, height: '70%'}}
        key={"raffle-info"}
      >
        <StyledCard sx={{margin: '10%', display: 'flex', flexDirection: 'column', height: 'inherit'}} className="raffle-information-card">
          <Typography sx={{color: Theme.typography.body1.color, fontSize: "2rem"}} align="center" gutterBottom variant="h5" component="div">
            {
              //@ts-ignore
              String(
                "DeadSimp #69420"
              )
            }
          </Typography>
          <CardContent>
            <CardMedia
              style={{height: "280px"}}
              component="img"
              height="280"
              image="https://www.arweave.net/GLeORZQuLxFzDFK0aBQKwhQUUF0-4eawXnrjdtmv5fg?ext=png"
              alt="green iguana"
            />
          </CardContent>
        </StyledCard>
      </motion.div>
    </AnimatePresence>
  );
}




export const Raffle = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: "175px",
          paddingBottom: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{color: Theme.palette.primary.main, fontSize: "2rem"}} align="left" gutterBottom variant="h5" component="div">
          {
            //@ts-ignore
            String(
              "Raffle Name!"
            )
          }
        </Typography>
        <div
          className="raffle-information-box"
          style={{
            paddingTop: "2vh",
            paddingBottom: "5vh",
            borderRadius: '25px',
            width: "80vw",
            height: '100%',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <Grid container direction="row" sx={{width: 'inherit', padding: '10px'}}>
            <Grid item xs={6}>
              <RaffleInfo />
            </Grid>
            <Grid container direction="column" xs={6}>
              <Grid item>
                <RaffleInfoMetadata />
              </Grid>
              <Grid item>
                <RaffleInfoTicketing />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

