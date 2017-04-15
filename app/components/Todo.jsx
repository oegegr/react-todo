var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, completed, text} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
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
module.exports = Todo;