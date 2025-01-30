import { useState } from "react";
import supabase from "../helpers/supabaseClient";
import { ISign } from "../models/ISign";
import { useNavigate } from "react-router-dom";

const UseAuth = () => {
  const [user, setUser] = useState<ISign>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignHandler = async (e) => {
    try {
      e.preventDefault();
      if (user.password === user.confirmPassword && isChecked) {
        let { data, error } = await supabase.auth.signUp({
          email: user.email,
          password: user.password,
        });
        if (error) {
          console.log("kullanici olusturulamadi", error.message);
        }
        if (data) {
          console.log("kullanici basariyla olusturuldu");
          setUser({ ...user, email: "" });
          setUser({ ...user, password: "" });
          setUser({ ...user, confirmPassword: "" });
        }
      } else {
        console.log("parolalar uyusmuyor veya maddeler onaylanmadi");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleLoginHandler = async (e) => {
    try {
      e.preventDefault();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      if (error) {
        console.log("giris yapilamadi...", error.message);
      }
      if (data) {
        console.log("basariyla giris yapildi");
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {
    user,
    setUser,
    isEyeOpen,
    setIsEyeOpen,
    isChecked,
    setIsChecked,
    handleSignHandler,
    handleLoginHandler,
  };
};
export default UseAuth;
