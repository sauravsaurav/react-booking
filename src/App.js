import './App.css';
import React, { Suspense, useEffect } from 'react';
import { Route,  Routes } from 'react-router-dom';
import Header from './components/UI/Header';
import Loader from './components/UI/Loader';
import { useSelector , useDispatch } from 'react-redux';
import Snackbar from './components/UI/Snackbar';
import { animationActions } from './store/animationConfig';

const Hall = React.lazy(()=>import('./components/Booking/Hall'));
const Movie = React.lazy(()=>import('./components/Movie/Movie'));
const Checkout = React.lazy(()=>import('./components/Checkout/Checkout'));
const NotFound = React.lazy(()=>import("./components/NotFound"));


function App() {
  const dispatch = useDispatch();
  const animationIsProcessing = useSelector(state=>state.animation.processing);
  const totalAnimationTrack = useSelector(state => state.animation.totalAnimation);
  const currentAnimationTrack = useSelector(state => state.animation.currentAnimation);
  useEffect(()=>{
    if(totalAnimationTrack === currentAnimationTrack){
      dispatch(animationActions.resetTrack());
      dispatch(animationActions.disabledProcessing());
    }else{
      dispatch(animationActions.enableProcessing());
    }
  },[totalAnimationTrack,currentAnimationTrack, dispatch])

  

  return (
    <div className="mainContainer">
     <div className="wave"></div>
     <div className="wave"></div>
     <div className="wave"></div>
      <Header/>
          {animationIsProcessing && <Snackbar message="Please wait..."/>}
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Movie/>}/>
              <Route path="/booking" element={<Hall/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </Suspense>
    </div> 
  );
}

export default App;
