import './addtodo.css';
import Listtodo from '../listtodo/Listtodo';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';

 

export default function Addtodo(){

    const todos = useSelector(state => state);
    const [input, setInput] = useState('');
    
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    // console.log(todos);
    const handleSubmit = (e) => {
        e.preventDefault();
        let task = {};
        
        task["id"] = todos.length > 0 ?todos[todos.length-1].id + 1 : 0;
        task["todo"] = input;
        // console.log(task);
        dispatch({type:"ADD_TODO", payload: task});
        setInput('');
    }
    return (
        <section className="addtodo-container">
            <form className="form-add-container">
                <input type="text" placeholder="Add todo" value={input} onChange={handleChange} required/>
                <button type="submit" onClick={handleSubmit}>Add task</button>
            </form>
            <Listtodo />
        </section>
    );
}