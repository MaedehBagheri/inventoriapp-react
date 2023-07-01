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
let result =products;
result =filterSearchTitle(result);
result =sortDate(result);
setFilteredProducts(result)


},[products,sort,search])


const sortHandler =(e)=>{
  setSort(e.target.value)

}

const searchHandler =(e)=>{
  setSearch(e.target.value.trim().toLowerCase());


}


const filterSearchTitle=(array)=>{
 return array.filter((p)=> p.title.toLowerCase().includes(search))
}

const sortDate =(array)=>{
  let sortedProducts =[...array]
  return sortedProducts.sort((a, b) => {
 if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }

    });
}

useEffect(()=>{
if(categories.length){
  localStorage.setItem("products" ,JSON.stringify(products));
}
},[products])

useEffect(()=>{
 if(products.length){
  localStorage.setItem("categories" ,JSON.stringify(categories))
 }
  },[categories])



useEffect(()=>{
const savedProducts=JSON.parse(  localStorage.getItem("products")) || [];
const savedCategories=JSON.parse(  localStorage.getItem("categories")) || [];
setProducts(savedProducts);
setCategories(savedCategories);
},[])

  return (
    <div>
       <div className="bg-slate-800 min-h-screen">
  <Navbar/>
  <div className="container max-w-screen-sm mx-auto p-4">
    <CategoryForm setCategories={setCategories}/>
    <Products categories={categories} setProducts={setProducts}/>
    <Filter 
    searchHandler={searchHandler}
    sort={sort} 
    search={search} 
    products={products}
     sortHandler={sortHandler}/>
    <ProductList products={filteredProducts} setProducts={setProducts} categories={categories}/>
  </div>
       </div>
    </div>
  );
}

export default App;
