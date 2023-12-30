import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
// import Loginbtn from './component/Loginbtn';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Loginbtn/> */}
    </div>
  );
}

export default App;
