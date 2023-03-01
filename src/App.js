import Home from "./components/routes/home/home-component";
import { Route , Routes  } from "react-router-dom";
import Nav from "./components/routes/navigation/Nav-component";

const Shop = () => {
  return(
    <div>
      <h2>i am the shpp</h2>
    </div>
  )
}

const App = () => {
  return ( 
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
   )
}
 
export default App;