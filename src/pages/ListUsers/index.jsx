
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import Button from "../../components/Button"
import DefaultTopBackground from '../../components/TopBackground'
import Trash from '../../assets/trash.svg'
//import { Container } from "../Home/styles"

import {
    Container,   ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser 
} from './styles'



function ListUsers() {
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function getUsers() {

            const {data} = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUser = users.filter(user => user.id !== id)

        setUsers(updatedUser)
    }

    return (
        <Container>
            <DefaultTopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                            
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" onClick={()=> deleteUsers(user.id)}/>
                    </CardUsers>

                ))}

            </ContainerUsers>

            <Button type='button'onClick={()=> navigate('/')}>Voltar</Button>

            
           
            </Container>
            )
}
     export default ListUsers