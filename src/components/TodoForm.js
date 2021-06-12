import React , { Component } from 'react'; 

export default class TodoForm extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            todo: ''
        }; 
    }

    onChange= (event) => {
        this.setState({
          todo: event.target.value
        })
    }

    onAdd = (event) => {
        event.preventDefault();
        const { todo } = this.state;
        if (todo) {
            this.props.pushToItems(this.state.todo);
        }        
    }

    render() {
        return ( 
            <div>
                <input 
                    type="text" 
                    name="todo" 
                    placeholder="Enter your name"
                    onChange={this.onChange}
                    ></input>
                    <button type="button" onClick={this.onAdd}>Create</button>
            </div>
        ); 
    }

}