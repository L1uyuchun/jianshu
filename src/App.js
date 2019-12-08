import React from 'react';
import { Provider } from "react-redux"
import Header from "./common/header/index.js"
import store  from "./store/index"
import { BrowserRouter, Route, Switch  } from "react-router-dom"
import Home from "./page/home/index"
import Detail from "./page/details/loadable"
import Login from "./page/login/index"

function App() {
    return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/detail" component={Detail}></Route>
                    <Route exact path="/login" component={Login}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
