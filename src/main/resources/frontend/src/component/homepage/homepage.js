import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginComponent from "./component/login/Login";
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";

function App() {
    return (

        <html class="d-flex" lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.ux.deere.com/uxframe/2019.3.0/img/green-favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.ux.deere.com/uxframe/2019.3.0/img/green-favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.ux.deere.com/uxframe/2019.3.0/img/green-favicon/favicon-16x16.png" />
                <link rel="manifest" href="https://cdn.ux.deere.com/uxframe/2019.3.0/img/green-favicon/site.webmanifest" />
                <link rel="mask-icon" href="https://cdn.ux.deere.com/uxframe/2019.3.0/img/green-favicon/safari-pinned-tab.svg" color="#367c2b" />
                <link rel="stylesheet" href="https://cdn.ux.deere.com/uxframe/2019.3.0/css/uxframe-2019.3.0.min.css" />
                <title>UXFrame Quick Start Template</title>
            </head>
            <body class="uxf-sticky-footer">

                <header class="uxf-header navbar">
                    <a aria-label="home page" href="#">
                        <div class="uxf-logo"></div>
                    </a>
                    <div class="uxf-header-title">
                        <span class="h1 uxf-header-title-heading">
                            <a class="uxf-header-title-link" href="#">Service Intervals Information</a>
                        </span>

                    </div>
                </header>

                <nav class="navbar uxf-top-nav navbar-expand-md">
                    <div class="collapse navbar-collapse" id="navbarExample1">

                    </div>
                    <span class="h1 uxf-nav-title">
                        Service Intervals Information
                        </span>
                </nav>

                <main>
                    <div class="container-fluid">
                        <div class="row">
                            <nav class="col-md-5 uxf-side-nav uxf-side-nav-collapsed">
                                <ul class="nav card flex-column uxf-side-nav-collapsed">
                                    <li class="nav-item active-parent">
                                        <a class="nav-link active" href="#">
                                            Service Information
                                             </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            Logout
                                             </a>
                                    </li>
                                </ul>
                            </nav>
                            
                            <div id="content" class="col-md">
                                <Router>
                                    <div className="col-md-6">
                                        <Switch>
                                            <Route path="/" exact component={ListUserComponent} />
                                            <Route path="/login" component={LoginComponent} />
                                            <Route path="/users" component={ListUserComponent} />
                                            <Route path="/add-user" component={AddUserComponent} />
                                            <Route path="/edit-user" component={EditUserComponent} />
                                        </Switch>
                                    </div>
                                </Router>
                            </div>

                        </div>
                    </div>
                </main>
            </body>
        </html>

    );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;

