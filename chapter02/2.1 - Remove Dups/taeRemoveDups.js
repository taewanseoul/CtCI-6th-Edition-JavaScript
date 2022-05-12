const LinkedList = require('../util/LinkedListX');
const util = require('util');

function removeDups(list) {
  let current = list.head;

  while (current !== null) {
    let runner = current;

    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return list.head;
}

let list = new LinkedList();

for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

console.log(util.inspect(removeDups(list), false, null, true));
