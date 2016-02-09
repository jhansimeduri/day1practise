var globalVar="this is a global variable";
var globalFunction=function(paramOne){
  var localVar="this is a local variable";
  var localFunction=function(){
    var superLocalVar="hello,World!";
    alert(superLocalVar);
    alert(localVar);
    alert(paramOne);
    alert(globalVar);
  };
  localFunction();
};
globalFunction(2);
