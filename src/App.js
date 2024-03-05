import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Display from "./components/Display";
import Button from "./components/Button";

const Stopwatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms;
  var updatedS = time.s;
  var updatedM = time.m;
  var updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedMs = 0;
    }

    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div className="bg-blue-950 w-screen h-screen flex justify-center">
      <div className="bg-slate-200 w-2/4 h-2/4 rounded-3xl m-10">
        <h1 className="font-mono text-5xl font-bold text-center mt-12">
          StopWatch
        </h1>
        <div className="">
          <Display {...time} />
          <Button
            start={start}
            stop={stop}
            status={status}
            reset={reset}
            resume={resume}
          />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Stopwatch />);
