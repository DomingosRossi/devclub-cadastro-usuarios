import { Button } from './styles'

function DefaultButton({ children, theme, ...props }){
//...props variavel criada para guardar o restante de children

    return(
        <Button {...props} theme={theme}>{children}</Button>
    )
}

export default DefaultButton