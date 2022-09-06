import React from "react";
import { Paper, Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
export default function Popular() {
  return (
    <Box sx={{ background: "#222", color: "common.white" }}>
      <Typography py={3} mx={4} variant="h6">
        Popular Drakor
      </Typography>
      <Box
        sx={{
          height: "100%",
          background: "#222",
          color: "common.white",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container>
          <Grid item xs={2} mx={2.5}>
            <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
              <Image src="/../public/bgdrakor.jpg" width={400} height={400} objectFit="contain" />
              <Typography sx={{ position: "relative", my: 2 }}>Business Proposal</Typography>
            </Button>
          </Grid>
          <Grid item xs={2} mx={2.5}>
            <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
              <Image src="/../public/bgdrakor.jpg" width={400} height={400} objectFit="contain" />
              <Typography sx={{ position: "relative", my: 2 }}>Business Proposal</Typography>
            </Button>
          </Grid>
          <Grid item xs={2} mx={2.5}>
            <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
              <Image src="/../public/bgdrakor.jpg" width={400} height={400} objectFit="contain" />
              <Typography sx={{ position: "relative", my: 2 }}>Business Proposal</Typography>
            </Button>
          </Grid>
          <Grid item xs={2} mx={2.5}>
            <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
              <Image src="/../public/bgdrakor.jpg" width={400} height={400} objectFit="contain" />
              <Typography sx={{ position: "relative", my: 2 }}>Business Proposal</Typography>
            </Button>
          </Grid>
          <Grid item xs={2} mx={2.5}>
            <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
              <Image src="/../public/bgdrakor.jpg" width={400} height={400} objectFit="contain" />
              <Typography sx={{ position: "relative", my: 2 }}>Business Proposal</Typography>
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ background: "#222", color: "common.white" }}>
          <Typography py={3} mx={4} variant="h6">
            Popular Movie
          </Typography>
          <Box
            sx={{
              height: "100%",
              background: "#222",
              color: "common.white",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container>
              <Grid item xs={2} mx={2.5}>
                <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                  <Image src="/../public/download.jpg" width={300} height={300} objectFit="contain" />
                  <Typography sx={{ position: "relative", my: 2 }}>True Beauty</Typography>
                </Button>
              </Grid>
              <Grid item xs={2} mx={2.5}>
                <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                  <Image src="/../public/download.jpg" width={300} height={300} objectFit="contain" />
                  <Typography sx={{ position: "relative", my: 2 }}>True Beauty</Typography>
                </Button>
              </Grid>
              <Grid item xs={2} mx={2.5}>
                <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                  <Image src="/../public/download.jpg" width={300} height={300} objectFit="contain" />
                  <Typography sx={{ position: "relative", my: 2 }}>True Beauty</Typography>
                </Button>
              </Grid>
              <Grid item xs={2} mx={2.5}>
                <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                  <Image src="/../public/download.jpg" width={300} height={300} objectFit="contain" />
                  <Typography sx={{ position: "relative", my: 2 }}>True Beauty</Typography>
                </Button>
              </Grid>
              <Grid item xs={2} mx={2.5}>
                <Button variant="contained" sx={{ background: "#2222", display: "flex", flexDirection: "column" }}>
                  <Image src="/../public/download.jpg" width={300} height={300} objectFit="contain" />
                  <Typography sx={{ position: "relative", my: 2 }}>True Beauty</Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}