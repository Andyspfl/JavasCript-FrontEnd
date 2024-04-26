
import PropTypes from 'prop-types'
export function Button({text, name}){
    console.log(text);
    
    return<button onClick={function Button() {
        console.log('Hola mundo');
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name : 'Usuarios'
}