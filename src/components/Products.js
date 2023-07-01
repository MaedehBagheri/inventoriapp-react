import { useState } from "react"

const Products =({categories,setProducts})=>{

    const[productsFormData,setproductsFormData]=useState({
        title:"",
        quantity:0,
        categoryId:"",
    })



const addNewProduct=(e)=>{
    e.preventDefault();
    const newProduct ={...productsFormData,createdAt: new Date().toISOString(),
        id: new Date().getTime()
        }
        setProducts((prevState)=> [...prevState,newProduct]);
       setproductsFormData({title:"",quantity:"",categoryId:""})
}

    const changeHandler=(e)=>{
        const {name ,value} =e.target;
        console.log(name,value)
       setproductsFormData({...productsFormData,[name]:value});
        }

    return(
        <div className="mb-6">
        <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="product-title" className="block mb-1 text-slate-400">title</label>
            <input type="text"onChange={changeHandler} name="title" id="product-title"value={productsFormData.title}  
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"/>
          </div>
          <div>
            <label htmlFor="product-quantity" className="block mb-1 text-slate-400">quantity</label>
            <input className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
        value={productsFormData.quantity}  onChange={changeHandler}    type="number" name="quantity" id="quantity"/>
          </div>
          <div>
            <label htmlFor="product-category" className="block mb-1 text-slate-400">category</label>
            <select name="categoryId" value={productsFormData.categoryId}  onChange={changeHandler}
              className="bg-transparent text-slate-400 rounded-xl w-full">
                <option className="bg-slate-500 text-slate-300" value="">{categories.title}</option>
                {categories.map((c)=>{
      return <option  key={c.id}  className="bg-slate-500 text-slate-300" value={c.id}>
    {c.title}
</option>

                })}
            </select>
          </div>
          <div className="flex items-center justify-between gap-x-4">
            <button onClick={addNewProduct} className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">Add new
              Product</button>
          </div>
        </form>
      </div>
    )
}

export default Products;