
import './App.css';
import {Button, TextField} from '@mui/material';
import Header from './hoc/NavBar';
import Dashboard from './pages/dashboard';
import CircularProgress from '@mui/material/CircularProgress';
function App() {
  return (
    <div className="App">
      <Header/>
     <CircularProgress></CircularProgress>
      Just checking
      <Button color="primary" variant='contained'>Press me </Button>
      <TextField id="name" label="Name" variant="outlined" />
      <Dashboard/>
    </div>
  );
}

export default App;