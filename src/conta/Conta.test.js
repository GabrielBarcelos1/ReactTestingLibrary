import React from 'react'
import {screen, render} from '@testing-library/react'
import Conta from './Conta'

describe("Componente de conta",()=>{
  it("Exibir o saldo da conta com formatação correta",()=>{
    render(<Conta saldo={100}/>)
    const saldoConta = screen.getByTestId("saldo-conta")

    
    expect(saldoConta.textContent).toBe("R$ 100")
  })
})