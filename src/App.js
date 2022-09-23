
import './App.css';
import {
  Button, 
  TextField,
  Drawer
} from '@mui/material';
import Header from './hoc/NavBar';
import Dashboard from './pages/dashboard';
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:'flex'}}>
      <Dashboard/>
      <nav style={{position:'sticky', width:'240px'}}>
        <a>
          <div className='ukraine'>
            <CircularProgress/>
          </div>
        </a>
      </nav>
      </div>
    
    </div>
  );
}

export default App;