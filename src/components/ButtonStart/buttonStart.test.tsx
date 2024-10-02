import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListUsers } from "../../state/hooks/useListUsers"
import List from "./buttonStart"

jest.mock('../../state/hooks/useListUsers', () => {
    return {
        useListUsers: jest.fn()
    }
})

const mockGiveaway = jest.fn()
jest.mock('../../state/hooks/useGiveaway', () => {
    return {
        useGiveaway: () => mockGiveaway
    }
})

const mockNav = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNav
    }
})

describe('Onde não exite participantes suficientes', () => {
    beforeEach(() => {
        (useListUsers as jest.Mock).mockReturnValue([])
    })
    test('A brincadeir não pode ser iniciado', () => {
        render(
            <RecoilRoot>
                <List/>
            </RecoilRoot>
        )

        const Button = screen.getByRole('button')
        expect(Button).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListUsers as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Joselito'])
    })

    test('A brincadeira pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <List/>
            </RecoilRoot>
        )

        const Button = screen.getByRole('button')
        expect(Button).not.toBeDisabled()
    })

    test('A brincadeira foi iniciada', () => {
        render(
            <RecoilRoot>
                <List/>
            </RecoilRoot>
        )

        const Button = screen.getByRole('button')
        fireEvent.click(Button)
        expect(mockNav).toHaveBeenCalledTimes(1)
        expect(mockNav).toHaveBeenCalledWith('/sorteio')
        expect(mockGiveaway).toHaveBeenCalledTimes(1)
    })
})