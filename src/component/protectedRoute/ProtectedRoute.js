import { Outlet, Navigate , useLocation} from "react-router-dom";
export default function ProtectedRoute(props){
    const auth = props.auth;
    let location = useLocation();
    if(auth){
        return <Outlet/>
    }
    else{
        return <Navigate to='/' state={{from:location}} replace/>
    }
    
    
}