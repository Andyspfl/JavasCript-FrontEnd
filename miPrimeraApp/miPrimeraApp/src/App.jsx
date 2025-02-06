import './App.css';
import { useState } from 'react';

export function App({username, name, children}) {
    const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing ? 'Siguiendo' : 'Seguir';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article>
            <header>
                <img src="https://preview.redd.it/kk3gp2y775761.jpg?width=1080&crop=smart&auto=webp&s=79402a9b0ff5e09b08c78390dcbd272d982599d6" alt="" />
                <div>
                    <strong>
                        {children}
                    </strong>
                    <span>
                        @{name}
                    </span>
                </div>
            </header>
            <aside>
                <button onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}