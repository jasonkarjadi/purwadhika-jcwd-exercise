// Create a code that could handle a queue on food ordering process, with this specification:
// Create a class to handle queuing process in a file.
// Create file to handle and execute queue class.
// Each queue process takes a random interval from 1-10 seconds.
// Clue : Use while & promise

class Queue {
  //   #counter = 0;
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  getElements() {
    return this.#container;
  }
}

// Add orders to queue
// [Log] Print all data in queue
// Run process -> process queue based on random interval
// [Log] Queue 1 Done in XXX minutes
// [Log] Queue 2 Done in XXX minutes
// [Log] Queue 3 Done in XXX minutes
// [Log] Queue 4 Done in XXX minutes

let foodQ = new Queue();
foodQ.enqueue("Amanda");
foodQ.enqueue("Bruce");
foodQ.enqueue("Charon");
foodQ.enqueue("Desmond");
console.log(foodQ.getElements());

const deQ = (startTime = new Date()) => {
  let deQRes = foodQ.dequeue();
  let timeDiff = new Date() - startTime;
  console.log(
    `Queue ${deQRes} Done in ${(timeDiff / 60000).toFixed(3)} minutes`
  );
};

let startTime = new Date();
// let intervalId = setInterval(
//   deQ,
//   Math.ceil(Math.random() * 10) * 1000,
//   startTime
// );

// const stopDeQ = () => {
//   if (foodQ.getElements().length <= 0) {
//     clearInterval(intervalId);
//   } else {
//     setTimeout(stopDeQ, 2000);
//   }
// };

// setTimeout(stopDeQ, 5000);

foodQ.getElements().map(() => {
  setTimeout(deQ, Math.ceil(Math.random() * 10) * 1000, startTime);
});
