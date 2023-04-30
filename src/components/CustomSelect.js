const CustomSelect = ({ label, data, ...props }) => {
  return (
    <div className="formInput">
      <label>{label}</label>
      <select {...props}>
        {data.map((item, index) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
