import React from 'react';
import SignInSide from "./components/SignInSide";
import SignUp from "./components/SignUp";
import Ingredients from "./components/Ingredients";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/login">
                        <SignInSide/>
                    </Route>
                    <Route path="/register">
                        <SignUp/>
                    </Route>
                    <Route path="/ingredients">
                        <Ingredients/>
                    </Route>
                    <Route path="/">
                        <SignInSide/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
