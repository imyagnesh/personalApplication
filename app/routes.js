import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './view/Main';
import {
  Admin,
  Dashboard,
  Login,
  Register,
} from './view/admin';
import {
  AboutMe,
  App,
  Blog,
  Contact,
  Home,
  Portfolio,
  Resume,
} from './view/user';

export function getRoutes() {
  // function loadCourse(nextState) {
  //   store.dispatch(loadAuthors());
  //   if (nextState.params.id) {
  //     store.dispatch(loadCourseForm(nextState.params.id));
  //   }
  //   else {
  //     store.dispatch(initCourseForm());
  //   }
  // }

  // function loadCoursesPage() {
  //   store.dispatch(loadCourses());
  // }

  return (
    <Route component={Main}>
      <Route path="/admin" component={Admin}>
        <IndexRoute component={Login} />
        <Route path="register" component={Register} />
        <Route path="dashboard" component={Dashboard} />
      </Route>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={AboutMe} />
        <Route path="resume" component={Resume} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="blog" component={Blog} />
        <Route path="contact" component={Contact} />
      </Route>
    </Route>
  );
}
