import React, { useRef, useState } from 'react'
import { useAdd } from '../../state/hooks/useAdd'
import { useMsgError } from '../../state/hooks/useMsgError'

export default function Form() {

    const [name, setName] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const addUserOnList = useAdd()
    const msgError = useMsgError()

    const addUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addUserOnList(name)
        setName('')
        inputRef.current?.focus()
    }

    return (
        <form
            className=''
            onSubmit={addUser}>
            <div className='flex justify-center mt-8'>
                <input
                    ref={inputRef}
                    value={name}
                    type="text"
                    placeholder='Insira os nomes dos participantes'
                    className='bg-[#B7BAC6] text-white w-full h-12 lg:w-96 lg:h-14 p-2 text-center rounded-l-xl font-bold text-base lg:text-xl'
                    onChange={event => setName(event.target.value)}
                />
                <button
                    className='bg-[#6F74FF] w-40 h-12 lg:h-14 rounded-r-xl font-bold text-base lg:text-lg text-white'
                    disabled={!name}>
                    Adicionar
                </button>
            </div>
            {msgError && <p role='alert' className='text-red-400 m-2 font-bold'>{msgError}</p>}
        </form>
    )
}
