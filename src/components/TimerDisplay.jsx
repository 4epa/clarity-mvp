/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import theme from "@/theme";
import { formatTime } from "@/utils/utils";

const stroke = css`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  width: 240px;
  height: 240px;
  transform: rotate(270deg);

  & circle {
    fill: none;
    transition: stroke-dashoffset 1s linear;
  }

  & .total {
    stroke: ${theme.palette.primary.main};
  }

  & .progress {
    stroke: ${theme.palette.primary.light};
  }
`;

const TimerDisplay = ({ duration, timeLeft }) => {
  const radius = 115;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - timeLeft / duration) * -1;

  return (
    <Stack
      justifyContent="center"
      direction="row">
      <Box
        sx={{
          padding: "120px",
          background: theme.palette.primary.light,
          borderRadius: "50%",
          color: "#fff",
          fontSize: "48px",
          position: "relative",
        }}>
        <svg
          css={stroke}
          viewBox="0 0 240 240">
          <circle
            className="total"
            r={radius}
            cx="120"
            cy="120"
            fill="transparent"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset="0"
          />
          <circle
            className="progress"
            r={radius}
            cx="120"
            cy="120"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
          {formatTime(timeLeft)}
        </Box>
      </Box>
    </Stack>
  );
};

export default TimerDisplay;
