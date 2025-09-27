import { forwardRef, type InputHTMLAttributes } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <>
      <label className="text-sm md:text-md">{label}</label>
      <input
        className="px-5 w-full h-12 outline outline-black rounded"
        type="text"
        {...props}
      />
    </>
  );
}

export default Input;
