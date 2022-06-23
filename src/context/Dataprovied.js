import React, { createContext, useEffect, useState } from "react";
import Data from './Data.js';

export const Datacontext = createContext();

export const Dataprovied = (props) => {

    const [Products, setProducts] = useState([]);

    const [menu, setMenu] = useState(false);

    const [Cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);



    useEffect(() => {

        const product = Data.items;
        if (product) {
            
            setProducts(product)
        }else{
            setProducts([])
        }
    }, []);


    const addCart = (id) => {

        const check = Cart.every(item => {
            return item.id !== id;
        });
        if (check) {
            const Data = Products.filter(product => {
                return product.id === id;
            });
            setCart([...Cart, ...Data]);
        }else{
            alert("el articulo ya ha sido añadido al carrito")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart){
            setCart(dataCart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(Cart))
    }, [Cart])
    

    useEffect(() => {
        const Total = () => {
            const r = Cart.reduce((prev, item) => {
                return prev + (item.price * item.cantidad)
            },0)
            setTotal(r);
        }
        Total()
    }, [Cart])
    
    

    const value = {
        Products: [Products],
        menu: [menu,setMenu],
        addCart: addCart,
        Cart: [Cart, setCart],
        total: [total, setTotal]
    };

    return(
        <Datacontext.Provider value={value}>
            {props.children}
        </Datacontext.Provider>
    )

};
