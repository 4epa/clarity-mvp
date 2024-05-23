"use client";

import { Box, Stack, Typography, Avatar, Button } from "@mui/material";
import {
  getCurrentDate,
  getDaysOfCurrentWeek,
  getCurrentDay,
} from "@/utils/utils";
import theme from "@/theme";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import EventList from "@/components/EventLists";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  const currentDate = getCurrentDate();
  const daysOfWeek = getDaysOfCurrentWeek();

  const [currentDay, setCurrentDay] = useState(getCurrentDay());
  const [events, setEvents] = useState(null);

  const {
    sunEvents,
    monEvents,
    tueEvents,
    wedEvents,
    thuEvents,
    friEvents,
    satEvents,
  } = useContext(AppContext);

  const getEventsSetter = (day) => {
    switch (day) {
      case "Sun":
        return sunEvents;
      case "Mon":
        return monEvents;
      case "Tue":
        return tueEvents;
      case "Wed":
        return wedEvents;
      case "Thu":
        return thuEvents;
      case "Fri":
        return friEvents;
      case "Sat":
        return satEvents;
    }
  };

  const isActive = (day) => {
    return currentDay === day;
  };

  const handleClick = (day) => {
    setCurrentDay(day);
  };

  useEffect(() => {
    const events = getEventsSetter(currentDay);
    setEvents(events);
  }, [currentDay]);

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
                onClick={() => handleClick(day.dayOfWeek)}
                borderRadius="8px"
                padding="5px"
                backgroundColor={
                  isActive(day.dayOfWeek) ? theme.palette.primary.light : "none"
                }>
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
          <Stack
            position="relative"
            overflow="hidden">
            <EventList events={events} />

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

        <Box
          zIndex="100"
          position="fixed"
          right="12px"
          bottom="12px">
          <Link href="/events">
            <Button variant="contained">
              <AddIcon fontSize="large" />
            </Button>
          </Link>
        </Box>
      </Box>
    </main>
  );
}
