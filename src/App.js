import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SignUp from './pages/signup';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Route path="/" component={SignUp}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
