import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { act } from "react-dom/test-utils"
import Form from "./form"

describe('O Comportamento do Formulario.tsx', () => {
  test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    expect(input).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  test('Adicionar um participante, caso exista um nome preenchido!', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })

  test('Nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    fireEvent.click(button)

    const msgError = screen.getByRole('alert')
    expect(msgError.textContent).toBe('Nomes duplicados não são permitidos!')
  })

  test('A menssagem de erro deve sumir apos os timers', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const button = screen.getByRole('button')

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina'
      }
    })
    fireEvent.click(button)

    let msgError = screen.queryByRole('alert')
    expect(msgError).toBeInTheDocument()

    act(() => {
      jest.runAllTimers()
    })

    msgError = screen.queryByRole('alert')
    expect(msgError).toBeNull()
  })
})

