import React, {Suspense} from "react";
import "firebase/firestore";
import {StateProvider} from "./src/components/StateProvider";
import { initialState, reducer } from './src/components/reducer';
import "./src/components/Toggle.scss"
import "./src/components/Layout.scss"
import Layout from "./src/components/Layout";
import config from 'react-reveal/globals';
import ErrorBoundary from "./src/components/ErrorBoundary";
import Loader from 'react-loader-spinner';

config({ ssrFadeout: true });


export const wrapPageElement = ({ element, props }) => {

  return <ErrorBoundary>
  <Suspense fallback={ <Loader
       type="Puff"
       color="#00BFFF"
       height={100}
       width={100}
       timeout={3000} //3 secs
  
    />}>
    <Layout {...props}>{element}</Layout>
    </Suspense>
    </ErrorBoundary>
}

export const wrapRootElement = ({ element }) => (
  <StateProvider initialState={initialState} reducer={reducer}>{element}</StateProvider>
)
