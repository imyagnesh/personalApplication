import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const CourseList = ({courses}) => {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Author</TableHeaderColumn>
                    <TableHeaderColumn>Catagory</TableHeaderColumn>
                    <TableHeaderColumn>Length</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map((row, index) => (
                    <TableRow key={index}>
                        <TableRowColumn><Link to={'/course/' + row.id}>{row.title}</Link></TableRowColumn>
                        <TableRowColumn>{row.authorId}</TableRowColumn>
                        <TableRowColumn>{row.category}</TableRowColumn>
                        <TableRowColumn>{row.length}</TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;