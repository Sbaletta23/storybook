import './label.css';



export interface Props {
  /**
   *  Esto es lo que se va mostrar en la etiqueta
   */
  label: string;
   /**
   *  Tamaño por defecto del label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
   /**
   *  Capitalizar texto
   */
  allCaps?: boolean;
  /**
   *  Tipos de Color
   */
  color?: 'text-primary' | 'text-secundary' | 'text-tertiary';
  /**
   *  Color personalizado de la Fuente
   */
  fontColor?: string;

}

export const Label = ({
   label = 'Escribir algo...',
   size = 'h1',
   allCaps = false,
   color = 'text-primary',
   fontColor
  }: Props) => {
  return (
     <span 
        className={` label ${size} ${color}`}
        style={{ color: fontColor}}
     >
        { allCaps ? label.toUpperCase() : label }
     </span>
  )
}
