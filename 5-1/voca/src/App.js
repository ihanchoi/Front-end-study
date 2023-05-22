// import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Han";
  const google = {
    name: "google",
    url: "https://google.com",
  };
  return (
    <div className="App">
      <h1 
      style={{
        color: "#0080ff",
        backgroundColor: "lightblue",
    }}
    >
      Hello, {name}. <p>{2+3}</p>
      </h1>
      <a href={google.url}>{google.name}</a>
    </div>
  );
}

export default App;
