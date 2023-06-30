

const Filter =({searchHandler,sortHandler,search,sort})=>{




    return(
<>
<div className="flex items-center justify-between mb-6">
            <label htmlFor="search-input" className="text-slate-500 text-lg">search</label>
            <input 
              value={search}
              onChange={searchHandler}
            type="text" name="search-input" id="search-input"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label htmlFor="sort-products" className="text-slate-500 text-lg">sort</label>
            <select
            value={sort}
            onChange={sortHandler}
            name="sort-products" id="sort-products" className="bg-transparent text-slate-400 rounded-xl">
              <option className="bg-slate-500 text-slate-300" value="">select a category</option>
              <option className="bg-slate-500 text-slate-300" selected value="newest">newest</option>
              <option className="bg-slate-500 text-slate-300" value="oldest">oldest</option>
            </select>
          </div>
</>
    )
}

export default Filter;