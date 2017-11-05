const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes =[];
this.length=0;
	}

	push(data, priority) {
		this.insertNode(new Node(data,priority));
		this.shiftNodeUp(new Node(data,priority));
		this.parentNodes.unshift(new Node(data,priority));
//this.length++;
	}

	pop() {
this.length--;
if(this.heap){
//this.detachRoot();
//this.restoreRootFromLastInsertedNode(this.detachRoot());
//this.shiftNodeDown(this.heap.root);
return this.root.data;

	}
}

	detachRoot() {
let detachedroot=this.root;
this.root=null;
		//if(this.root==undefined){
			//return null
		//}
//let r= this.root.data;

this.parentNodes.shift();
return detachedroot;
	}

	restoreRootFromLastInsertedNode(detached) {
//this.root=detached;//this.parentNodes[this.parentNodes.length-1];
//this.parentNodes.pop();
	}

	size() {
return this.length;
	}

	isEmpty() {
return this.length==0;
	}

	clear() {
		this.root=null;
		this.parentNodes=[];
this.length=0;
	}

	insertNode(node) {
		this.length++;
if(this.heap==null){
	this.root=node;

}
let layer=Math.log2(1+this.parentNodes.length);

	if (node.priority>this.parentNodes[0]){
		this.parentNodes.unshift(node.priority);
	}
	for(let i=0;i<layer;i++){
		if(node.priority>this.parentNodes[2*i]){node.priority=this.parentNodes[2*i]}
}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
