var isValid = function (s) {
  var stack = [];
  for (var i=0;i<s.length;i++){
    if(s[i]==="{"||s[i]==='('||s[i]==='[') {
        stack.push(s[i]);
    } else if(s[i]==="}"||s[i]===')'||s[i]===']') {
        if (stack[stack.length-1]==='('&&s[i]===')'){
            stack.pop();
        } else if(stack[stack.length-1]==='['&&s[i]===']'){
            stack.pop();
        } else if(stack[stack.length-1]==='{'&&s[i]==='}'){
            stack.pop();
        } else {
          return false;
        }
    }
  }
  return stack.length === 0;
};