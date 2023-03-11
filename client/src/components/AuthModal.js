import {useState} from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {useCookies} from 'react-cookie'
const AuthModal = ({setShowModal,isSignUp}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    let navigate = useNavigate()

    console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            if( isSignUp && (password !== confirmPassword)){
                setError("Passwords need to match!")
                return
            }
            console.log('posting',email, password)
            const response = await axios.post(`http://localhost:8000/${isSignUp ? 'signup' : 'login'}`, { email, password })

            setCookie('AuthToken', response.data.token)
            setCookie('UserId', response.data.userId)
            // 201响应码意味着成功请求并创建新的资源 https://zhuanlan.zhihu.com/p/462030879
            const success = response.status === 201
            if (success && isSignUp) navigate('/onboarding')
            if (success && !isSignUp) navigate('/dashboard')

            window.location.reload()
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
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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