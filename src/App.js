import './App.css';
import React from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from 'react';
// import FormOne from './Component/AllForm/FormOne';
// import FormTwo from './Component/AllForm/FormTwo';
// import FormThree from './Component/AllForm/FormThree';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Summary from './Component/Summary/Summary';
import Dashboard from './Component/Dashboard/Dashboard';
import Navigation from './Component/Navigation/Navigation';
import CustomCarousel from './Component/Carousel/CustomCarousel';
import Courses from './Component/Courses/Courses';
import { useState } from 'react';
import Footer from './Component/Footer/Footer';
// import { Carousel } from 'react-bootstrap';
// import { FirstAction } from './State/Action/FirstAction';

function App() {
  const [show, setShow] = useState(false);
  // const [data, setData] = useState("");
  // const selector = useSelector((state) => state.FirstReducer);
  // const dispatch = useDispatch();
  // const handleDispatch = () => {
  //   dispatch(FirstAction(data));
  //   dispatch({ type: "ADD_USER", payload: data });
  //   document.getElementById("input").value = "";
  //   setData("");
  // }
  return (
    // <div className="App">
    //   <input
    //     type="text"
    //     onChange={(e) => setData(e.target.value)}
    //     id="input"
    //     value={data}
    //   />
    //   <button onClick={handleDispatch}>Dispatch</button>
    //   {selector.map((item, index) => {
    //     return (
    //       <section key={index}>
    //         <h1>{item}</h1>
    //       </section>
    //     );
    //   })}
    // </div>
    <div className='App'>
      {/* <h1>App</h1> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormOne />} />
          <Route path="/formtwo" element={<FormTwo />} />
          <Route path="/formthree" element={<FormThree />} />
          <Route path="/Summary" element={<Summary />} />
        </Routes>
      </BrowserRouter> */}
      <button onClick={() => setShow(!show)}>Dashboard</button>
      {show && <Dashboard />}
      <hr></hr>
      <Navigation />
      <hr></hr>
      <CustomCarousel />
      <hr></hr>
      <Courses />
      <hr></hr>
      <Footer />
    </div >
  );
};

export default App;