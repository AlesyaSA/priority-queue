const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
	this.length=0;
		this.heap = new MaxHeap;
		this.maxsize=maxSize;
	}

	push(data, priority) {
		if(this.length==this.maxsize){
			throw ERROR('cant push')
		}
		this.heap.push(data,priority);
this.length++;
	}

	shift() {
	//console.log(this.heap);
let temp=this.heap.length-1;
		this.heap.pop();
		if(this.length==0){
			throw ERROR('can t remove');
		}
this.length--;

return temp;
	}

	size() {
return this.length;
	}

	isEmpty() {
		return this.length == 0;

	}
}

module.exports = PriorityQueue;
