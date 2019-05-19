import React, {Component} from 'react'
import Todo from "./components/Todo.js"

 class List extends Component {
    render() {

        let list = props.tasks.map((element, index) => {
        return <Todo key={index} task={element} />;
    });

        return <div>{list}</div>;

}
 }
 export default List;
 

