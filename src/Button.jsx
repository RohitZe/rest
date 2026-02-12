const Button = ({ label='hello jii', onClick, disabled = false, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-testid="custom-button"
    >
      {label}
    </button>
  );
};

export default Button;
