import React, { useState } from 'react'
import { useListUsers } from '../../state/hooks/useListUsers'
import { useGiveawayResult } from '../../state/hooks/useGiveawayResult'

export default function Giveaway() {

    const participants = useListUsers()
    const [participant, setParticipant] = useState('')
    const [participantDrawn, setParticipantDrawn] = useState('')
    const [showResult, setShowResult] = useState(false)
    const result = useGiveawayResult()

    const giveaway = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (result.has(participant)) {
            const drawnParticipant = result.get(participant)!
            setParticipantDrawn(drawnParticipant)
            setShowResult(true)
            console.log(`Resultado: ${drawnParticipant}`)
            setTimeout(() => {
                setShowResult(false)
                setParticipantDrawn('')
            }, 3000)
        }
    }

    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <div className='flex items-center h-[800px]'>
                <img src="logo.png" alt="Logotipo da Mixio" className='w-40' />
                <h1 className='font-Shrikhand lg:text-[6rem] text-[3rem] text-[#261E40]'>Mixio</h1>
            </div>
            <div
                className='h-full w-full bg-[#261E40] rounded-t-xl flex flex-col items-center p-4'>
                <h2 className='text-white font-bold text-[2rem] lg:text-[3rem] mt-6'>Veja o resultado</h2>
                <h3 className='text-white font-semibold text-sm lg:text-lg'>Cuidado para não ver o resultado de outra pessoa</h3>
                <h3 className='text-white font-semibold text-sm lg:text-lg'>Nem outra pessoa ver o seu resultado !!</h3>
                <form onSubmit={giveaway} className='m-4 flex items-center'>
                    <select required
                        name="ParticipantsDaVez"
                        id="ParticipantsDaVez"
                        placeholder='Selecione o seu nome'
                        value={participant}
                        onChange={event => setParticipant(event.target.value)}
                        className='lg:w-[350px] w-[220px] h-12 lg:h-14 bg-[#B7BAC6] text-white rounded-l-lg p-2 text-2xl font-bold text-center'>
                        <option>Selecione seu nome</option>
                        {participants.map(participant =>
                            <option key={participant} value={participant} className='hover:bg-[#6F74FF] checked:bg-[#6F74FF]'>
                                {participant}
                            </option>
                        )}
                    </select>
                    <button className='bg-[#6F74FF] w-32 lg:w-40 h-12 lg:h-14 rounded-r-xl font-bold text-base lg:text-lg text-white'>Ver Resultado</button>
                </form>
                {showResult && participantDrawn &&
                    <p role='alert' className='text-white font-bold text-xl'>
                        Você tirou <span className='text-[#6F74FF]'>{participantDrawn}</span> no sorteio!
                    </p>}
            </div>
        </div>
    )
}
