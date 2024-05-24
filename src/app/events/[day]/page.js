"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import theme from "@/theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { calculateEventTime } from "@/utils/utils";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import { useSearchParams } from "next/navigation";

const EventList = ({ dayEvents, events, setDayEvents }) => {
  const isSelected = (event) => {
    return !!dayEvents.find((dayEvent) => dayEvent.id === event.id);
  };

  const handleToggle = (event) => {
    if (isSelected(event)) {
      setDayEvents(dayEvents.filter((dayEvent) => dayEvent.id !== event.id));
    } else {
      setDayEvents([...dayEvents, event]);
    }
  };

  return (
    <Stack
      gap="16px"
      direction="column">
      {events.map((event) => (
        <Stack
          onClick={() => handleToggle(event)}
          key={event.id}
          borderRadius="12px"
          padding="16px"
          justifyContent="space-between"
          direction="row"
          backgroundColor={
            isSelected(event)
              ? theme.palette.primary.light
              : theme.palette.secondary.main
          }>
          <Stack
            gap="16px"
            direction="row">
            <AlarmOnIcon />
            <Typography variant="body1">{event.title}</Typography>
          </Stack>
          <Typography variant="body1">
            {calculateEventTime(
              event.hours,
              event.mins,
              event.duration.hours,
              event.duration.mins
            )}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export default function Home({ params }) {
  const day = params.day;

  const { events, getEventsSetter } = useContext(AppContext);

  const [dayEvents, setDayEvents] = getEventsSetter(day);

  return (
    <main>
      <Box padding="16px">
        <Stack
          marginBottom="16px"
          direction="row">
          <Link href="/">
            <ArrowBackIcon />
          </Link>
        </Stack>
        <Typography
          marginBottom="72px"
          variant="h5">
          Event list
        </Typography>
        <EventList
          events={events}
          dayEvents={dayEvents}
          setDayEvents={setDayEvents}
        />
        <Stack
          padding="16px 16px 100px"
          width="100%"
          position="fixed"
          bottom="0px"
          left="0px"
          gap="20px">
          <Link href={`/create-event/${day}`}>
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
