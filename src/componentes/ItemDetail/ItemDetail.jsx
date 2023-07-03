import React from 'react'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit sunt quaerat quis culpa asperiores iste non nihil quia a eius possimus in, aperiam repellendus numquam et molestiae quasi. Mollitia.</p>
            <img src={img} alt={nombre} />

        </div>
    )
}

export default ItemDetail