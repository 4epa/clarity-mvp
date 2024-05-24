export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};

export const getCurrentDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const getDaysOfCurrentWeek = () => {
  const today = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDay = today.getDay();
  const currentWeekDays = [];

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay);

  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    currentWeekDays.push({ dayOfWeek: daysOfWeek[i], date: day.getDate() });
  }

  return currentWeekDays;
};

export const getCurrentDay = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const dayOfWeek = today.getDay();

  return daysOfWeek[dayOfWeek];
};

export const getEvent = (
  title,
  startHour,
  startMin,
  durationHour,
  durationMin,
  color
) => {
  return {
    id: `${Math.random().toString(16).slice(2)}`,
    title: title,
    hours: +startHour,
    mins: +startMin,
    color: color,
    duration: {
      hours: +durationHour,
      mins: +durationMin,
    },
    subtasks: [],
  };
};

export const calculateEventTime = (
  startHour,
  startMin,
  durationHour,
  durationMin
) => {
  const startTotalMin = startHour * 60 + startMin;
  const durationTotalMin = durationHour * 60 + durationMin;

  const endTotalMin = startTotalMin + durationTotalMin;

  const startHourDisplay = Math.floor(startTotalMin / 60);
  const startMinDisplay = startTotalMin % 60;
  const endHourDisplay = Math.floor(endTotalMin / 60);
  const endMinDisplay = endTotalMin % 60;

  const startTime = `${String(startHourDisplay).padStart(2, "0")}:${String(
    startMinDisplay
  ).padStart(2, "0")}`;
  const endTime = `${String(endHourDisplay).padStart(2, "0")}:${String(
    endMinDisplay
  ).padStart(2, "0")}`;

  return `${startTime} - ${endTime}`;
};

export const getCurrentTimeInMinutes = () => {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
};

export const formatInputValue = (value) => {
  const numericValue = value.replace(/\D/g, "");

  const truncatedValue = numericValue.slice(0, 2);

  return truncatedValue;
};
