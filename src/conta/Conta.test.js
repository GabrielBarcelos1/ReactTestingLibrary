import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import Conta from './Conta'

describe("Componente de conta",()=>{
  it("Exibir o saldo da conta com formatação correta",()=>{
    render(<Conta saldo={100}/>)
    const saldoConta = screen.getByTestId("saldo-conta")

    
    expect(saldoConta.textContent).toBe("R$ 100")
  })
  it("Chama a função de realizar transação quando o botão é clicado", () =>{
    const funcaoRealizarTransacao = jest.fn()
    render(<Conta saldo={100}  realizarTransacao={funcaoRealizarTransacao}/>)

    fireEvent.click(screen.getByText("Realizar operação"))

    expect(funcaoRealizarTransacao).toHaveBeenCalled()


  })
})