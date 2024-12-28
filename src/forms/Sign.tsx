import { Button, Checkbox, Input } from "antd";
import React, { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { ISign } from "../models/ISign";

const Sign: React.FC<ISign> = ({ isRegister }) => {
  const [user, setUser] = useState<ISign>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

  return (
    <>
      <div id="form-division" className="mt-6">
        <form action="" className="flex flex-col gap-y-4">
          <Input
            type="text"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={`bg-[#2b2738] border text-[#676279] border-[#676279] placeholder:text-[#777582] hover:bg-[#221f2c] hover:border-[#676279] md:h-10`}
            placeholder="Email"
          />
          <div className="relative">
            <Input
              type={isEyeOpen ? "text" : "password"}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className={`bg-[#2b2738] border text-[#676279] border-[#676279] placeholder:text-[#777582] hover:bg-[#221f2c] hover:border-[#676279] md:h-10`}
              placeholder="Password"
            />
            {isEyeOpen ? (
              <>
                <EyeClosed
                  className="absolute top-1 md:top-1.5 right-2"
                  color={"#676279"}
                  size={25}
                  onClick={() => setIsEyeOpen(false)}
                />
              </>
            ) : (
              <>
                <Eye
                  className="absolute top-1 md:top-1.5 right-2"
                  color={"#676279"}
                  size={25}
                  onClick={() => setIsEyeOpen(true)}
                />
              </>
            )}
          </div>
          {isRegister && (
            <div className="relative">
              <Input
                type={isEyeOpen ? "password" : "text"}
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                className={`bg-[#2b2738] border text-[#676279] border-[#676279] placeholder:text-[#777582] hover:bg-[#221f2c] hover:border-[#676279] md:h-10`}
                placeholder="Confirm Password"
              />
              {isEyeOpen ? (
                <>
                  <EyeClosed
                    className="absolute top-1 md:top-1.5 right-2"
                    color={"#676279"}
                    size={25}
                    onClick={() => setIsEyeOpen(false)}
                  />
                </>
              ) : (
                <>
                  <Eye
                    className="absolute top-1 md:top-1.5 right-2"
                    color={"#676279"}
                    size={25}
                    onClick={() => setIsEyeOpen(true)}
                  />
                </>
              )}
            </div>
          )}
        </form>
        {isRegister && (
          <div className="flex items-center gap-x-3 mt-4">
            <Checkbox className="" />
            <span className="text-white text-xs">
              I agree to the{" "}
              <a href="#" className="text-[#9684c4] cursor-pointer underline">
                Terms & Conditions
              </a>
            </span>
          </div>
        )}
        <div className="flex justify-center mt-4">
          <Button
            color="danger"
            type="default"
            ghost={true}
            htmlType="submit"
            className="w-full bg-[#6e54b5] border border-[#6e54b5] text-white hover:bg-[#6041b5] md:h-10"
          >
            Create Account
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sign;
