/* eslint-disable react/prop-types */
export function SingleInput({ label, type, onChange, name, value }) {
  return (
    <>
      <label>{label}</label>
      <input onChange={onChange} name={name} type={type} value={value} />
    </>
  );
}
