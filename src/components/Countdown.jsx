import { useEffect, useState } from "react";
import { differenceInMonths } from "date-fns";

export default function Countdown({ target, title }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    
    // Convertir la fecha actual y la fecha objetivo a GMT-6 (hora de Guatemala)
    const nowGT = new Date(now.toLocaleString("en-US", { timeZone: "America/Guatemala" }));
    const targetGT = new Date(target.toLocaleString("en-US", { timeZone: "America/Guatemala" }));

    const diff = targetGT.getTime() - nowGT.getTime();

    if (diff <= 0) {
      return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const months = differenceInMonths(targetGT, nowGT);
    const adjustedDate = new Date(nowGT);
    adjustedDate.setMonth(nowGT.getMonth() + months);

    const remainingDiff = targetGT.getTime() - adjustedDate.getTime();
    const secondsTotal = Math.floor(remainingDiff / 1000);

    return {
      months,
      days: Math.floor(secondsTotal / (3600 * 24)),
      hours: Math.floor((secondsTotal % (3600 * 24)) / 3600),
      minutes: Math.floor((secondsTotal % 3600) / 60),
      seconds: secondsTotal % 60,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="card bg-neutral text-neutral-content shadow-xl mb-4 p-4 rounded-lg text-center">
      <h2 className="text-xl font-bold text-primary mb-4">{title}</h2>

      <div className="grid grid-flow-col gap-2 md:gap-4 text-center auto-cols-max">
        <TimeUnit value={timeLeft.months} label="Meses" />
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Seg" />
      </div>

      {timeLeft.months === 0 && timeLeft.days === 0 && (
        <div className="mt-2 text-sm text-success animate-pulse">
          ⏰ ¡Tiempo cumplido!
        </div>
      )}
    </div>
  );
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col p-2 bg-base-200 rounded-md text-center">
      <span className="text-2xl md:text-3xl font-mono">{value}</span>
      <span className="text-xs md:text-sm mt-1 text-neutral-content/80">
        {label}
      </span>
    </div>
  );
}
