import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/contextprovider";
export const GuestLayout = () => {
    const{user,token}= useStateContext();
    if(token){
       return <Navigate to='/'/>
    }

    return (
        <div>
               <div>Guest</div>
               <Outlet/>
        </div>

    );
};
  