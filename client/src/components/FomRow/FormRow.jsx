export const FormRow = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="mb-4 w-[15rem]">
      <label
        htmlFor={name}
        className="font-normal uppercase font-montserrat text-[14px]"
      >
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue || ""}
        className="w-full bg-gray-800 text-white border-none rounded-lg px-4 py-3"
        required
      />
    </div>
  );
};

export default FormRow;
