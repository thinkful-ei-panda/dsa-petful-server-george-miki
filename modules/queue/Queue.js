class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    };

    enqueue(data) {
        // Add some data to the queue.
        const newNode = new _Node(data, null);

        if(this.first === null) {
            this.first = newNode;
        };

        if(this.last) {
            this.last.next = newNode;
        };

        this.last = newNode;
    };

    dequeue() {
        // Remove some data from the queue.
        if(this.first === null) {
            return;
        };
        const tempNode = this.first;
        this.first = tempNode.next;

        if(tempNode === this.last) {
            this.last = null;
        };

        return tempNode.data;
    };

    show() {
        // Return the next item in the queue.
        if(this.first === null) {
            throw new Error('No item in the queue');
        };

        return this.first;
    };

    all() {
        // Return all items in the queue.
        if(this.first === null) {
            throw new Error('No items in the queue');
        };

        let currentNode = this.first;
        let queue = [];

        while(currentNode !== null) {
            queue.push(currentNode.data);
            currentNode = currentNode.next;
        };

        return queue;
    };
};

module.exports = Queue;
