import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      sx={{
        width: 500,
        display: "flex",
        flexDirection: "column",
        mt: 2,
        gap: 5,
      }}
    >
      <Box>
        <TextField
          id="filled-required"
          label="Required"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    disableTouchRipple
                    disableFocusRipple
                    disableRipple
                    tabIndex={-1}
                  >
                    X
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    disableTouchRipple
                    disableFocusRipple
                    disableRipple
                    tabIndex={-1}
                  >
                    X
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </Box>
      <Box>
        <TextField id="filled-disabled" label="Disabled" />
      </Box>
    </Box>
  );
};

export default Home;
