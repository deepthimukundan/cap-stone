import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { PrivateRoute } from './Components/privateRoute';

import Register from './components/register';
import Login from './components/login';

function App() {
  return (
    <Provider store={store}>
              <BrowserRouter>
                <div className="App">
                  <Routes>
                    <Route path = "/" element={ <Register /> }/>
                    <Route path =  "/login" element={ <Login/> }/>
                  </Routes>
              </div>
              </BrowserRouter>
    </Provider>
  );
}

export default App;
