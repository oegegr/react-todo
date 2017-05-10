var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
    render: function () {
        var {id, completed, text, dispatch} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        return (
            <div className={todoClassName} onClick={
            () => {
                dispatch(actions.toggleTodo(id));
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        );
    }
});

export default connect()(Todo);
