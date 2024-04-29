
import { Quotes } from "../components/Quotes";
import { SigninAuth } from "../components/SigninAuth";

export function SignIn(){
    return <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
            <div >
                <SigninAuth/>
            </div>
            <div  className="invisible lg:visible">
                <Quotes />
            </div>
        </div>
    </>
}