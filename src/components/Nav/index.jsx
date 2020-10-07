import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import Styles from './styles';

import Home from '../Home';
import TicTacToe from '../TicTacToe';

const Nav = () => {
    return (
        <Router>
            <Styles.Nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/tic-tac-toe">
                            Tic Tac Toe
                        </Link>
                    </li>
                </ul>
            </Styles.Nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/tic-tac-toe">
                    <TicTacToe />
                </Route>
            </Switch>
        </Router>
    );
};

export default Nav;