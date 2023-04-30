const ErrorMessage = ({ errors, field }) => {
  return (
    <p className="errorMessage">
      {errors.includes(field) && <span>&#9888; This field is required</span>}
    </p>
  );
};

export default ErrorMessage;
