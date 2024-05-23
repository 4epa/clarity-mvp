"use client";

import { Box, Stack, Typography, Avatar } from "@mui/material";
import {
  calculateEventTime,
  getCurrentDate,
  getDaysOfCurrentWeek,
} from "@/utils/utils";
import theme from "@/theme";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const MINUTES_IN_DAY = 1440;
const HEIGHT_OF_TIME_BAR = 2054.4;
const HEIGHT_OF_TIME_BAR_ITEM = 85.6;

const getMins = (hours, mins) => {
  return hours * 60 + mins;
};

const getEventPosition = (mins) => {
  return (HEIGHT_OF_TIME_BAR * mins) / MINUTES_IN_DAY + "px";
};

const getEventHeight = (mins) => {
  return (HEIGHT_OF_TIME_BAR_ITEM * mins) / 60 + "px";
};

const EventList = ({ events }) => {
  return (
    events &&
    events.map((event, index) => {
      const { title, hours, mins, duration, color } = event;

      const positionMins = getMins(hours, mins);
      const durationMins = getMins(duration.hours, duration.mins);

      const position = getEventPosition(positionMins);
      const height = getEventHeight(durationMins);

      return (
        <Stack
          key={index}
          position="absolute"
          left="60px"
          top={position}
          height={height}
          width="100%"
          padding="4px 6px"
          borderLeft={`4px solid ${color}`}
          justifyContent="space-between">
          <Typography variant="body2">
            {title} |{" "}
            {calculateEventTime(hours, mins, duration.hours, duration.mins)}
          </Typography>

          <Box
            position="absolute"
            top="0px"
            left="0px"
            width="100%"
            height="100%"
            backgroundColor={color}
            sx={{ opacity: "0.25" }}
          />
        </Stack>
      );
    })
  );
};

export default EventList;
