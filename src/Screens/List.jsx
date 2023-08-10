import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const List = () => {
    
        const [products, Setproduct] = useState({});
    
      const { id } = useParams();
    
      const fetch_data = () => {
        if (localStorage.allproducts) {
          const my_data = JSON.parse(localStorage.getItem("allproducts"));
    console.log(my_data)

    const myproduct =my_data.filter(e=>e._id===id)

    Setproduct(myproduct[0])
        //  Setproduct(my_data[id - 1]);
        } else {
          alert("You dont have any products");
        }
      };

      console.log(id)
      useEffect(() => {
        fetch_data();
      }, []);
    
      return (
        <section className="w-full h-screen flex justify-center items-center">
      <div className="flex bg-white overflow-hidden shadow-xl rounded-2xl border-2 border-blue-500 w-4/9 h-3/9">
        <img
          className="w-2/5   object-cover h-full"
          src={products.imgUrl}
          alt=""
        />

        <div className="flex gap-5 flex-col pt-5 w-1/2 ml-5 ">
          <span className="text-2xl font-bold text-gray-700">
            {products.title}

            <span className="text-sm ml-5 text-gray-700">
              ({products.brand})
            </span>
          </span>

          
          
        </div>
      </div>
    </section>
    
  

  
    
  )
}

export default List