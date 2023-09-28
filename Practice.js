// Create the object and assign it to a variable
let user = { name: "Isaac", age: 23};
 
// Access the properties of the object
console.log(user.name);
console.log(user.age); 
 
user.name = "Amasis";
user.age = 120;
 
// Now, if we access the properties again, we'll see the updated values
console.log(user.name);
console.log(user.age);

// Create a new object and assign it to a variable
let user = {
    name: "Isaac",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Calgary",
        coordinates: {
            lat: 42.0,
            long: -69,
        },
    },
};

// Access the properties of the object 
console.log(user.name);
console.log(user.address.city);
console.log(user.address.coordinates.lat);

// Modify the properties of the object
user.name = "Amasis";
user.address.city = "Edmonton";
user.address.coordinates.lat = 69;


const person = {
    name: "Isaac",
    age: 22,
    city: "Calgary", 
};

// Using Destructuring
const { name, age, city} = person;




