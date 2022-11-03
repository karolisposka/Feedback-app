import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, {useState} from "react";
import { store } from './store/storeConfig';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import {mobileMenuContext} from '../src/context/mobileContext';
import theme from './theme';
import Home from "./pages/Home";
import EditFeedBack from './pages/EditFeedBack';
import NewFeedBack from "./pages/NewFeedBack";
import RoadMap from './pages/RoadMap'
import SingleSuggestion from "./pages/SingleSuggestion";
import SuggestionsLayout from "./components/suggestionsLayout/SuggestionsLayout";
import RoadMapList from "./components/roadMapList/RoadMapList";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Router = () => {


  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

 

  return (
    <BrowserRouter>
    <Provider store={store}>
    <mobileMenuContext.Provider value={[displayMobileMenu, setDisplayMobileMenu]}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<Home />}>
              <Route path=':category' element={<SuggestionsLayout/>}/>
            </Route>
            <Route path='suggestion/:id' element={<SingleSuggestion/>}/>
            <Route exact path='/edit' element={<EditFeedBack/>}/>
            <Route exact path='/new' element={<NewFeedBack/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/roadmap' element={<RoadMap/>}>
              <Route exact path=':category' element={<RoadMapList/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </mobileMenuContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
