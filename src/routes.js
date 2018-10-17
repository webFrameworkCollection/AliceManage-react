import React from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';

import Index from './pages/home/index'
import List from './pages/list/list'
import history from './pages/public/history';
import Login from './pages/login/login';
import Demo from './pages/demo/demo';
import WorkResume from './pages/content/work/resume/index';
import WorkBlog from './pages/content/work/blog/index';
import Tourism from './pages/content/tourism/index';
import HomePage from './pages/content/homePage/index';
import PaymentDetails from './pages/content/family/paymentDetails/index';
import HappyTime from './pages/content/family/happyTime/index';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router  history={history}>
                    <Switch>
                        <Route path="/pageList" component={List}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/demo" component={Demo}/>
                        <Index>
                        <Route exact path="/" component={HomePage}/>
                            <Route path="/workresume" component={WorkResume}/>
                            <Route path="/workblog" component={WorkBlog}/>
                            <Route path="/tourism" component={Tourism}/>
                            <Route path="/homepage" component={HomePage}/>
                            <Route path="/paymentdetails" component={PaymentDetails}/>
                            <Route path="/happytime" component={HappyTime}/>
                        </Index>
                    </Switch>
            </Router>
        );
    }
}
export default App;