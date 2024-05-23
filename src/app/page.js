"use client";

import { Box, Stack, Typography, Avatar } from "@mui/material";
import { getCurrentDate, getDaysOfCurrentWeek } from "@/utils/utils";
import theme from "@/theme";

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

export default function Home() {
  const currentDate = getCurrentDate();
  const daysOfWeek = getDaysOfCurrentWeek();

  const events = [
    {
      title: "morning routine",
      subtasks: [],
      hours: 8,
      mins: 0,
      duration: {
        hours: 0,
        mins: 50,
      },
    },
    {
      title: "Daily meeting",
      subtasks: [],
      hours: 9,
      mins: 0,
      duration: {
        hours: 0,
        mins: 50,
      },
    },
    {
      title: "Breakfast",
      subtasks: [],
      hours: 10,
      mins: 0,
      duration: {
        hours: 1,
        mins: 0,
      },
    },
    {
      title: "Work",
      subtasks: [],
      hours: 11,
      mins: 30,
      duration: {
        hours: 8,
        mins: 0,
      },
    },
  ];

  return (
    <main>
      <Box width="100%">
        <Box padding="16px 12px">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="50px">
            <Stack>
              <Typography variant="body1">{currentDate}</Typography>
              <Typography variant="h5">Today</Typography>
            </Stack>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/564x/45/1e/ef/451eefbed34882342186f2000643ce6a.jpg"
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between">
            {daysOfWeek.map((day) => (
              <Box
                key={day.date}
                borderRadius="8px"
                padding="5px">
                <Typography variant="bod1">{day.dayOfWeek}</Typography>
                <Typography variant="h5">{day.date}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Stack>
          <Box
            sx={{
              padding: "24px",
              background: theme.palette.primary.light,
              borderRadius: "12px 12px 0px 0px",
            }}>
            <Typography variant="h5">Today`s schedule</Typography>
          </Box>
          <Stack position="relative" overflow="hidden">
            {events.map((event, index) => {
              const { title, hours, mins, duration } = event;

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
                  borderLeft="4px solid #00B2EA"
                  justifyContent="space-between">
                  <Typography variant="body2">{title} | 09:00</Typography>
                  
                  <Box
                    position="absolute"
                    top="0px"
                    left="0px"
                    width="100%"
                    height="100%"
                    backgroundColor="#00B2EA"
                    sx={{opacity: "0.25"}}
                  />
                </Stack>
              );
            })}

            <Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  00:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  01:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  02:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  03:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  04:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  05:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  06:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  07:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  08:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  09:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  10:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  11:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  12:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  13:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  14:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  15:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  16:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  17:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  18:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  19:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  20:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  21:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  22:00
                </Box>
              </Stack>
              <Stack
                borderBottom={`2px solid ${theme.palette.primary.light}`}
                direction="row">
                <Box
                  height="84px"
                  padding="8px">
                  23:00
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </main>
  );
}
