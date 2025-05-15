import { useState, useEffect } from "react";

export const DataCom = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setTime(`${formattedDate} ${formattedTime}`);
    }, 1000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h2 className="text-center text-xl font-bold text-red-600">{time}</h2>
    </>
  );
};
