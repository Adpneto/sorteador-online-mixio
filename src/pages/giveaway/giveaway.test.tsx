import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Giveaway from "./giveaway"
import { useListUsers } from "../../state/hooks/useListUsers"
import { useGiveawayResult } from "../../state/hooks/useGiveawayResult"

jest.mock('../../state/hooks/useListUsers', () => {
    return {
        useListUsers: jest.fn()
    }
})

jest.mock('../../state/hooks/useGiveawayResult', () => {
    return {
        useGiveawayResult: jest.fn()
    }
})

describe('Na pagina de sorteio', () => {
    const participants = [
        'Ana',
        'Catarina',
        'Jorel'
    ]

    const result = new Map([
        ['Ana', 'Jorel'],
        ['Jorel', 'Catarina'],
        ['Catarina', 'Ana']
    ])

    beforeEach(() => {
        (useListUsers as jest.Mock).mockReturnValue(participants);
        (useGiveawayResult as jest.Mock).mockReturnValue(result)
    })

    test('Todos os participantes pode exibir o seu Amigo secreto', () => {
        render(
            <RecoilRoot>
                <Giveaway/>
            </RecoilRoot>
        )

        const options = screen.queryAllByRole('option')
        expect(options).toHaveLength(participants.length + 1)
    })

    test('o amigo secreto é exibido quando solicitado', () => {
        render(<RecoilRoot>
            <Giveaway />
        </RecoilRoot>)

        const select = screen.getByPlaceholderText('Selecione o seu nome')
        
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const botao = screen.getByRole('button')

        fireEvent.click(botao)

        const amigoSecreto = screen.getByRole('alert')

        expect(amigoSecreto).toBeInTheDocument()

    })
})