// start with strings, numbers and booleans
// let age = 100;
// let age2 = 100;
// console.log(age,age2);
// age = 200;
// console.log(age,age2);

// let name = 'Wes'
// let name2 =  name;
// console.log(name,name2);
// name = "Wes Lee"
// console.log(name,name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;

// console.log(players, team);
// team[3] = 'Lux';
console.log(players, team);

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
    
// one way
    const team2 = players.slice();
    team[3] = 'Lux';
    console.log(players, team2);

// or create a new array and concat the old one in
    const team3 = [].concat(players);
// or use the new ES6 Spread
    const team4 = [...players];

// now when we update it, the original one isn't changed
    team4[3] = "pikachu"
// The same thing goes for objects, let's say we have a person object
    const team5 = Array.from(players);
// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

// and think we make a copy:
 const riachu = person;
 riachu.age = 90;
 
 console.log(person); 
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12});
// We will hopefully soon see the object ...spread
const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
    name: "Wes",
    age: 100,
    social: {
        twitter: "@twitter",
        facebook: "webos"
    }
}

console.clear();
console.log(wes);

// Object.assign actually goes down atleast 2 levels.
const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(person));