import React, { createContext, useContext, useState } from 'react'
import Product from './Product'
const Navbar = () => {
    const [Category, setCategory] = useState("true")
    const [Search, setSearch] = useState("")
    return (
        <div>
            <div className="navAdmin bg-primary p-2  ">
          <nav className="d-flex  ">
            <div className="offset-2 offset-sm-5 col-sm-3 offset-md-7  col-md-2 col-xs-5" >
              <select name="" id="" className="form-control" onChange={
                  (e)=>{
                      setCategory(e.target.value)
                  }
              }>
                  <option value={true}>All</option>
                <option value="electronics" >electronics</option>
                <option  value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
              </select>
            </div>
            <div className="col-5  offset-1 col-sm-3 col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="search product"
                onChange={(e)=>{
                        setSearch(e.target.value)
                }}
              />
            </div>
          </nav>
        </div >
            <Product Cat={Category} Search={Search}/>
       
        </div>
    )
}

export default Navbar
