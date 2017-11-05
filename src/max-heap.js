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

		//if(this.root==undefined){
			//return null
		//}
//let r= this.root.data;

//this.parentNodes.shift();
return this.root;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
return this.length;
	}

	isEmpty() {
return this.length==0;
	}

	clear() {
this.length=0;
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
