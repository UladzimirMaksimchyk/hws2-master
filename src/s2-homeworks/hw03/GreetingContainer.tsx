import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback:  (name: string) => void // need to fix any
}

export const pureAddUser = (name:  string, setError:  (error: string) => void, setName:   (name: string) => void, addUserCallback: 
(name: string) => void) => { 

    if (name.trim() === '') {
        setError('Name is required')}
        else{ addUserCallback(name)
            setName('')
        }
        // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError:( error: string)) => {
    if (name.trim() === '') {
        setError('Name is required')

    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: (name: string)) => {
    if (e.key === 'Enter') {
        addUser
     // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState< null | string>('') // need to fix any
    const [error, setError] = useState< null | string>('')
     // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
         // need to fix any
        setName('some name') // need to fix

        error && setError('')
    }
    const addUser = (addUserCallback: (name: string) => void, setError: (error: string) => void, setName: (name: string) => void, name: string) => {
        pureAddUser( name, setError, setName, addUserCallback)
    }

    const onBlur = (  setError: (error: string), name: string) => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {      
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
