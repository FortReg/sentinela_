import React from 'react'
import "./index.css"

const FormSegurado = () => {

  

  return (
    <container className='w-3/4 h-full justify-center flex mt-14'>
      <div className='sm:w-2/4 w-2/4 h-3/4 items-center flex flex-col rounded-md border box-border p-5'>
        <h1 className='text-2xl font-semibold mt-4'>Dados Segurado</h1>
        <form className='w-full md:2/4 flex flex-col px-4 mt-4 gap-1'>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder='Nome' required/>
          <label htmlFor="">CPF/CNPJ</label>
          <input type="text" placeholder='CPF/CNPJ'/>
          <label htmlFor="">Endereço</label>
          <input type="text" placeholder='Endereço'/>
          <hr className='bg-slate-300 mt-4'/>
          <label htmlFor="">Endereço</label>
          <input type="text" placeholder='Endereço'/>
          <div className='w-full xl:flex lg:flex  gap-5'>
            <div className= 'w-full flex flex-col'>
              <label htmlFor="">Complemento</label>
              <input type="text" placeholder='Complemento'/>
            </div>
            <div className='w-full flex flex-col'>
              <label htmlFor="">Numero</label>
              <input type="number" placeholder='Numero'/>
            </div>
          </div>
        </form>
        <div className='flex w-full justify-end p-4'>
          <button type='submit' className='w-28 h-8 rounded-md mt-2 bg-slate-500 hover:bg-slate-400'>Salvar</button>
        </div>
      </div>
    </container>
  )
}

export default FormSegurado
