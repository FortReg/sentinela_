import React, { createContext, useContext, useState } from 'react'
import favicon from '../../../public/favicon.ico'
import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react'

const MenuNavContext = createContext()  

export function MenuNav( {children}) {

    const [expand, setExpand] = useState(true)

    return (
      <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
          <div className='p-4 pb-2 flex justify-end items-center'>
            <button onClick={()=> setExpand(curr => !curr)} className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
              { expand? <ChevronFirst/>: <ChevronLast/>}
            </button>
          </div>

          <MenuNavContext.Provider value={{expand}}>
            <ul className='flex-1 px-3'>
              {children}
            </ul>
          </MenuNavContext.Provider>

          <div className='border-t flex p-3'>
              <img 
                src={favicon} 
                alt="" 
                className='w-10 h-10 rounded-md'
              />
              <div className={`
                  flex justify-between items-center
                  overflow-hidden transition-all ${expand ? "w-52 ml-3":"w-0"}
                `}>
                  <div className='leading-4'>
                    <h4 className='font-semibold'>Sentinela</h4>
                    <span className='text-xs text-gray-600'>sentinela@gmail.com</span>
                  </div>
                  <MoreVertical size={20}/>
              </div>
          </div>
        </nav>
      </aside>
    )
  }
  
  export function MenuNavItem( {icon, text, active, alert }){
    const {expand} = useContext(MenuNavContext)
    return(
      <li className={`
        relative flex items-center justify-center py-2 my-1
        font-medium rounded-md cursor-pointer
        transition-colors
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}>
        {icon}
        <span 
          className={`overflow-hidden transition-all ${
            expand ? "w-52 ml-3": "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expand ? "":"top-2"}`} />
        )}
      </li>
    )
  }