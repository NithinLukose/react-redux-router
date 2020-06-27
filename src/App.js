import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import {fetchPosts} from './actions'
import VisiblePosts from './containers/visiblePosts'
import './App.css';
import Simple from './components/simple'


const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])


  return(
    <Router>
      
      <Link to = '/'>
        <div className="topnav">
          <button href='#posts'>Posts</button>
        </div>
      </Link>
      <Switch>
        
        
        <Route exact path="/">
          <VisiblePosts />

        </Route>
        <Route path={`/posts/:id`}>
          <Simple />
        </Route>
      </Switch>
      
    </Router>
  )

}

export default App;
