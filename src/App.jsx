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
// FUnktion for our list so we dont need to edit App() ... React Component
function List() {
  return (
    <ul>
    {list.map(function (item) {
      return (
      <li key={item.objectID}>
        <span><a href={item.url}>{item.title}</a> |</span>
        <span> About: {item.about} |</span>
        <span> Author: {item.author} |</span>
        <span> Points: {item.points} |</span>
        <span> Number of commnents: {item.num_comments}</span>
        </li>
        )
    })}
    </ul>
  )}
// Funktion for our search so we dont need to edit App() ... React Component
function Search() {
  return (  
    <div>    
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"/>
    </div>  
  )
}
function App() {
  return (
    <div>
      <h1>{welcome.greeting} {welcome.name}</h1>
      <Search />
    <hr />
      <List />
    </div>
  )
}

export default App
