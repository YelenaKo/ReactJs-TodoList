import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title:'',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    onChange = (e) => this.setState({ [e.target.name]:e.target.value });

    render() {
        return (
            <div className="add-newtodo">
                <form  onSubmit={this.onSubmit} className="add-newtodo-form" style={{display: 'flex'}}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="add Todo ..."
                        style={{flex:'10', color:'#290684'}}
                        value={this.state.title}
                        onChange={this.onChange}
                        className="add-newtodo-form-input"
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="add-newtodo-form-btn"
                        style={{flex:'1'}}
                    />
                </form>
            </div>
        )
    }
}

// PropTypes
AddTodo.propTypes = {    
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo
