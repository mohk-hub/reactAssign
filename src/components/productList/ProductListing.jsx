import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../product/Product'
import { setProducts } from '../../redux/actions/ActionProduct';

export const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProduct();
    }, [])
    console.log("products", products);
    return (
        <>
            <div className="ui grid container mt-5">
                <Product />
            </div>
        </>
    )
}
