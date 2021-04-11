import React from 'react'
import { render } from '@testing-library/react'
import Transacoes from './Transacoes'

describe("a", () =>{
  it("a", () =>{
    const transacoes =[
      {
        "valor": 10,
        "transacao": "saque",
        "data": "10/08/2020",
        "id": 1
      },
      {
        "transacao": "deposito",
        "valor": "20",
        "data": "26/09/2020",
        "id": 2
      },
    ]

    const {container} = render(<Transacoes transacoes={transacoes}/>)
    

    expect(container.firstChild).toMatchSnapshot()

  })
})