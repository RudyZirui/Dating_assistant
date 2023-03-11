import whiteLogo from '../images/tinder_logo_white.png'
import colorLogo from '../images/color-logo-tinder.png'

const Nav = ({minimal, setShowModal, showModal, setIsSignUp}) => {

  /*handleClick用于点击log in的时候和create account一样可以跳出modal页*/
    const handleCLick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }
    const authToken = false
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
            </div>

            {!authToken && !minimal && <button
                className="nav-button"
                onClick={handleCLick}
                /*让按钮按下后变换颜色并失去点击功能（因为只要点一次就够）*/
                disabled={showModal}
            >Log in</button>}
        </nav>

    )
}
export default Nav