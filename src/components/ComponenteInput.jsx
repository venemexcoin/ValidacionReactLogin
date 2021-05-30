import React from 'react';
import 
{
    GrupoImput,
    LeyendaError,
    IconoValidacion,
    Label,
    Input
} from '../elementos/Formularios'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

             
const ComponenteInput = ({estado,cambiarEstado,tipo,label, placeholder,name,leyendaError,expresionRegular,funcion}) => {


  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value})
  }

  const validacion = () => {
    if (expresionRegular){
      if(expresionRegular.test(estado.campo)){
        cambiarEstado({...estado, valido: 'true'})
      }else {
        cambiarEstado({...estado, valido: 'false'})
      }
    }
    if(funcion){

      funcion()
    }
  }

    return (
        <div>
        
          <Label htmlFor={name} valido={estado.valido}>{label}</Label>
          <GrupoImput>
            <Input 
              type={tipo} 
              placeholder={placeholder} 
              id={name} 
              value={estado.campo}
              onChange={onChange}
              onKeyUp={validacion}
              onBlur={validacion}
              valido={estado.valido}
              
              />
              <IconoValidacion 
                icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                valido={estado.valido} 
                />
            </GrupoImput>
          <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        
       </div>
    )
}

export default ComponenteInput
