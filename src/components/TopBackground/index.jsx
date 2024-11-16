


import UsersImg from '../../assets/users.png'
import { Background } from "./styles"


function DefaultTopBackground(){

    return(
        <Background> 
            <img src={UsersImg} alt="Imagem-usuarios" />
        </Background>
    )
}
export default DefaultTopBackground