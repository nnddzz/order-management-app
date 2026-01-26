// Destructuring
const user = {
  name: "Amin",
  role: "admin",
};

const {name, role} = user;

// Arrow function
const greet = (name) => {
  return `Hello, ${name}`;
};

// Array method
const orders = [
  {id:1, total: 50000},
  {id:2, total: 75000}
];

const totals = orders.map(order => order.total);

console.log(greet(name));
console.log(totals);
