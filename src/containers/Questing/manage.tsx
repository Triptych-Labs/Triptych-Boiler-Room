import { Metaplex } from "@metaplex-foundation/js-next";
import { Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledCard } from "../../components/cards";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  questedAtom,
  questsAtom,
  nftsQuestedExhaustAtom,
  showCompletedAtom,
  nftsQuestedAtom,
  nftsSelectionAtom,
  questsSelectionAtom,
} from "./state/atoms";

//@ts-ignore
export const QuestedGalleryItems = ({ onSelection }) => {
  const [nftsQuested, setNftsQuested] = useRecoilState(nftsQuestedAtom);
  const [quests] = useRecoilState(questsAtom);
  const [quested] = useRecoilState(questedAtom);
  const [nftsQuestedExhaust] = useRecoilState(nftsQuestedExhaustAtom);
  const [showCompleted] = useRecoilState(showCompletedAtom);
  const [questSelection] = useRecoilState(questsSelectionAtom);
  const [, setNftsSelection] = useRecoilState(nftsSelectionAtom);
  useEffect(() => {
    async function normalizeQuested() {
      const nfts = await Promise.all(
        (
          await Metaplex.make(
            new Connection(
              "https://sparkling-dark-shadow.solana-devnet.quiknode.pro/0e9964e4d70fe7f856e7d03bc7e41dc6a2b84452/"
            )
          )
            .nfts()
            .findAllByMintList(
              //@ts-ignore
              quested[questSelection]
                .filter(
                  //@ts-ignore
                  ({ QuestAccount }) => QuestAccount.Completed === showCompleted
                )
                .filter(
                  //@ts-ignore
                  ({ QuestAccount }) =>
                    !nftsQuestedExhaust
                      //@ts-ignore
                      .map((mint) => mint.toString())
                      .includes(QuestAccount.DepositTokenMint)
                )
                .map(
                  //@ts-ignore
                  ({ QuestAccount }) =>
                    new PublicKey(QuestAccount.DepositTokenMint)
                )
            )
        ).map(async (nft) => {
          let metadata = {};
          try {
            // metadata = (await axios.get(nft.uri)).data;
          } catch (e) {}
          return { ...nft, offchainMetadata: metadata };
        })
      );
      //@ts-ignore
      setNftsQuested(nfts);
      //@ts-ignore
      setNftsSelection(nfts.map(() => false));
    }
    normalizeQuested();
  }, [
    nftsQuestedExhaust,
    quested,
    showCompleted,
    quests,
    questSelection,
    setNftsQuested,
    setNftsSelection,
  ]);

  const [buttonState, setButtonState] = useState(false);
  //@ts-ignore
  let buttonText;
  if (showCompleted) {
    switch (buttonState) {
      case false: {
        buttonText = "Claim";
        break;
      }
      case true: {
        buttonText = "Claiming";
        break;
      }
    }
  } else {
    switch (buttonState) {
      case false: {
        buttonText = "Withdraw";
        break;
      }
      case true: {
        buttonText = "Withdrawing";
        break;
      }
    }
  }

  return (
    <Grid alignItems="center" container>
      {nftsQuested.map((nft, nftIndex) => (
        <Grid xs={4} key={nftIndex}>
          <Box textAlign="center">
            <StyledCard>
              <CardMedia
                component="img"
                height="140"
                image={
                  //@ts-ignore
                  nft.offchainMetadata.hasOwnProperty("image")
                    ? //@ts-ignore
                      nft.offchainMetadata.image
                    : "https://www.arweave.net/GLeORZQuLxFzDFK0aBQKwhQUUF0-4eawXnrjdtmv5fg?ext=png"
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {
                    //@ts-ignore
                    nft.name
                  }
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={(event) => {
                    setButtonState(!buttonState);
                    onSelection(event, nftIndex);
                  }}
                  size="small"
                >
                  {
                    //@ts-ignore
                    buttonText
                  }
                </Button>
              </CardActions>
            </StyledCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
