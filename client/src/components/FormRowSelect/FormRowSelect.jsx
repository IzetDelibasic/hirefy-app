const FormRowSelect = ({ name, defaultValue, labelText, list = "" }) => {
  return (
    <div>
      <label htmlFor={name}>{labelText || name}</label>
      <select name={name} id={name} defaultValue={defaultValue}>
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
