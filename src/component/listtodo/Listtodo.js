import { useDispatch, useSelector } from "react-redux";
import './listtodo.css';

export default function Listtodo(){
    let todos = useSelector(state => state);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        console.log(id);
        dispatch({type: "DELETE_TODO", payload: id});
    }

    return (
        <div className="list-container">
            <table>
                <tbody>
                    {todos.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.todo}</td>
                                <td><button onClick={() => handleDelete(item.id)}>delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            
        </div>
    );
}