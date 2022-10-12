import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from "../../components/Label";


export default {
    title: 'UI/Label',               // Titulo en StoriBook 
    component: Label,                // Componente
    argTypes: {
        size: { control: 'select'},  // Selector de Color
        color: { control: 'select'},
        fontColor: { control: 'color'}
    }             
} as ComponentMeta<typeof Label>     // Tipamos con interfaz de Label


// Instancia del Componente para los Tipos - Tipamos los argumentos
const Template: ComponentStory<typeof Label> = (args) => <Label {...args}/> 

// Diferentes tipos de Componente - bind permite copiar el template

export const Basic = Template.bind({})
Basic.args = {
    size:'normal',
    label: 'Label - Basico',
    allCaps: true
} 

export const Primary = Template.bind({})
Primary.args = {
    size:'h1',
    label: 'Label - Primary',
    color: 'text-secundary'
} 


export const Secundary = Template.bind({}) 
Secundary.args = {
    size:'h2',
    label: 'Label - Secundary',
    color: 'text-tertiary'
}