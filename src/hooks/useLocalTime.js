// src/hooks/useLocalTime.js
import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit' });

/** Current time in Davao (Asia/Manila), refreshed every 30 seconds. */
export function useLocalTime() {
  const [time, setTime] = useState(() => fmt.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(fmt.format(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}
