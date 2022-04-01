import { combineReducers } from "redux";
import { ProductReducers, selectedProductReducers } from "./ProductReducers";

const reducers = combineReducers({
    allproduct: ProductReducers,
    product: selectedProductReducers,
});

export default reducers;