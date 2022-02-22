
import './App.css';
import {Button, TextField} from '@material-ui/core';
import Header from './hoc/NavBar';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <div className="App">
      <Header/>
      Just checking
      <Button color="primary" variant='contained'>Press me </Button>
      <TextField id="name" label="Name" variant="outlined" />
      <Dashboard/>
    </div>
  );
}

export default App;
