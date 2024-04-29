import { NavLink } from "react-router-dom"
import { Avatar } from "./Avatar"
import { useContext } from "react";
import { UserContext } from "../store/Context";

export const AppBar = () => {
    const userContext = useContext(UserContext);
    console.log(userContext?.user)
    return <div className="border-b px-14 py-4 flex justify-between bg-black text-white font-semibold">
        <div className="flex flex-col justify-center">
            <NavLink to='/'>
                Medium
            </NavLink>
        </div>

        <div className="flex  items-center gap-2">

            {!userContext?.loading && (( !userContext?.loading && userContext?.isloggedIn) ?
                <>
                    <NavLink to='/create'>
                        <button type="button" className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2">Publish</button>
                    </NavLink>
                    <NavLink to='/logout'> LogOut</NavLink>
                    <Avatar name={userContext.user?.name || "Anonymous"} />
                </>
                :
                <>
                    <NavLink to='/signin'> Signin</NavLink>
                    <NavLink to='/signup'> Signup</NavLink>
                </>)
            }
        </div>
    </div>
}