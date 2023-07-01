const ProductList =({products,categories, setProducts})=>{



const deleteProduct=(id)=>{
const filteredProducts =products.filter((c)=> c.id !== id);
setProducts(filteredProducts)
}

    return(
        <div>
            <h2>Product list</h2>
            <div className="overflow-x-auto">

            {
                products.map((product) =>{
                    return <div key={product.id} className="flex overflow-x-auto items-center justify-between mb-2 w-full min-w-[400px]">
                    <span className="text-slate-400">{product.title}</span>
                    <div className="flex items-center gap-x-3">
                      <span className="text-slate-400">{new Date(product.createdAt).toLocaleDateString("fa-IR")}</span>
                    
                      <span
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
                         {product.quantity}
                        </span>
                      <button onClick={()=>deleteProduct(product.id)}
                      className="delete-product border px-2 py-o.5 rounded-2xl border-red-400 text-red-400 delete-product" 
                     >delete</button>
                    </div>
                  </div>;
                })
            }
            </div>
        </div>
    )
}
export default ProductList;