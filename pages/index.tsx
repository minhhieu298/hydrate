/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  styled,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Close, Search } from "@mui/icons-material";
import { CustomRadio } from "@/components/Radio";
import { CustomCheckBox } from "@/components/Checkbox";

export default function LoginPage(props: any) {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div>
      <Button variant="primary" disabled size="xlarge">
        XLarge
      </Button>
      <Button variant="secondary" disabled size="large">
        Large
      </Button>
      <Button variant="danger" disabled size="medium">
        Medium
      </Button>
      <Button variant="ghostPrimary" disabled size="small">
        Small
      </Button>
      <Button variant="ghostSecondary" size="xsmall">
        Xsmall
      </Button>
      {/* <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs> */}
      <Box height={10} />
      <TextField
        label="label"
        size="xlarge"
        variant="standard"
        slotProps={{
          input: {
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Search fontSize="medium" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Close fontSize="medium" />
              </InputAdornment>
            ),
          },
        }}
        error
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <Box height={4} width={100} bgcolor={"red"} />
        <TextField
          label="label"
          size="large"
          variant="standard"
          slotProps={{
            input: {
              disableUnderline: true,
              // startAdornment: (
              //   <InputAdornment position="start">
              //     <Search fontSize="medium" />
              //   </InputAdornment>
              // ),
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <Close fontSize="medium" />
              //   </InputAdornment>
              // )
              placeholder: "placeholder",
            },
          }}
        />
      </Box>
      <Box height={10} />
      <FormControl sx={{ padding: 10 }}>
        <FormLabel id="demo-customized-radios">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          defaultValue="female"
        >
          <FormControlLabel
            value="female"
            control={<CustomRadio />}
            label="Female"
          />
          <FormControlLabel
            value="male"
            control={<CustomRadio />}
            label="Male"
          />
          <FormControlLabel
            value="bisexual"
            control={<CustomRadio disabled />}
            label="Bisexual"
          />
          <FormControlLabel
            value="trans"
            control={<CustomRadio checked disabled />}
            label="Trans"
          />
        </RadioGroup>
      </FormControl>
      <CustomCheckBox checked disabled />
    </div>
  );
}
