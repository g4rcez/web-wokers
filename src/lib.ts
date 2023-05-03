export const blockingFunc = () => {
    new Array(999_990_000)
        .map((elm, index) => elm + index)
        .reduce((acc, cur) => acc + cur, 0);
};

export const randomIntFromInterval = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

const createWorker = () => {
    return {
        exec: () => {
            const url = new URL("./workers/main", import.meta.url)
            console.log({url})
            const worker = new Worker(url, {type:"module"});
            console.log(worker)
            worker.addEventListener("message", (e) => {
                console.log(e)
            })
        }

    }
}

export const workerInstance = createWorker()