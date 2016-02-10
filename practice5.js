// alert(".......success.......");
// var person=new Object();
// person.firstName="meduri";
// person.lastName="jhansi";
// person.getFullName= function() {
//   return person.firstName+ " " +person.lastName;
// };
// alert(person.getFullName());
var person={
  firstName:"jhansi",
  lastName:"meduri",
   getFullName=function(){
     return this.firstName+" "+this.lastName;
   }
};
alert(person.getFullName());
