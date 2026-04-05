export function toMinutes(hourText) {
  const [hours, minutes] = hourText.split(":").map(Number);
  return (hours * 60) + minutes;
}

export function getBogotaWeekdayAndMinutes() {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "America/Bogota"
  }).format(now).toLowerCase();

  const timeText = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Bogota"
  }).format(now);

  return {
    weekday,
    minutes: toMinutes(timeText)
  };
}

export function isOpenNow(weeklyHours) {
  const { weekday, minutes } = getBogotaWeekdayAndMinutes();
  const today = weeklyHours.find((row) => row.dayKey === weekday);

  if (!today || today.closed) {
    return false;
  }

  const openAt = toMinutes(today.open);
  const closeAt = toMinutes(today.close);

  if (closeAt >= openAt) {
    return minutes >= openAt && minutes <= closeAt;
  }

  return minutes >= openAt || minutes <= closeAt;
}

export function formatBogotaTime() {
  return new Intl.DateTimeFormat("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/Bogota"
  }).format(new Date());
}
