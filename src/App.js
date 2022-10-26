import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { orginals,action,Romance,Comedy,Horror,Documentary } from "./url";
import "./App.css"
import Banner from "./Components/banner/Banner";
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {
return(
<div>
  <Navbar/>
  <Banner/>
  <Rowpost url={orginals} title='Netflix Orginals'/>
  <Rowpost  url={action}  title='Action' isSmall/>
  <Rowpost url={Romance} title='Romance' isSmall/>
  <Rowpost url={Comedy} title='Comedy' isSmall/>
  <Rowpost url={Horror} title='Horror' isSmall/>
  <Rowpost url={Documentary} title='Documentary' isSmall/>
</div>
);
}

export default App;
