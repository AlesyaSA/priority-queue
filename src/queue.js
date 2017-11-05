const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
	this.length=0;
		this.heap = new MaxHeap;
		this.maxsize=maxSize;
	}

	push(data, priority) {
this.length++;
	}

	shift() {
		this.heap.pop();
		if(this.length==0){
			throw ERROR('can t remove');
		}
this.length--;
	}

	size() {
return this.length;
	}

	isEmpty() {
		if (this.length == 0){
			return true;
		} else{
			return false;
		}
	}
}

module.exports = PriorityQueue;
