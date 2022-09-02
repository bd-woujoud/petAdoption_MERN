
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import GestionArticle from './components/Article';
import ListUser from './components/ListUser';
import Profile from './components/Profil';
import TopBar from './Layouts/TopBar';
import Home from './pages/Home';
import Login from './pages/Login';
import PageArticle from './pages/PageArticle';
import Registre from './pages/Registre';
import ContentUser from './views/ContentUser';
import DashAdmin from './views/DashAdmin';
import DashUser from './views/DashUser';
import PrivateRoute from './HigherOrdercomponent/PrivateRoute';
import PublicRoute from './HigherOrdercomponent/PublicRoute';
import Details from './pages/Details';
import { GetAllPost, selectAddPosts, selectdeletePosts, selectupdatePosts } from './features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import Fiche from './components/Fiche';
import GetAnnonceAdoptant from './components/GetAnnonceAdoptant';
import Demande from './components/Demande';
import Maladie from './pages/Maladie';


function App() {
  const addpost = useSelector(selectAddPosts)
  const update = useSelector(selectupdatePosts)
  const deletes = useSelector(selectdeletePosts)
  const dispatch = useDispatch()
  
  useEffect(() => {
    let dat = {
                
      keyword: ""
    }
    dispatch(GetAllPost(dat))

}, [update, addpost, deletes])


  return (

<>
<Router>
<TopBar/>
<Switch>
<PublicRoute  path="/maladie"  component={Maladie} /> 
<PublicRoute path="/login"  component={Login} /> 
<PublicRoute  path="/register"  component={Registre} />
<PublicRoute path="/article"  component={PageArticle} />
<PublicRoute path="/details"  component={Details} />
<PrivateRoute role={["admin"]}  path="/dashAdmin"  component={DashAdmin} />
<PrivateRoute role={["adoptant"]}  path="/dashuser"  component={DashUser} />
<PrivateRoute role={["adoptant"]} path="/fiche"  component={Fiche} />
<PrivateRoute role={["admin"]} path="/listuser"  component={ListUser} />
<PrivateRoute role={["adoptant"]} path="/profil"  component={Profile} />
<PrivateRoute role={["adoptant","admin"]} path="/content"  component={ContentUser} />
<PrivateRoute role={["adoptant"]} path="/content"  component={GetAnnonceAdoptant} />
<PrivateRoute role={["adoptant"]} path="/demande"  component={Demande} />
<PrivateRoute role={["admin"]} path="/content"  component={GestionArticle} /> 
<PublicRoute  restricted={true} path="/"  component={Home} /> 


</Switch>
</Router>

</>
  
  );
}

export default App;
