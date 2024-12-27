import React, { useState } from "react";
import { Button, Input } from "antd";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div
        id="root"
        className="h-screen bg-indigo-200 flex justify-center items-center"
      >
        <div
          id="division"
          className="bg-indigo-300 rounded-lg mx-4 px-4 py-8 shadow-md"
        >
          <h1 className="text-2xl font-semibold text-center opacity-65">
            Sign In
          </h1>
          <div id="form-login" className="mt-4">
            <form action="">
              <label htmlFor="email" className="font-medium opacity-65">
                Email
              </label>
              <Input id="email" type="email" className="mb-3" value={email} onChange={(e)=> setEmail(e.target.value)} />
              <label htmlFor="password" className="font-medium opacity-65">
                Password
              </label>
              <Input id="password" type="password" className="mb-3" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </form>
            <div
              id="buttons"
              className="flex flex-col items-center mt-4 gap-y-1"
            >
              <Button
                className="bg-indigo-600 hover:bg-indigo-700"
                htmlType="submit"
                type="primary"
              >
                Sign In
              </Button>
              <span className="text-sm opacity-65">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-500">
                  Sign up
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
