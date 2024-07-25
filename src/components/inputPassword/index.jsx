import CloseEyeSvg from "../../components/closeEyeSvg";
import EyeSvg from "../../components/eyeSvg";
import { useState } from "react";
export default function InputPassword({ value, onChange, name, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className=" w-full bg-white rounded-xl border border-black flex pr-2">
      <input
        type={showPassword ? "text" : "password"}
        className=" w-full bg-transparent p-2 rounded-xl focus:outline-none"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      {showPassword ? (
        <EyeSvg
          onClick={handleShowPassword}
          className={
            "stroke-neutral-500 cursor-pointer hover:stroke-black ease-in-out duration-300"
          }
        />
      ) : (
        <CloseEyeSvg onClick={handleShowPassword} />
      )}
    </div>
  );
}
