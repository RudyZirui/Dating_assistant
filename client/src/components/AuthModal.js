import {useState} from "react";

const AuthModal = ({setShowModal,isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        try{
            if( isSignUp && (password !== confirmPassword)){
                setError("Passwords need to match!")
            }
            console.log('make a post request to our database')

        }catch(error){
            console.log(error)
        }
    }


//第三个input前面有isSignUP的条件，因为登陆后不需要密码二次确认，所以加一个判断，如果是登陆，就不需要这一个input
    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>🙅</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By CLicking Log In, you agree to our terms. Learn how we process your data in Privacy Policy</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onCharge={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onCharge={(e) => setPassword(e.target.value)}
                />

                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onCharge={(e) => setConfirmPassword(e.target.value)}
                />}



                <input className="secondary-button" type="submit" value="Submit"/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>

        </div>
    )
}
export default AuthModal