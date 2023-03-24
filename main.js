const employee = [
{
	name: "David Carlson",
    age:30
},
{
	name: "John Cena",
    age:34
},
{ 
	name: "John Carte",
    age:50
},];
var emp=employee.find(function(b)
{
	return b.name.indexOf("John") >=0;
	
});
console.log(emp);
