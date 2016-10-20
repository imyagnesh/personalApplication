import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App/App';
import homePage from './containers/Home/index';
import aboutMePage from './containers/AboutMe/index';
import resumePage from './containers/Resume/index';
import portfolioPage from './containers/Portfolio/index';
import blogPage from './containers/Blog/index';
import contactPage from './containers/Contact/index';
import AdminPage from './containers/Admin/index';
import LoginPage from './containers/Login/index';
import Main from './containers/Main/index';

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
      <Route path="/admin" component={AdminPage}>
        <IndexRoute component={LoginPage} />
      </Route>
      <Route path="/" component={App}>
        <IndexRoute component={homePage} />
        <Route path="about" component={aboutMePage} />
        <Route path="resume" component={resumePage} />
        <Route path="portfolio" component={portfolioPage} />
        <Route path="blog" component={blogPage} />
        <Route path="contact" component={contactPage} />
      </Route>
    </Route>
    );
}
