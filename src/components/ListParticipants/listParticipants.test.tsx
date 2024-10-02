import { RecoilRoot } from "recoil"
import { render, screen } from "@testing-library/react"
import { useListUsers } from "../../state/hooks/useListUsers"
import { Participants } from "./listParticipants"


jest.mock('../../state/hooks/useListUsers', () => {
    return {
        useListUsers: jest.fn()
    }
})

describe('Uma lista vazia de participantes!', () => {
    beforeEach(() => {
        (useListUsers as jest.Mock).mockReturnValue([])
    })
    test('Deve ser renderizada sem elementos', () => {
        render(
            <RecoilRoot>
                <Participants/>
            </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listUsers')
        expect(itens).toHaveLength(0)
    })
})

describe('Uma lista preenchida de participantes!', () => {
    const participantes = ['Ana', 'Catarina']
    beforeEach(() => {
        (useListUsers as jest.Mock).mockReturnValue(participantes)
    })
    test('Deve ser renderizada com os elementos', () => {
        render(
            <RecoilRoot>
                <Participants/>
            </RecoilRoot>)
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})