class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
 		this.parent=null;
		this.left=null;
		this.right = null;

	}

	appendChild(node) {
		//if(this.left==0){this.left=node};
		//if(this.left &&(this.right==0)){this.right=node};

			}


	removeChild(node) {


			//if(node!==this.node.parent)
			//throw ERROR('cantremove');

//if(node==this.left)
//	this.left=null;
//if(node==this.right)
	//this.right=null;




}

	remove() {
			//if(this.node.parent){
		//this.left.parent.removeChild(this.left);
		//this.right.parent.removeChild(this.right);
//this.parent.removeChild(this);
	}//}

	swapWithParent() {

	}
}

module.exports = Node;
