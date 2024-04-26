import add from "add";

export function Greeting({title, name="user"}){
    console.log(title, name)
    return <h1>{title}, dice {name} </h1>
}

export function UserCard({name, amount, married, address, greet}){
    console.log({name, amount,married,address,greet});
    return <div>
        <p>{name}</p>
        <p>{amount}</p>
        <p>{married ? 'married' : 'single'}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>City: {address.street}</li>
        </ul>
    </div>
}