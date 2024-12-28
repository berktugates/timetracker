import React from "react";
import Sign from "../forms/Sign";

const Register: React.FC = () => {
  return (
    <>
      <div
        id="root"
        className="h-screen bg-[#676279] flex flex-col justify-center items-center"
      >
        <div
          id="division"
          className="bg-[#2b2738] flex flex-col rounded-lg px-4 py-3 md:flex-row md:gap-x-8 lg:w-2/3 lg:py-8 xl:w-1/2"
        >
          <img
            src="/src/assets/timetracker-login.webp"
            alt="register-photo"
            className="w-72 md:h-96 object-cover rounded-lg lg:basis-1/2"
          />
          <div
            id="right-division"
            className=" w-full rounded-b-lg md:flex md:flex-col md:justify-center lg:basis-1/2"
          >
            <h1 className="text-white text-3xl font-medium mb-2 mt-2 xl:text-4xl">
              Create an account
            </h1>
            <h1 className="text-gray-300 text-xs lg:text-sm">
              Already have an account?{" "}
              <a href="/" className="text-[#9684c4] cursor-pointer underline">
                Log in
              </a>
            </h1>
            <Sign isRegister ={true} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
