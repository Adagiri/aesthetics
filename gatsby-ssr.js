import React from "react";
import "firebase/firestore";
import {StateProvider} from "./src/components/StateProvider";
import { initialState, reducer } from './src/components/reducer';
import Layout from "./src/components/Layout";


// export const wrapPageElement = ({ element, props }) => {

//   return <Layout {...props}>{element}</Layout>
// }

export const wrapRootElement = ({ element }) => (
  <StateProvider initialState={initialState} reducer={reducer}>{element}</StateProvider>
)