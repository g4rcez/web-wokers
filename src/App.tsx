import { useCallback, useState } from "react";
import "./App.css";
import { blockingFunc, randomIntFromInterval } from "./lib.ts";

export const App = () => {
  const [random, setRandom] = useState<number>(0);

  const workerCall = useCallback(async () => {
    import("./workers/main?worker").then((worker) => {
      const w = new worker.default();
    
      w.addEventListener("message", (e) => {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAA", e);
        w.terminate();
      });
    });
  }, []);

  const normalFuncCall = useCallback(() => {
    console.time("time - 2");
    blockingFunc();
    console.timeEnd("time - 2");
  }, []);

  const randomIntHandler = useCallback(() => {
    setRandom(randomIntFromInterval(1, 100));
  }, []);

  return (
    <section>
      <button onClick={workerCall}>Worker Call</button>
      <button onClick={normalFuncCall}>Main Thread Call</button>
      <button onClick={randomIntHandler}>Random Int {random}</button>
    </section>
  );
};

export default App;
