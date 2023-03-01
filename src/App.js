import Home from "./components/routes/home/home-component";
import Nav from "./components/routes/navigation/Nav-component";
import Signin from "./components/routes/signin/Signin-component";

import { Route , Routes  } from "react-router-dom";

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
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
   )
}
 
export default App;