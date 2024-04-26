const FormRowSelect = ({
  name,
  defaultValue = "",
  labelText,
  list,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] font-montserrat">
      <label htmlFor={name}>{labelText || name}</label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="p-2 border-[1px] border-black"
      >
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
