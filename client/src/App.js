import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List/>} />
        <Route path="/hotels/:id" element={<Hotel/>} />
    </Routes>
  );
}

export default App;


// commands used:

// npm install react-router-dom
// https://fontawesome.com/docs/web/use-with/react/
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest
// npm i react-date-range
// npm install --save react date-fns