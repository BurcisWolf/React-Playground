// Defining JavaScript Object
const welcome = {
  greeting: "Hello",
  name: "React!",
};

const title = "React";
const myElement = <h2>Hello {title}</h2>; // JSX 
const number = [1, 2, 4, 8, 16, 32];

const exponentialNumbers = number.map(function (number) {
  return number * number;
});

// Defining JavaScript array with more stuff inside ( Real life list )
const list = [{
  title: 'React',
  url: 'www.test.org',
  author: 'Jemand',
  about: "This article is about React",
  num_comments: 4,
  points: 4,
  objectID: 0,
},
{
  title: 'Angular',
  url: 'www.testo.org',
  author: 'Jemand Anderes',
  about: "This Article is about Angular",
  num_comments: 2,
  points: 2,
  objectID: 1,
}];
// Funktion for our search so we dont need to edit App() ... React Component
const Search = () => {
  //perform tasks between
  return(
    <div>    
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>  
  )
}

class Person { 
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getInfo() {
    return 'Name: ' + this.firstName + ' ' + this.lastName + ', Age: ' + this.age;
}}
const robit = new Person('Robin', 'Peterson', 28);
const bilbo = new Person('Bilbo', 'Sourek', 250);
console.log(robit.getInfo());
console.log(bilbo.getInfo());

const App = () => {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.name}</h1>
      <Search />
    <hr />
      <List />
    <hr />
      <List2 />
      <hr />
      <List3 />
    </div>
  )
}
// BEFORE
const List2 = () => {
  return (
    <p>{robit.getInfo() + ' | ' + bilbo.getInfo()}</p>
  )
}
//AFTER
const List3 = () => (<p>{robit.getInfo() + ' | ' + bilbo.getInfo()}</p>)

// FUnktion for our list so we dont need to edit App() ... React Component
const List = () => {
  return (
    <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span><a href={item.url}>{item.title}</a> |</span>
        <span> About: {item.about} |</span>
        <span> Author: {item.author} |</span>
        <span> Points: {item.points} |</span>
        <span> Number of commnents: {item.num_comments}</span>
        </li>
        )
    )}
    </ul>
  )}
export default App
