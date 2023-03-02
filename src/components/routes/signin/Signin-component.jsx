import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../../utility/firebase/firebase";

const Signin = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);

    }

    return ( 
        <div>
            <button onClick={logGoogleUser}>
                sign in with google
            </button>
        </div>
     )
}
 
export default Signin;