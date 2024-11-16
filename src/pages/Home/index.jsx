import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

import { 
  Title, 
  Container, 
  Form, 
  ContainerInputs,
  Input, 
  InputLabel,
} from './styles'

//import UsersImg from '../../assets/users.png'
import Button from '../../components/Button'
import DefaultTopBackground from '../../components/TopBackground'

function App () {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser(){ // const data = 
   await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
   } )
   // console.log(data)
  }

  return (  
      <Container>
        <DefaultTopBackground/>

        <Form>
          <Title>Cadastrar Usuário</Title> 
          <ContainerInputs>
            
              <div>
                <InputLabel> Nome <span> *</span></InputLabel>
                <Input type='text' placeholder='Nome de usuário' ref={inputName}/>                
              </div>
              
              <div>
                <InputLabel>Número <span> *</span></InputLabel>
                <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
              </div>
            
          </ContainerInputs>
          
          <div style={{width: '100%'}}>
              <InputLabel>E-mail <span> *</span></InputLabel>
              <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
          </div>
            
          <Button type='button' onClick={registerNewUser} theme='primary'>Cadastrar usuário</Button>
          
        </Form>

        <Button type='button'onClick={()=> navigate('/lista-de-usuarios')} >Ver lista de usuários</Button>
      </Container> 
  )
}

export default App
