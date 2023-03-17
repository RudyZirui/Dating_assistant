import Nav from "../components/Nav";
import {useState} from "react";
import AuthModal from "../components/AuthModal";
import {useCookies} from "react-cookie";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    //the ture/false authToken will change the content of button
    const authToken = false

    const handleClick = () =>{

        setShowModal(true)
        setIsSignUp(true)
    }

    return (
        <div className="overlay">
            <Nav minimal={false}

                 setShowModal={setShowModal}
                 showModal={showModal}
                 setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className="primary-title">Witness Kismet of U</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'SignOut' : 'Creat Account'}
                </button>

                {showModal &&(
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home