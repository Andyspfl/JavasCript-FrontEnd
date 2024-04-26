import "./index.css"
export function Form(){

    return(
        <form action="POST" className="flex">
            <label htmlFor="">Nombre</label>
            <input  id="nombre" type="text" />
            <label htmlFor="">Apellido</label>
            <input  id="apellido" type="text" />
            <label htmlFor="">Email</label>
            <input id="email"  type="e-mail" />
            <label htmlFor="">Contrasenia</label>
            <input  id="pass" type="password" />
            <label htmlFor="">Fecha de Nacimiento</label>
            <input  id="date" type="date" />

            <button>SAVE</button>
        </form>
    )
}