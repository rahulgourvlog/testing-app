export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
      <img   data-testid={"imge"} src={src}
      alt={alt} style={{borderRadius:`${borderRadius}`, width:`${width}`, height:`${height}`, fit:`${fit}`}}  />
    </div>
    
  );
};
 