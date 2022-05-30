import{render,screen} from "@testing-library/react";
import { Image } from "../Components/Image";
describe("to check testing of image",()=>{
it("image must have src",()=>{
    render(<Image src={"nature.jpg"} alt={"nature"} ></Image>);
    const image=screen.getByTestId("imge");
    expect(image).toHaveAttribute("src","nature.jpg");
    expect(image).toHaveAttribute("alt","nature");

})

it("image must have borderradius",()=>{
    render(<Image style={{borderRadius:"10px"}}  ></Image>);
    const image=screen.getByTestId("imge");
    expect(image.style.borderRadius).toBeTruthy();
  

})
// width:`${width}`, height:`${height}`, fit:`${fit}
//width={"400px"} height={"400px"} fit={"cover"}
it("image must have width",()=>{
    render(<Image style={{width:"400px"}}  ></Image>);
    const image=screen.getByTestId("imge");
    expect(image).toHaveAttribute("width", "400px");
  

})
it("image must have height",()=>{
    render(<Image style={{ height:"400px"}}  ></Image>);
    const image=screen.getByTestId("imge");
    expect(image).toHaveAttribute("width", "400px");
  

})
it("image must have proper bg property",()=>{
    render(<Image style={{ fit:"cover"}}  ></Image>);
    const image=screen.getByTestId("imge");
    expect(image.style.fit).toBeTruthy();
  

})
})