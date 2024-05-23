"use client";

import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "morning routine",
      subtasks: [],
      hours: 8,
      mins: 0,
      color: "#00EA09",
      duration: {
        hours: 0,
        mins: 50,
      },
    },
    {
      id: "2",
      title: "Daily meeting",
      subtasks: [],
      hours: 9,
      mins: 0,
      color: "#FF8718",
      duration: {
        hours: 0,
        mins: 50,
      },
    },
    {
      id: "3",
      title: "Breakfast",
      subtasks: [],
      hours: 10,
      mins: 0,
      color: "#E94949",
      duration: {
        hours: 1,
        mins: 0,
      },
    },
    {
      id: "4",
      title: "Work",
      subtasks: [],
      hours: 11,
      mins: 30,
      color: "#00B2EA",
      duration: {
        hours: 8,
        mins: 0,
      },
    },
  ]);

  const [sunEvents, setSunEvents] = useState([]);
  const [monEvents, setMonEvents] = useState([]);
  const [tueEvents, setTueEvents] = useState([]);
  const [wedEvents, setWedEvents] = useState([]);
  const [thuEvents, setThuEvents] = useState([
    {
      id: "1",
      title: "morning routine",
      subtasks: [],
      hours: 8,
      mins: 0,
      color: "#00EA09",
      duration: {
        hours: 0,
        mins: 50,
      },
    },
    {
      id: "2",
      title: "Daily meeting",
      subtasks: [],
      hours: 9,
      mins: 0,
      color: "#FF8718",
      duration: {
        hours: 0,
        mins: 50,
      },
    },
    {
      id: "3",
      title: "Breakfast",
      subtasks: [],
      hours: 10,
      mins: 0,
      color: "#E94949",
      duration: {
        hours: 1,
        mins: 0,
      },
    },
    {
      id: "4",
      title: "Work",
      subtasks: [],
      hours: 11,
      mins: 30,
      color: "#00B2EA",
      duration: {
        hours: 8,
        mins: 0,
      },
    },
  ]);
  const [friEvents, setFriEvents] = useState([]);
  const [satEvents, setSatEvents] = useState([]);

  const getEventsSetter = (day) => {
    switch (day) {
      case "Sun":
        return [sunEvents, setSunEvents];
      case "Mon":
        return [monEvents, setMonEvents];
      case "Tue":
        return [tueEvents, setTueEvents];
      case "Wed":
        return [wedEvents, setWedEvents];
      case "Thu":
        return [thuEvents, setThuEvents];
      case "Fri":
        return [friEvents, setFriEvents];
      case "Sat":
        return [satEvents, setSatEvents];
      default:
        return [[], () => {}];
    }
  };

  return (
    <AppContext.Provider
      value={{
        events,
        setEvents,
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
        getEventsSetter,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
