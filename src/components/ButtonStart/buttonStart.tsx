import React from 'react'
import { useListUsers } from '../../state/hooks/useListUsers'
import { useNavigate } from 'react-router-dom'
import { useGiveaway } from '../../state/hooks/useGiveaway'

export default function ButtonStart() {

  const participantes = useListUsers()
  const navigate = useNavigate()
  const giveaway = useGiveaway()

  const start = () => {
    giveaway()
    navigate('/sorteio')
  }

  return (
    <div>
      <button
        disabled={participantes.length < 3} 
        onClick={start}
        className='bg-[#6F74FF] px-4 py-4 rounded-lg text-white font-bold'>
        Iniciar brincadeira
      </button>
    </div>
  )
}
