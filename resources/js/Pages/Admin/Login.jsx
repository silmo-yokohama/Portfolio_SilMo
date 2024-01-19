import TextInput from "@/Components/Forms/Inputs/TextInput";
import FormLabel from "@/Components/Forms/Typographies/FormLabel";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import GuestLayout from "@/Layouts/GuestLayout";
import NormalLink from "@/Components/Forms/Typographies/NormalLink";

const Login = () => {
  const controls = useAnimation();

  useEffect(() => {
    document.querySelector("html").classList.add("overflow-hidden");
    controls.start({ opacity: 1, top: 0 });
  }, []);
  return (
    <GuestLayout>
      <div className="h-screen overflow-hidden">
        <motion.div
          className="absolute left-0 right-0 overflow-hidden"
          initial={{ opacity: 0, top: "1000px" }}
          animate={controls}
          transition={{
            type: "spring",
            damping: 9,
            delay: 0.6,
          }}
        >
          <div className="relative flex h-screen flex-col justify-center overflow-hidden">
            <div className="m-auto w-11/12 rounded-md bg-base-300 p-3 shadow-md ring-1 ring-base-content lg:max-w-lg">
              <h1 className="text-center text-3xl font-semibold">LOGIN FORM</h1>
              <form className="space-y-4">
                <div>
                  <FormLabel>メールアドレス</FormLabel>
                  <TextInput placeholder="メールアドレス" />
                </div>
                <div>
                  <FormLabel>パスワード</FormLabel>
                  <TextInput placeholder="パスワード" />
                </div>
                <NormalLink>パスワードを忘れた</NormalLink>
                <div className="flex justify-end">
                  <button className="btn btn-outline">Login</button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </GuestLayout>
  );
};

export default Login;
