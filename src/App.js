import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    // <BrowserRouter>
    //  <div className="App">      
    // //   <Switch>
    // //     {/* <Router exact path="/" component={Home}/> */}
    // //     <Home/>        
    // //   </Switch>      
    //  </div>
    // </BrowserRouter>


    <div>

      <Home/>
    </div>


    
  );
}

export default App;