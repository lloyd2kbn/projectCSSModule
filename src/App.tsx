import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import Exprenses from './pages/Expenses/Exprenses';


function App() {
  return (
    <>
          <Router>
                <Sidebar/>
                <Exprenses/>
          </Router>
    </>
  );
}

export default App;
