import { VscBug } from 'react-icons/vsc'
export const Posts = () => {
    return <button onClick={()=>{
        alert('obteniendo datos')
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data=>console.log(data))
        .catch(error => console.error(error))
    }}>
        <VscBug/>
        Traer datos
    </button>
}