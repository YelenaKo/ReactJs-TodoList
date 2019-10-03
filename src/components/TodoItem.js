import React from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends React.Component {
    getStyle = () => {
        return{
            backgroundColor: this.props.todo.completed ? '#f4f4f4' : '#fff9d4',
            padding: '10px',
            borderBottom: '1px  #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            fontFamily: 'serif'
            }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <i>
                        <input type = "checkbox" onChange = {this.props.markComplete.bind( this, id )} /> 
                        {' '}    
                        { title }
                        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                    </i>    
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {    
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
    backgroundColor: "#ff0000",
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default TodoItem