import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import App,{ calcularNovoSaldo } from './App'

describe('Componente Principal',()=>{
  describe("quando eu abro o app do banco", ()=>{
    it("o nome deve ser exibido", ()=>{
      render(<App/>)
  
      expect(screen.getByText("ByteBank")).toBeInTheDocument()
    })
    it("o saldo deve ser exibido", ()=>{
      render(<App/>)
  
      expect(screen.getByText("Saldo:")).toBeInTheDocument()
    })
    it("o botão de realizar transação deve ser exibido", ()=>{
      render(<App/>)
  
      expect(screen.getByText("Realizar operação")).toBeInTheDocument()
    })
  })

  describe("quando eu realizo uma transação",()=>{
    it("que é um saque valor vai diminuir",()=>{
      const valores = {
        transacao: "saque",
        valor: 50
      }

      const novoSaldo  = calcularNovoSaldo(valores, 150)

      expect(novoSaldo).toBe(100)
    })
    it("que é um deposito valor vai aumentar",()=>{
      const valores = {
        transacao: "deposito",
        valor: 50
      }

      const novoSaldo  = calcularNovoSaldo(valores, 150)

      expect(novoSaldo).toBe(200)
    })
    it("que é um saque, a transação deve ser realizada",async ()=>{
      const { getByText, getByTestId , getByLabelText} = render(<App/>)
      const saldo = getByTestId("saldo-conta")
      const transacao = getByLabelText("Saque")
      const valor = getByTestId("valor")
      const btnTransacao = getByText("Realizar operação")
      expect(saldo.textContent).toBe("R$ 1000")
      fireEvent.click(transacao, {target: {value: "saque"}})
      fireEvent.change(valor, {target: {value: "100"}})
      fireEvent.click(btnTransacao)
      expect(saldo.textContent).toBe("R$ 900")
    })
    it("que é um deposito, a transação deve ser realizada",async ()=>{
      const { getByText, getByTestId , getByLabelText} = render(<App/>)
      const saldo = getByTestId("saldo-conta")
      const transacao = getByLabelText("Depósito")
      const valor = getByTestId("valor")
      const btnTransacao = getByText("Realizar operação")
      expect(saldo.textContent).toBe("R$ 1000")
      fireEvent.click(transacao, {target: {value: "deposito"}})
      fireEvent.change(valor, {target: {value: "100"}})
      fireEvent.click(btnTransacao)
      expect(saldo.textContent).toBe("R$ 1100")
    })
  })
})