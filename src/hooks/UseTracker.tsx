import { useRef, useState } from "react";

const UseTracker = ()=>{
  const [tracker, setTracker] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const trackerStartHandler = (): void => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTracker((prevTime: number) => prevTime + 1);
      }, 1000);
    }
  };

  const trackResetHandler = () => {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsRunning(false);
      setTracker(0);
    }
  };
  return {
    trackerStartHandler,
    trackResetHandler,
    isRunning, 
    tracker
  }
}
export default UseTracker;