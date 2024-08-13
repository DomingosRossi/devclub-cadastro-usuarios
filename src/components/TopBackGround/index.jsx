import UsersImgage from '../../assets/users.png';
import { Background } from './styles';

function TopBackground(){

    return(
        <Background>
        <img src={UsersImgage} alt="imagem-usuarios" />
      </Background>
    )
}

export default TopBackground