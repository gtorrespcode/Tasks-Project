import { forwardRef } from "react";

const Input = forwardRef(({ textarea, label, ...props }, ref) => {
  const inputStyle =
    "w-full p-1 border-b-2 rounded-sm border-green-300 bg-green-200 text-green-600 focus:outline-none focus:border-green-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className=" text-sm font-bold uppercase text-green-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={inputStyle} />
      ) : (
        <input ref={ref} {...props} className={inputStyle} />
      )}
    </p>
  );
});

export default Input;
