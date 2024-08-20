import { useEffect, useState } from 'react'
import api from '../../services/api'

import Button from '../../components/button'
import TopBackground from '../../components/TopBackGround'

function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        getUsers()
    }, [])


    return (
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>

            {users.map(user => (

                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>

            ))}


            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers