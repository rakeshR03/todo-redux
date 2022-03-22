import Home from './component/home/Home';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './component/login/Login';
import Addtodo from './component/addtodo/Addtodo';
import { data } from './asset/data';
import { useState } from 'react';
import ProtectedRoute from './component/protectedRoute/ProtectedRoute';

function App() {

  const [user1, setUser] = useState({user:'', pass:''});
    const [auth, setAuth] = useState(false);
    
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user1,[name]:value}); 
        // console.log(user1);    
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.user === user1.user && data.pass === user1.pass ){
            setAuth(true);
            // console.log("hello");
            navigate("/todo");
        }
        
        setUser({user:'', pass:''});
    }

  return (
    <div className="app-container">
      <Home />
      <Routes>
        <Route path="/" exact element={<Login user1={user1} handleChange={handleChange} handleSubmit={handleSubmit}/>} />
        <Route element={<ProtectedRoute auth={auth}/>}>
          <Route path="/todo" element={<Addtodo/>} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
