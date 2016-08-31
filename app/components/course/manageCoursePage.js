import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import MaterialUiForm from './courseForm';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);

        this.saveCourse = this.saveCourse.bind(this);
    }

    saveCourse(values) {
        new Promise(resolve => {
            setTimeout(() => {  // simulate server latency
                this.props.actions.saveCourse(values);
                resolve();
            }, 500);
        });
    }

    render() {
        const { authors, course } = this.props;
        return (
            <div>
                <h1>Manage Course</h1>
                <MaterialUiForm authors={authors} initialValues={course} onSubmit={this.saveCourse} />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    const authorDD = state.authors.map(author => {
        return {
            value: author.id,
            text: `${author.firstName} ${author.lastName}`
        };
    });

    return {
        course: state.course,
        authors: authorDD,
        loading: state.ajaxCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);