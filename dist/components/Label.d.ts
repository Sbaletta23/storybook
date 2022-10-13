/// <reference types="react" />
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
export declare const Label: ({ label, size, allCaps, color, fontColor }: Props) => JSX.Element;
