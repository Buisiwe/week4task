import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' }); 
    }
    onChange = (e) => this.setState( { [e.target.name]: e.target.value});
    render() { 
        return ( 
            <form onSubmit={this.onSubmit} >
                <input type="text" name="title" placeholder="Enter a task here..." value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Add" className="btn"/>
                </form>
         );
    }
}
 
export default AddTodo;