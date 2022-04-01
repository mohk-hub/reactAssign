import React from 'react'
import { ActionTypes } from "../contants/ActionType";

const intialState = {
    products: [],
}

export const ProductReducers = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload }

        default:
            return state
    }
}

export const selectedProductReducers = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }

        default:
            return state;
    }
}