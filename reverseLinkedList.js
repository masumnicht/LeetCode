var reverseList = function(head) {
  var node = head;
  var prev = null;
  while (node) {
    var temp = node.next;
    node.next = prev;
    prev = node;
    node = temp;
  }
  return prev;
};