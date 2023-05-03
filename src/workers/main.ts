import React from "react";

console.log("react version", React.version);

self.addEventListener("message", (e) => {
  console.log("message from App",e.data, e);
});

const blockingFunc = () => {
  new Array(999_990_000)
    .map((elm, index) => elm + index)
    .reduce((acc, cur) => acc + cur, 0);
};

async function async() {
  console.time("time");
  blockingFunc();
  console.timeEnd("time");
  self.postMessage(JSON.stringify({ a: 1 }));
}

async();
