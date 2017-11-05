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
		if(node.parent){
			
		}
//if(node==this.left)
//	this.left=null;
//if(node==this.right)
	//this.right=null;


//if((node!=this.left)&&(node!=this.right))
//throw ERROR('cantremove');

}

	remove() {
//this.parent.removeChild(this);
	}

	swapWithParent() {

	}
}

module.exports = Node;
