import React,{Component} from "react"
import ReactDom from "react-dom"

import App from "./App"
import {BrowserRouter } from "react-router-dom";

//initiate redux
import {createStore}from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
//create store
const store=createStore(rootReducer,composeWithDevTools())
ReactDom.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>



,document.getElementById('root'))