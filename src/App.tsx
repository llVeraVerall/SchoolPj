import {Login} from './pages/Login/Login';
import {Home} from './pages/Home/Home';
import {Route, Routes} from 'react-router-dom';
import {Registration} from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/login' element={ <Login /> } />
            <Route path='/home' element={ <Home /> } />
            <Route path='/reg' element={ <Registration /> } />
        </Routes>
    </div>
  );
}

export default App;
