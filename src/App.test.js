import React from 'react'
import {screen, render} from '@testing-library/react'
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
    it("que é um saque maior que o meu saldo  valor vai ficar negativo",()=>{
      const valores = {
        transacao: "saque",
        valor: 200
      }

      const novoSaldo  = calcularNovoSaldo(valores, 150)

      expect(novoSaldo).toBe(-50)
    })
  })
 

})