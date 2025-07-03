const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={(e) => {
        onClick(e, "de mon choix");
      }}
    >
      {children}
    </button>
  );
};

export default Button;
