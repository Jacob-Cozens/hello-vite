import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Funny from "./Funny";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Funny selectedFrog="widefrog" />
    </div>
  );
}

export default App;
