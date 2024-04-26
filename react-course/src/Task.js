import './task.css'
export function TaskCard({ready}){
    // const cardStyles = {background: "#202020", color:"whitesmoke", padding:"20px"}
    // const titleStyle  = {fontWeight:"lighter"}
    // estilos en linea
    return <div className="card">
        <h1 >
            Mi primera tarea
        </h1>
        <span
        className={ready ? 'bg-green':'bg-red'}
        >{ready == true ? 'Tarea realizada': 'Tarea pendiente'
        }</span>
    </div>
}