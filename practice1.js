var foo=doSomething(2);
var bar=doSomething(3);
function doSomething(paramOne){
paramOne=paramOne+3;
paramOne=paramOne+1;
paramOne=paramOne*8;
return paramOne;
}
alert(foo);
alert(bar);
