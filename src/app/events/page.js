"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import { getCurrentDate, getDaysOfCurrentWeek } from "@/utils/utils";
import theme from "@/theme";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";



export default function Home() {



  return (
    <main>
        
    <Box padding="16px">
    <Stack
          marginBottom="16px"
          direction="row">
          <ArrowBackIcon />
        </Stack>
        <Typography
          marginBottom="72px"
          variant="h5">
          Event list
        </Typography>
    <Stack gap="16px" direction="column">
        <Stack borderRadius="12px" padding="16px" justifyContent="space-between" direction="row" backgroundColor={theme.palette.secondary.main}>
            <Stack gap="16px" direction="row">
                <RestaurantIcon />
                <Typography variant="body1">Breackfast</Typography>
            </Stack>
            <Typography variant="body1">10:00 - 11:00</Typography>
        </Stack>

      </Stack>

      <Stack
          padding="16px 16px 100px"
          width="100%"
          position="fixed"
          bottom="0px"
          left="0px"
          gap="20px">
          <Link href="/create-evnt">
          <Button
          fullWidth={true}
            variant="contained"
            color="primary">
            Create new event
          </Button>
          </Link>
        </Stack>
    </Box>
    </main>
  );
}
