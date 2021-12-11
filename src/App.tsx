import {Login} from './pages/Login/Login';
import {Home} from './pages/Home/Home';
//import {Route, Routes} from 'react-router-dom';
import {Registration} from './pages/Registration/Registration';
//import {readStateFromCookie} from './utils/cookies';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
        <Header />
        <Login />
        <Registration />
        <Home />
        {/*<Routes>*/}
        {/*    {readStateFromCookie('authotization_user') ?  <Redirect to='/home' />*/}
        {/*        : <Route path='/reg' element={ <Registration /> } />}*/}
        {/*    <Route path='/login' element={ <Login /> } />*/}
        {/*</Routes>*/}
    </div>
  );
}

export default App;
