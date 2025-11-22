import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import type { FC } from 'react';

 const IconButtonModel={
  primary: "bg-blue-50 text-blue-500 hover:bg-blue-500 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
  success: "bg-green-50 text-green-500 hover:bg-green-500 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
  danger: "bg-red-50 text-red-500 hover:bg-red-500 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
  info: "bg-cyan-50 text-cyan-500 hover:bg-cyan-500 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
  warning: "bg-yellow-50 text-yellow-600 hover:bg-yellow-600 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
  dark: "bg-zinc-50 text-zinc-800 hover:bg-zinc-800 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
  secondary: "bg-blue-100 text-blue-700 hover:bg-blue-700 w-9 h-9 font-medium flex items-center justify-center hover:text-white rounded",
    }

 interface IconButtonInterface{

     type?:"primary" |"success" |"danger"|"info" |"warning" |"dark"|"secondary" 
     onClick?:()=>void
     icon?:string
     key?:string | number
 }
const IconButton:FC<IconButtonInterface> = ({type="primary",onClick,icon,key=0}) => {
  return (
    <button key={key} className={IconButtonModel[type]} onClick={onClick} >
     
     <i className={`ri-${icon}`}></i>

    </button>
  )
}

export default IconButton