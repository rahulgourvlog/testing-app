export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input className={`input`} type={type} size={ size} variant={variant}
        onChange={ onChange}  /> 
        <img src={rightLogo} onClick={ rightLogoOnClick} alt={"imga"} style={{width:"15px",height:"15px",}} />
    </div>
  );
};
