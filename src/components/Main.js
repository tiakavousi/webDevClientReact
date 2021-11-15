import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Redirect, Switch} from 'react-router-dom'
import Course from "./course/Course";
import ModuleList from "./course/modules/ModuleList";
import LessonTabs from './course/lessons/LessonTabs';
import TopicPills from './course/topics/TopicPills';
import CourseEditor from './course/CourseEditor';
import Login from './user/Login';
import Register from './user/Register';
import Navbar from './navbar/Navbar.js';
import Home from './home/Home';
import Footer from './footer/Footer';
import Admin from './user/Admin';
import Profile from './user/Profile';

export default class Main extends Component {
  render(){
    return (
      <Router>
        <div className="container-fluid">
            <Navbar/>
            <Switch>
              <Route path="/Home" component={Home}/>                        
              <Route path="/TopicPills" component={TopicPills}/>                        
              <Route path="/LessonTabs" component={LessonTabs}/>           
              <Route path="/ModuleList" component={ModuleList}/>           
              <Route path="/Course" exact component={Course}/>
              <Route path="/course/:courseId" component={CourseEditor}/>
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>
              <Route path="/Admin" component={Admin}/>
              <Route path="/Profile/:id" component={Profile}/>
              <Redirect to='/Home'/>
            </Switch>
            <Footer />
        </div>
      </Router>
    );
  }
}
