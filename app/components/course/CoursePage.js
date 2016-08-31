import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseAction';
import CourseList from './courseList';

class CoursePage extends Component {
    constructor(props) {
        super(props);
        this.redirectToCreateCourse = this.redirectToCreateCourse.bind(this);
    }

    redirectToCreateCourse() {
        browserHistory.push('/course');
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <RaisedButton
                    type="submit"
                    label="Create Course"
                    onClick={this.redirectToCreateCourse} />
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses.present
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);