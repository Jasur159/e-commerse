const Button = ({ children, className, onClick, style }) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
