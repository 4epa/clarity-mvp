/** @jsxImportSource @emotion/react */

"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import theme from "@/theme";

const Task = ({ title }) => {
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
    </Stack>
  );
};

const EventTaskSection = ({ subTasks }) => {
  console.log(subTasks)

  return (
    <Stack
      gap="16px"
      padding="16px"
      direction="column"
      sx={{ background: "#EBEBEB", borderRadius: "12px" }}>
      {subTasks && subTasks.map((task, index) => {
        return (
          <Task
            key={index}
            title={task.title}
          />
        );
      })}
    </Stack>
  );
};

export default EventTaskSection;
