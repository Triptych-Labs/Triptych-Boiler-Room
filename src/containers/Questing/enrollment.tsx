import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledCard } from "../../components/cards";
import { Box, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import {
  nftsAtom,
  nftsSelectionAtom,
  questsSelectionAtom,
} from "./state/atoms";

// @ts-ignore
export const NFTGalleryItems = ({ onSelection }) => {
  const [nfts] = useRecoilState(nftsAtom);
  const [nftsSelection] = useRecoilState(nftsSelectionAtom);

  return (
    <Grid alignItems="center" container>
      {nfts.map((nft, nftIndex) => (
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
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={(event) => onSelection(event, nftIndex)}
                  size="small"
                >
                  {!nftsSelection[nftIndex] ? "Enroll" : "Withdraw"}
                </Button>
              </CardActions>
            </StyledCard>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

//@ts-ignore
export const QuestStart = ({ onSelection }) => {
  const [nfts] = useRecoilState(nftsAtom);
  const [nftsSelection] = useRecoilState(nftsSelectionAtom);
  const [questSelection] = useRecoilState(questsSelectionAtom);
  return (
    <>
      <StyledCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
              //@ts-ignore
              questSelection.Name
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <CardActions
            style={{
              display: "block",
              textAlign: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Button
              onClick={(event) => onSelection(event, questSelection)}
              size="small"
            >
              Start Quest
            </Button>
          </CardActions>
        </CardContent>
      </StyledCard>
      <Grid alignItems="center" container>
        {nfts
          .filter((_, nftIndex) => nftsSelection[nftIndex])
          .map((nft, nftIndex) => (
            <Grid xs={4} key={nftIndex}>
              <Box textAlign="center">
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      // @ts-ignore
                      nft.offchainMetadata.hasOwnProperty("image")
                        ? // @ts-ignore
                          nft.offchainMetadata.image
                        : "https://www.arweave.net/GLeORZQuLxFzDFK0aBQKwhQUUF0-4eawXnrjdtmv5fg?ext=png"
                    }
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {
                        // @ts-ignore
                        nft.name
                      }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Box>
            </Grid>
          ))}
      </Grid>
    </>
  );
};
