import { useState, useEffect } from "react"
import './ProductSection.module.css'

export function ProductSection () {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/productos')
            .then(response => response.json())
            .then(data => setProducts(data))
        console.log(products);
        
    }, [])

    console.log(products, "Hola");
    

    return (
        <div>
            <h1>Productos</h1>

            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nombre}</td>
                            <td>{product.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
