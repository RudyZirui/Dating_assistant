import {useCookies} from "react-cookie";

const ChatHeader = ({user}) =>{
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const logout =()=>{
        removeCookie('UserId', cookies.UserId)
        removeCookie('AuthToken', cookies.AuthToken)
        window.location.reload()
    }
//因为数据传输的比页面渲染（render）的慢，要先等数据到再渲染。user用来判断数据是否送达
    if(!user) {
        return (
            <div className="chat-container-header">
                <div className="profile">
                    <div className="img-container">
                        <img src=""/>
                    </div>
                    <h3>loading...</h3>
                </div>
                <i className="log-out-icon" onClick={logout}>←</i>
            </div>
        )
    }
    return(
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name}/>
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <i className="log-out-icon" onClick={logout}>←</i>
        </div>
    )
}

export default ChatHeader