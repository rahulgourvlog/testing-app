import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import Eye from "./eye.svg"
import { useState } from "react";
// type,
// size,
// variant,
// rightLogo,
// rightLogoOnClick,
// onChange,
function App() {
  const [text,SetText]=useState("");
  const [pass,Setpass]=useState("text");
  
   const handleclick=()=>{
    Setpass(pass==="text"? "password":"text")
   }
  return (
    <div className="container">
      <Input  type={pass} size={"md"} variant={"outline"}  rightLogo={ Eye} onChange={(e)=>{SetText(e.target.value)}} 
     rightLogoOnClick={()=>handleclick()} />

      <Image  src="nature.jpg"   alt={"nature"} borderRadius={"10px"} width={"400px"} height={"400px"} fit={"cover"} />

      <Pagination />
    </div>
  );
}

export default App;
