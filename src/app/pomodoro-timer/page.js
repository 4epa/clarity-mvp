"use client";

import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import TimerDisplay from "@/components/TimerDisplay";
import theme from "@/theme";

export default function Home() {
  const [isInit, setIsInit] = useState(false);

  const [workDuration, setWorkDuration] = useState(30);
  const [restDuration, setRestDuration] = useState(5);

  const [duration, setDuration] = useState(workDuration * 60);
  const [timeLeft, setTimeLeft] = useState(workDuration * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isWork, setIsWork] = useState(true);

  useEffect(() => {
    let timer;

    if (isActive && !isPaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      if (isWork) {
        setTimeLeft(restDuration * 60);
        setDuration(restDuration * 60);
        setIsWork(false);
      } else {
        setTimeLeft(workDuration * 60);
        setDuration(workDuration * 60);
        setIsWork(true);
        setIsActive(false);
      }
    }

    return () => clearInterval(timer);
  }, [isActive, isPaused, timeLeft, isWork, restDuration, workDuration]);

  const handleStart = () => {
    if (!isInit) {
      setIsInit(true);
      setDuration(workDuration * 60);
      setTimeLeft(workDuration * 60);
    }

    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
  };

  const handleStop = () => {
    setIsInit(false);
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(workDuration * 60);
    setDuration(workDuration * 60);
  };

  const handleChange = (type, action) => {
    if (type !== "work" && type !== "rest") return;

    const setter = type === "work" ? setWorkDuration : setRestDuration;
    const currentDuration = type === "work" ? workDuration : restDuration;

    const updateDuration =
      action === "+" ? currentDuration + 1 : Math.max(currentDuration - 1, 1);

    setter(updateDuration);
  };

  const getColor = (active) => {
    return active ? theme.palette.primary.main : theme.palette.secondary.main;
  };

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
          Pomodoro timer
        </Typography>

        <TimerDisplay
          duration={duration}
          timeLeft={timeLeft}
        />

        {!isInit && (
          <>
            <Stack
              margin="24px 0px 72px"
              gap="16px"
              padding="16px"
              direction="column"
              sx={{ background: "#EBEBEB", borderRadius: "12px" }}>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row">
                <Typography variant='h3' >Work</Typography>
                <Stack
                  gap="24px"
                  alignItems="center"
                  direction="row">
                  <IconButton
                    onClick={() => handleChange("work", "+")}
                    color="primary"
                    size="small">
                    <AddIcon />
                  </IconButton>
                  <Typography variant='h3' >{workDuration}</Typography>
                  <IconButton
                    onClick={() => handleChange("work", "-")}
                    color="primary"
                    size="small">
                    <RemoveIcon />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row">
                <Typography variant='h3' >Rest</Typography>
                <Stack
                  gap="24px"
                  alignItems="center"
                  direction="row">
                  <IconButton
                    onClick={() => handleChange("rest", "+")}
                    color="primary"
                    size="small">
                    <AddIcon />
                  </IconButton>
                  <Typography variant='h3' >{restDuration}</Typography>
                  <IconButton
                    onClick={() => handleChange("rest", "-")}
                    color="primary"
                    size="small">
                    <RemoveIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>

            <Stack>
              <Button
                variant="contained"
                onClick={handleStart}>
                Start
              </Button>
            </Stack>
          </>
        )}

        {isInit && (
          <>
            <Typography
              textAlign="center"
              margin="30px 0px"
              variant="h5">
              {isWork ? "Work" : "Rest"} now
            </Typography>

            <Stack
              gap="16px"
              direction="row"
              justifyContent="center">
              <Box
                padding="8px 24px"
                borderRadius="8px"
                backgroundColor={getColor(isWork)}
              />
              <Box
                padding="8px 24px"
                borderRadius="8px"
                backgroundColor={getColor(!isWork)}
              />
            </Stack>

            <Stack
              padding="72px 16px 100px"
              width="100%"
              gap="20px">
              <Button
                onClick={() => (isPaused ? handleStart() : handlePause())}
                variant="contained"
                color="secondary">
                {isPaused ? "Start" : "Pause"}
              </Button>

              <Button
                onClick={handleStop}
                variant="contained"
                color="primary">
                Stop
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </main>
  );
}
