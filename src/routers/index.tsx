import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import ResumePage from '../pages/ResumePage';
import ContactPage from '../pages/ContactPage';
import "../App.css";

interface IAppProps {

}

export default () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/blog' component={BlogPage} />
                    <Route path='/resume' component={ResumePage} />
                    <Route path='/contact' component={ContactPage} />
                </Switch>
            </div>
        </Router>
    );
};

