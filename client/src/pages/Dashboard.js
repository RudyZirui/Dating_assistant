import TinderCard from 'react-tinder-card'
import {useState} from 'react'
import ChatContainer from '../components/ChatContainer'
const Dashboard = () => {
    const characters = [
        {
            name: 'Kim Jisoo',
            url: 'https://m.economictimes.com/thumb/msid-96710895,width-1200,height-900,resizemode-4,imgsize-38032/blackpink-jisoo.jpg'
        },
        {
            name: 'Erlich Bachman',
            url: 'https://m.economictimes.com/thumb/msid-96710895,width-1200,height-900,resizemode-4,imgsize-38032/blackpink-jisoo.jpg'
        },
        {
            name: 'Monica Hall',
            url: 'https://m.economictimes.com/thumb/msid-96710895,width-1200,height-900,resizemode-4,imgsize-38032/blackpink-jisoo.jpg'
        },
        {
            name: 'Jared Dunn',
            url: 'https://m.economictimes.com/thumb/msid-96710895,width-1200,height-900,resizemode-4,imgsize-38032/blackpink-jisoo.jpg'
        },
        {
            name: 'Kim Jisoo',
            url: 'https://m.economictimes.com/thumb/msid-96710895,width-1200,height-900,resizemode-4,imgsize-38032/blackpink-jisoo.jpg'
        }
    ]

    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div className="dashboard">
            <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">

                    {characters.map((character) =>
                        <TinderCard
                            className='swipe'
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{backgroundImage: 'url(' + character.url + ')'}}
                                 className='card'
                            ><h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard