import Form from '../../components/Form/form'
import { Participants } from '../../components/ListParticipants/listParticipants'
import ButtonStart from '../../components/ButtonStart/buttonStart'

export default function Configuration() {
    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <div className='flex items-center h-[800px]'>
                <img src="logo.png" alt="Logotipo da Mixio" className='w-40' />
                <h1 className='font-Shrikhand lg:text-[6rem] text-[3rem] text-[#261E40]'>Mixio</h1>
            </div>
            <div 
            className='h-full w-full bg-[#261E40] rounded-t-xl flex flex-col items-center p-4'>
            <h2 className='text-white font-bold text-[2rem] lg:text-[3rem] mt-6'>Vamos começar</h2>
            <h3 className='text-white font-semibold text-sm lg:text-lg'>Criei uma lista com nome dos participante e depois sorteie!</h3>
                <Form />
                <Participants />
                <ButtonStart />
            </div>
        </div>
    )
}
