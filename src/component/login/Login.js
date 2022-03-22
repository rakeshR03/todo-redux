
import './login.css';


export default function Login(props){
    
    return (
        <section className='login-container'>
                <h3>Kindly Login</h3>
                <form className='form-container'>
                    <input type="text" placeholder='userName' 
                        value={props.user1.user} name="user" onChange={props.handleChange}/>
                    <input type="password" placeholder='password' 
                        value={props.user1.pass} name="pass" onChange={props.handleChange}/>
                    <button type="submit" onClick={props.handleSubmit} >Login</button>
                </form>
            </section>
    );
}