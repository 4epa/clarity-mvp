"use client";

import EventTaskSection from "@/components/EventTaskSection";
import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Box padding="16px 12px">
        <Stack
          marginBottom="16px"
          direction="row">
          <ArrowBackIcon />
        </Stack>
        <Typography
          marginBottom="72px"
          variant="h5">
          English lessons
        </Typography>

        <EventTaskSection />

        <Stack
          padding="16px 16px 100px"
          width="100%"
          position="fixed"
          bottom="0px"
          left="0px"
          gap="20px">
          <Link href="/pomodoro-timer">
            <Button
              fullWidth={true}
              variant="contained"
              color="secondary">
              Add pomodoro timer
            </Button>
          </Link>

          <Button
            variant="contained"
            color="primary">
            Finish event
          </Button>
        </Stack>
      </Box>
    </main>
  );
}
