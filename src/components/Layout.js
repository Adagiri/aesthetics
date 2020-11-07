import React, {  Suspense } from "react";
 import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
  import Loader from 'react-loader-spinner';
import LayoutStyles from "./Layout.module.scss";
import Footer from "./Footer"
import MapForm from "./MapForm";
import ScrollToTop from "react-scroll-up"
import Logo from "./logo.svg";
import Logo1 from "../images/a.svg"
import Toggle from "../components/Toggle"
import ErrorBoundary from "./ErrorBoundary";
import { useStateValue,  } from "./StateProvider";
import firebase from "gatsby-plugin-firebase"



function Layout(props) {

 
  const [ {marbles} , dispatch] = useStateValue();

 React.useEffect(() => {
   var landmarks = Promise.all([
    firebase.firestore().collection("marbles")
       .get()
       .then(function (querySnapshot) {
         dispatch({
 type: "SET_MARBLES",
 marbles: querySnapshot.docs.map((doc, index) => {
      return {thumbnail: doc.data().files.src, original: doc.data().files.src, description: "marble"} } )
})
       }),
       firebase.firestore().collection("gallery")
       .get()
       .then(function (querySnapshot) {
         dispatch({
           type: "SET_GALLERY",
           gallery:  querySnapshot.docs.map((doc, index) => doc.data().files.src )
         })
       }),

       firebase.firestore().collection("services")
       .get()
       .then(function (querySnapshot) {
         dispatch({
           type: "SET_SERVICES",
           services: querySnapshot.docs.map((doc, index) => {
            return {src: doc.data().files.src, title: doc.data().name} } )
         })
       })
    
 ]);

//  return () => {
//    landmarks()
//  }
 }, [])


  return (
    
    <div className={LayoutStyles.layout}>

    <div className={LayoutStyles.logoToggle}>
    <div>
      <img src={Logo1} />
    </div>
    <div>
      <Toggle />
    </div>
  </div>
    <ScrollToTop style={{zIndex: 10000}} showUnder={160}>
  <img style={{width: 45, zIndex: 1000000}} src={Logo} />
</ScrollToTop>
      {props.children}
      <MapForm />
      <Footer />
    </div>
  )
}

export default Layout











// import React, {  Suspense } from "react";
//  import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
//   import Loader from 'react-loader-spinner';
// import LayoutStyles from "./Layout.module.scss";
// import Footer from "./Footer"
// import MapForm from "./MapForm";
// import ScrollToTop from "react-scroll-up"
// import Logo from "./logo.svg";
// import Logo1 from "../images/a.svg"
// import Toggle from "../components/Toggle"
// import ErrorBoundary from "./ErrorBoundary";
// import { useStateValue,  } from "./StateProvider";
// import firebase from "gatsby-plugin-firebase"



// function Layout(props) {

 
//   const [ {marbles} , dispatch] = useStateValue();

//  React.useEffect(() => {
//    var landmarks = Promise.all([
//     firebase.firestore().collection("marbles")
//        .get()
//        .then(function (querySnapshot) {
//          dispatch({
//  type: "SET_MARBLES",
//  marbles: querySnapshot.docs.map((doc, index) => {
//       return {thumbnail: doc.data().files.src, original: doc.data().files.src, description: "marble"} } )
// })
//        }),
//        firebase.firestore().collection("gallery")
//        .get()
//        .then(function (querySnapshot) {
//          dispatch({
//            type: "SET_GALLERY",
//            gallery:  querySnapshot.docs.map((doc, index) => doc.data().files.src )
//          })
//        }),

//        firebase.firestore().collection("services")
//        .get()
//        .then(function (querySnapshot) {
//          dispatch({
//            type: "SET_SERVICES",
//            services: querySnapshot.docs.map((doc, index) => {
//             return {src: doc.data().files.src, title: doc.data().name} } )
//          })
//        })
    
//  ]);

// //  return () => {
// //    landmarks()
// //  }
//  }, [])


//   return (
    
//     <div className={LayoutStyles.layout}>
//     <ErrorBoundary>
//     <Suspense fallback={ <Loader
//          type="Puff"
//          color="#00BFFF"
//          height={100}
//          width={100}
//          timeout={3000} //3 secs
 
//       />}>

//     <div className={LayoutStyles.logoToggle}>
//     <div>
//       <img src={Logo1} />
//     </div>
//     <div>
//       <Toggle />
//     </div>
//   </div>
//     <ScrollToTop style={{zIndex: 10000}} showUnder={160}>
//   <img style={{width: 45, zIndex: 1000000}} src={Logo} />
// </ScrollToTop>
//       {props.children}
//       <MapForm />
//       <Footer />
//     </Suspense>
//     </ErrorBoundary>
//     </div>
//   )
// }

// export default Layout

