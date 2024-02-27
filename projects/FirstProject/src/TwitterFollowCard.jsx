import { useState } from "react";

export default function TwitterFollowCard ({ user,acount,url }) {
    
    const[isFollowing,setIsFollwing] = useState(false)
    
    const classButton = isFollowing ? 'card-button followed' : 'card-button';
    
    const [textAccount,setTextAcount] = useState('Seguir')

    const handleClick = ()=>{
        if (isFollowing) {
            if (confirm(`Deseas dejar de seguir a ${user}`)) {
                setIsFollwing(!isFollowing)  
                setTextAcount('Seguir')
            }
        }else{
            setIsFollwing(!isFollowing)
            setTextAcount('Siguiendo')
        }
        
    }
    const setText=()=>{
        if (isFollowing) {
            setTextAcount('Dejar de Seguir')
        }
    }
    const leaveSetText = ()=>{
        if (isFollowing) {
            setTextAcount('Siguiendo')
        }
    }

    return (
        <article className="card">
            <header className="card-header">
                <img src={ url } alt="React"  className="card-avatar"/>
                <div className='card-info'>
                    <strong>{ user }</strong>
                    <span className="card-acount">@{ acount }</span>
                </div>
            </header>
            <aside>
                <button className={classButton} onClick={handleClick} onMouseEnter={setText} onMouseLeave={leaveSetText} >
                    { textAccount }
                </button>
            </aside>
        </article>
    )
}