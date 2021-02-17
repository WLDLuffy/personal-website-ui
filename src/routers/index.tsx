import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, BlogPage, ResumePage, ContactPage, BlogPostPage } from '../pages'
import { AdminDashboardPage, AdminBlogPage, AdminResumePage } from '../pagesAdmin'

import "../App.css";

export default () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/blog' component={BlogPage} />
                    <Route exact path='/blog/post/:UUID' component={BlogPostPage} />
                    <Route exact path='/resume' component={ResumePage} />
                    <Route exact path='/contact' component={ContactPage} />
                    <Route exact path='/admin/home' component={AdminDashboardPage} />
                    <Route exact path='/admin/blog' component={AdminBlogPage} />
                    <Route exact path='/admin/resume' component={AdminResumePage} />
                </Switch>
            </div>
        </Router>
    );
};

