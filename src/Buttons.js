/**
 * Los componentes empiezan con mayusculas y usan notacion Pascal Case.
 * Un componente React creado en una función (functional component). 
 * Cuando hagamos click en el botón, este va a tomar un color aleatorio RGB
 * Voy a definir un estado para el botón que sea el color de fondo actual
 */
 const Button = (props) => {

    return (<button onClick={props.changeColor} 
      style={{ 'fontSize': '20px' }} 
      className='Btn'> {props.texto}
    </button>);
  };

  export default Button;