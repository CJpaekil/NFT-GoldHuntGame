import { useLayoutEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from './components/layout/Header';
import Home from './pages/Home';

import './App.css';

function App() {
  // const dispatch = useDispatch();
  // const history = useHistory();

  useLayoutEffect(() => {
    //dispatch(checkAuthenticate(history));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
