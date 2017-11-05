const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes =[];
this.length=0;
	}

	push(data, priority) {
this.length++;
	}

	pop() {
this.length--;

	}

	detachRoot() {
		if(this.root==null){return null}
return this.root.data;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
return this.length;
	}

	clear() {

	}

	insertNode(node) {
		this.length++;
if(this.heap==null){
	this.root=node;
}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
