import React , { Component } from 'react'; 
import TodoListItem from './TodoListItem'; 

// export default class TodoList extends Component {
//     constructor(props) {
//         super(props); 
//     }

//     render() {
//         return ( 
//             <ul>
//                 {}
//                 <li></li>
//             </ul>
//         ); 
//     }
// }

export const TodoList = (props) => {
    return (
        <ul>
            { items.map((item, index) => (
                <TodoListItem key={index} item={item} />
          )) }          
        </ul>
    )
}