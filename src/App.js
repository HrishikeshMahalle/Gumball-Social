import "./App.css";
import { Friends } from "./Components/Friends/friends";
import { Header } from "./Components/Header/header";
import { Home } from "./Components/Home/home";
import { Post } from "./Components/Post/post";

function App() {
  return (
    <div className="App-container">
      <div className="App-header">
        <Header/>
      </div>
      <div className="App">
        <Friends />
        <Home />
        <Post />
      </div>
    </div>
  );
}

export default App;
