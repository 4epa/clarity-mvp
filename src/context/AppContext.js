"use client";

import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sunEvents, setSunEvents] = useState([]);
  const [monEvents, setMonEvents] = useState([]);
  const [tueEvents, setTueEvents] = useState([]);
  const [wedEvents, setWedEvents] = useState([]);
  const [thuEvents, setThuEvents] = useState([
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
  ]);
  const [friEvents, setFriEvents] = useState([]);
  const [satEvents, setSatEvents] = useState([]);

  return (
    <AppContext.Provider
      value={{
        sunEvents,
        setSunEvents,
        monEvents,
        setMonEvents,
        tueEvents,
        setTueEvents,
        wedEvents,
        setWedEvents,
        thuEvents,
        setThuEvents,
        friEvents,
        setFriEvents,
        satEvents,
        setSatEvents,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };