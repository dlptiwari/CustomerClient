import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProject(id){

        //console.log("test");

        this.props.onDelete(id)
    }

    render() {

        return (

            <li className="Project">
            {this.props.project.firstName}
            --{this.props.project.lastName}<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

            </li>

        );
    }
}

export default ProjectItem;