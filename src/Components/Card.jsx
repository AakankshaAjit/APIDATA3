import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title,brand,imgUrl,price,id}) => {
  
  

  return (
    <Link to={`/List/${id}`} className='w-96 h-72  my-5 mx-4 bg-white rounded-2xl shadow-lg  border-4   border-black '>

    
    <img className='h-32 w-full object-cover  mt-1' src={imgUrl} alt="" />
    <span className="flex font-bold text-lg ml-5" >{title}</span>
    <span className="flex font-bold text-lg ml-5" >{brand}</span>

    <span className="flex font-bold text-lg ml-5" >${price}</span>
    </Link>

    
    


   
  )
}

export default Card