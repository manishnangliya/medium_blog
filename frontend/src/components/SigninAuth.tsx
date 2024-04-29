import { Link, useNavigate } from "react-router-dom";
import { TextBox } from "./TextBox";
import { ChangeEvent, useContext, useState } from "react";
import { CustomButton } from "./CustomButton";
import { signInInput } from "@manishnangliya/medium-common-validation";
import { BACKEND_URL } from "../config";
import { UserContext } from "../store/Context";

export function SigninAuth() {
    const [inputPosts,setInputPosts] = useState<signInInput>({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    function emailHandle(e:ChangeEvent<HTMLInputElement>){
        setInputPosts({
            ...inputPosts,
            email:e.target.value
        })
    }
    function passwordHandle(e:ChangeEvent<HTMLInputElement>){
        setInputPosts({
            ...inputPosts,
            password:e.target.value
        })
    }
    const userContext = useContext(UserContext);
    async function signIpHandle(){
        try {
            const response = await fetch(`${BACKEND_URL}/api/v1/user/signin`, {
                method: "POST",
                body: JSON.stringify(inputPosts)
            });
            const json = await response.json();
            if (response.ok) {
                const jwt = json.jwt;
                console.log(jwt);
                localStorage.setItem('token', jwt);
                userContext?.setIsLoggedIn(true);
                navigate('/blogs')
            }
            else{
                alert(json.message);
            }
        } catch (error) {
            console.log(error);
            alert("sign up error");
        }
    }
    return <div className="h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center gap-3 ">
            <div className="font-bold text-3xl">
                Access your account
            </div>
            <div className="font-semibold text-sm text-slate-400">
                 Don't have an account?
                <span className="underline pl-2">
                    <Link to='/signup'>Signup </Link> 
                </span>
            </div>
            <TextBox label="Email" placeholder="email@example.com" onChange={emailHandle}  type="email"/>
            <TextBox label="Password" placeholder="**********" onChange={passwordHandle} type="password"/>
            <CustomButton onClick={signIpHandle} label="Login" />
        </div>
    </div>
}