import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, BlogPage, ResumePage, ContactPage } from '../pages'
import { AdminDashboardPage, AdminBlogPage, AdminResumePage } from '../pagesAdmin'

import "../App.css";

export default () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/blog' component={BlogPage} />
                    <Route path='/resume' component={ResumePage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/admin/home' component={AdminDashboardPage} />
                    <Route path='/admin/blog' component={AdminBlogPage} />
                    <Route path='/admin/resume' component={AdminResumePage} />
                </Switch>
            </div>
        </Router>
    );
};

