import React from "react";
import "firebase/firestore";
import 'react-slideshow-image/dist/styles.css'
import "./src/styles/index.css"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-image-lightbox/style.css'; 
import {StateProvider} from "./src/components/StateProvider";
import { initialState, reducer } from './src/components/reducer';
import Layout from "./src/components/Layout";


export const wrapPageElement = ({ element, props }) => {

  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => (
  <StateProvider initialState={initialState} reducer={reducer}>{element}</StateProvider>
)