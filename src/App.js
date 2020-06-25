import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {fetchPosts} from './actions'
import VisiblePosts from './containers/visiblePosts'
import './App.css';

const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])

  return(
    <>
      <VisiblePosts />
    </>
  )

}

export default App;
