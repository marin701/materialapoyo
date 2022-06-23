import React from 'react';
import { Route, Routes} from 'react-router-dom'
import {Index} from './start/index';
import { ListProducts } from './products/index';



export const Pages = () => {
  return (
      <>
      <section>
          <Routes>
              <Route path="/" exact element={ <Index /> } />
              <Route path="/products" exact element={ <ListProducts /> } />
          </Routes>
        
      </section>
      </>
  )
}