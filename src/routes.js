import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Index from './components/home/index'
import List from './components/list/list'
import Alice from './components/tabs/Alice'
import Jermine from './components/tabs/Jermine'
import history from './components/public/history';



class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router  history={history}>
                <div>
                    {/**
                     * 这里可以公共的样式,比如 头部, 尾部, 等.
                     */
                    }
                    <Switch>
                        <Route path="/pageList" component={List}/>
                        <Index>
                        <Route exact path="/" component={Alice}/>
                            <Route path="/alice" component={Alice}/>
                            <Route path="/jermine" component={Jermine}/>
                        </Index>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;