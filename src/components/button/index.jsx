import { Button } from './styles'

function DefaultButton({ children, ...props }){
//...props variavel criada para guardar o restante de children

    return(
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton