import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void, setName: (name: string) => void, addUserCallback:
    (name: string) => void) => {

    if (name.trim() === '') {
        setError('Name is required')
    }
    else {
        addUserCallback(name)
        setName('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string)=>void) => {
    if (name.trim() === '') {
        setError('Name is required')

    }
    // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUserCallback: (name: string) => void,
name: string,
setError: (error: string) => void,
setName: (name: string) => void) => {
    if (e.key === 'Enter') { 
        pureAddUser(name, setError, setName, addUserCallback);
    }

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
    const [name, setName] = useState<null | string>('') // need to fix any
    const [error, setError] = useState<null | string>('')
    // need to fix any

    // const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     // need to fix any
    //     setName('some name') // need to fix
    //     error && setError('')
    // }
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (error) {
          setError('');
        }
      };


    const addUser = (name:string ) => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = (name:string) => {
        pureOnBlur(name, setError)
    }


    // const onEnter = (e: KeyboardEvent<HTMLInputElement>,addUserCallback:(name:string) => void) => {
    //     pureOnEnter(e, addUserCallback);
    // };

    const onEnter = (e: KeyboardEvent<HTMLInputElement>,name:string) => {
        pureOnEnter(e, addUserCallback, name, setError, setName);
    };

    const totalUsers =users.length // need to fix
    const lastUserName =users.length > 0 ? users[users.length - 1].name : 'No users yet';  // need to fix

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
