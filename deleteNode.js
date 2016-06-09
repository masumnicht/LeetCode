var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next
  //will not work for removing tail node, side cannot read property next of null
};

//node definition

var Node = function(val){
  this.val = val;
  this.next = null;
};

