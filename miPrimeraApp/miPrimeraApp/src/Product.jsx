import "./Product.module.css"

export function Product(props){
    return (
        <>
            <div className="containerProducto">
                <img src={props.img} alt={props.name} />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
            </div>
        </>
    )
}

