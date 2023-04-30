const CustomInput = ({ type, label, placeholder, ...props }) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...props} />
    </div>
  );
};

export default CustomInput;
