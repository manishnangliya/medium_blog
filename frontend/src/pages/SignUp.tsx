
import { Quotes } from "../components/Quotes";
import { SignupAuth } from "../components/SignupAuth";

export function SignUp() {
    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div >
                <SignupAuth/>
            </div>
            <div  className="invisible lg:visible">
                <Quotes />
            </div>
        </div>
    </>
}