import type {FC} from 'react'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';

interface DrawerInterface{
  childern?:String
  open?:boolean
  close?:()=>void
  title?:String
  key?:string | number
}
const Drwer:FC<DrawerInterface> = ({childern,open=true,close,title,key=0}) => {
    
  return (
    <>
 
    <div 
    key={key}
    style={{
        right:open ?0:"-50%",
        transition:"2s"
    }}
    className=' shadow-lg fixed top-0  w-6/12  h-full overflow-auto p-8 z-[10000px] space-y-4'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <div className='border border-gray-200 -mx-8'/>
        <div className='text-gray-500'>
           {childern}
        </div>
        
            <button className='absolute  top-6 right-6' onClick={close}>
               <i className="ri-close-circle-fill text-2xl"></i>
            </button>
        
        </div>
        </>
  )
}

export default Drwer