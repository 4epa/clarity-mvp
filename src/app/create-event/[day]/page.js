"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { getEvent } from "@/utils/utils";

export default function Home({params}) {
  const day = params.day;

  const [title, setTitle] = useState("");
  const [startHour, setStartHour] = useState("");
  const [startMin, setStartMin] = useState("");
  const [durationHour, setDurationHour] = useState("");
  const [durationMin, setDurationMin] = useState("");
  const [color, setColor] = useState("#00B2EA");

  const { events, setEvents } = useContext(AppContext);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeStartHour = (event) => {
    setStartHour(event.target.value);
  };

  const handleChangeStartMin = (event) => {
    setStartMin(event.target.value);
  };

  const handleChangeDurationHour = (event) => {
    setDurationHour(event.target.value);
  };

  const handleChangeDurationMin = (event) => {
    setDurationMin(event.target.value);
  };

  const handleAlignment = (event, newColor) => {
    setColor(newColor);
  };

  const handleSubmit = () => {
    if (
      !!title &&
      !!startHour &&
      !!startMin &&
      !!durationHour &&
      !!durationMin &&
      !!color
    ) {
      const event = getEvent(
        title,
        startHour,
        startMin,
        durationHour,
        durationMin,
        color
      );

      setTitle("");
      setStartHour("");
      setStartMin("");
      setDurationHour("");
      setDurationMin("");
      setColor("#00B2EA");

      setEvents([...events, event]);
    }
  };

  return (
    <main>
      <Box padding="16px 12px">
        <Stack
          marginBottom="16px"
          direction="row">
          <Link href={`/events/${day}`}>
            <ArrowBackIcon />
          </Link>
        </Stack>
        <Typography
          marginBottom="72px"
          variant="h5">
          New event
        </Typography>

        <Stack gap="16px">
          <TextField
            value={title}
            onChange={handleChangeTitle}
            label="Title"
          />

          <Typography variant="h6">Start</Typography>
          <Stack
            gap="16px"
            direction="row">
            <TextField
              value={startHour}
              onChange={handleChangeStartHour}
              type="number"
              label="HH"
            />

            <TextField
              value={startMin}
              onChange={handleChangeStartMin}
              type="number"
              label="MM"
            />
          </Stack>

          <Typography variant="h6">Duration</Typography>
          <Stack
            gap="16px"
            direction="row">
            <TextField
              value={durationHour}
              onChange={handleChangeDurationHour}
              type="number"
              label="HH"
            />

            <TextField
              value={durationMin}
              onChange={handleChangeDurationMin}
              type="number"
              label="MM"
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="center">
            <ToggleButtonGroup
              value={color}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment">
              <ToggleButton
                value="#00B2EA"
                aria-label="left aligned">
                <Box
                  padding="16px"
                  backgroundColor="#00B2EA"
                />
              </ToggleButton>
              <ToggleButton
                value="#00EA09"
                aria-label="centered">
                <Box
                  padding="16px"
                  backgroundColor="#00EA09"
                />
              </ToggleButton>
              <ToggleButton
                value="#FF8718"
                aria-label="right aligned">
                <Box
                  padding="16px"
                  backgroundColor="#FF8718"
                />
              </ToggleButton>
              <ToggleButton
                value="#E94949"
                aria-label="justified">
                <Box
                  padding="16px"
                  backgroundColor="#E94949"
                />
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>

        <Stack
          padding="16px 16px 100px"
          width="100%"
          position="fixed"
          bottom="0px"
          left="0px"
          gap="20px">
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary">
            Create event
          </Button>
        </Stack>
      </Box>
    </main>
  );
}
