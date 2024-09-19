// Defining JavaScript Object
const welcome = {
  greeting: "Hello",
  name: "React!",
};

//Defining JavaScript Funktion
function welcomeMessage(name){
  return "Welcome in our course, lets be best Mr./ Mrs. " + name;
}

const title = "React";
const myElement = <h2>Hello {title}</h2>; // JSX 
const number = [1, 2, 4, 8, 16, 32];

const exponentialNumbers = number.map(function (number) {
  return number * number;
});

const list = [{
  title: 'React',
  url: 'test.org',
  author: 'Me',
  num_comments: 4,
  points: 4,
  objectID: 0,
},
{
  title: 'Angular',
  url: 'testo.org',
  author: 'him',
  num_comments: 2,
  points: 2,
  objectID: 1,
}];

function App() {

  return (
    <div>
      <h1>{welcome.greeting} {welcome.name}</h1>
      <p>{welcomeMessage("React")}</p>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
    {myElement}
    <hr />
    <ul>
      {list.map(function (item) {
        return (
        <li key={item.objectID}>
          <span><a href={item.url}>{item.title}</a> </span>
          <span>Author: {item.author} </span>
          <span>Points: {item.points} </span>
          <span>Number of commnents: {item.num_comments}</span>
          </li>)
      })}
    </ul>
    </div>
  )
}

export default App
