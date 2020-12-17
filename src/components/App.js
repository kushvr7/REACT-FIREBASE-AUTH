// import './App.css';
import React  from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Signup'
import {Container} from 'react-bootstrap'
import Login from './Login'
import Dashboard from './Dashboard.js'
import {AuthProvider} from '../contexts/AuthContext.js'
function App() {
  
    return (
        <AuthProvider>
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{minHeight : "100vh"}}
        >   
            <div className="w-100 " style={{maxWidth:"400px"}}>
             <Router>
                 <Switch>
                     <Route exact path="/" component={Dashboard} />
                     <Route path="/signup" component={Signup} />
                     <Route path="/login" component={Login} />
                 </Switch>
             </Router>
            </div>

        </Container>
        </AuthProvider>
    )


}

export default App;
