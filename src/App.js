import CategoryForm from "./components/Category";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import ProductList from "./components/Productlist";
import Products from "./components/Products";
import { useEffect, useState } from "react";
function App() {
  const [categories,setCategories]=useState([]);
  const [products ,setProducts] =useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
  const [sort,setSort] = useState("oldest");
  const [search,setSearch]=useState("");

useEffect(()=>{

},[products,sort,search])


const sortHandler =(e)=>{
  setSort(e.target.value)
  const sortedProducts =[...products]
  return sortedProducts.sort((a, b) => {
      if (e.target.value === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (e.target.value === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
}

const searchHandler =(e)=>{
  setSearch(e.target.value)
const value =e.target.value.trim().toLowerCase();
const filteredProducts=products.filter((p)=>p.title.toLowerCase().includes(value));
setFilteredProducts(filteredProducts)
}





  return (
    <div>
       <div className="bg-slate-800 min-h-screen">
  <Navbar/>
  <div className="container max-w-screen-sm mx-auto p-4">
    <CategoryForm setCategories={setCategories}/>
    <Products categories={categories} setProducts={setProducts}/>
    <ProductList products={filteredProducts} setProducts={setProducts} categories={categories}/>
    <Filter sort={sort} search={search} products={products} />
  </div>
       </div>
    </div>
  );
}

export default App;
