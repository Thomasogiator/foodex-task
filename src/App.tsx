import MainBody from "./components/landingPage/MainBody";
import Navbar from "./components/landingPage/Navbar";
import WaitListForm from "./components/landingPage/WaitListForm";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar/>
        <WaitListForm/>
      </div>
      <div>
        <MainBody/>
      </div>
    </div>
  );
}

export default App;
