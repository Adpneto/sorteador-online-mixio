import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Configuration from "./config"

const mockNav = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNav
    }
})

describe('A pagina de configuração', () => {
    test('Deve ser renderizada corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <Configuration/>
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot()
    })
})