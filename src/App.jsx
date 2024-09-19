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

function App() {

  return (
    <div>
      <h1>{welcome.greeting} {welcome.name}</h1>
      <p>{welcomeMessage("React")}</p>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
    {myElement}

    </div>
  )
}

export default App
