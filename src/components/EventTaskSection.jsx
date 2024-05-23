/** @jsxImportSource @emotion/react */

"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import theme from "@/theme";

const Task = ({ title, time }) => {
  const [complete, setComplete] = useState(false);

  const getColor = () => {
    return complete ? theme.palette.primary.main : "#D9D9D9";
  };

  const handleClick = () => {
    setComplete(!complete);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between">
      <Stack
        direction="row"
        gap="16px">
        <Box
          onClick={handleClick}
          sx={{
            padding: "12px",
            background: getColor(),
            borderRadius: "50%",
          }}
        />
        <Typography variant="body2">{title}</Typography>
      </Stack>
      <Typography variant="body2">{time} min</Typography>
    </Stack>
  );
};

const EventTaskSection = () => {
  const subTasks = [
    {
      id: 1,
      title: "Reading",
      time: 20,
    },
    {
      id: 2,
      title: "Writting",
      time: 20,
    },
    {
      id: 3,
      title: "Learn words",
      time: 20,
    },
  ];

  return (
    <Stack
      gap="16px"
      padding="16px"
      direction="column"
      sx={{ background: "#EBEBEB", borderRadius: "12px" }}>
      {subTasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            time={task.time}
          />
        );
      })}
    </Stack>
  );
};

export default EventTaskSection;
