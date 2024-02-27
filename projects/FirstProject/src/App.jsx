import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
export default function App(){
    return (
        <>
        <TwitterFollowCard user="Lucas" acount="LucasDev" url="https://unavatar.io/react/" isFollowing/>
        <TwitterFollowCard user="React" acount="ReactDev" url="https://unavatar.io/twitter/" isFollowing={ false }/>
        </>
    )
}