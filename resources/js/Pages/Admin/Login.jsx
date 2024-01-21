import TextInput from "@/Components/Forms/Inputs/TextInput";
import FormLabel from "@/Components/Forms/Typographies/FormLabel";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import GuestLayout from "@/Layouts/GuestLayout";
import NormalLink from "@/Components/Forms/Typographies/NormalLink";
import { useForm } from "@inertiajs/react";

const Login = (props) => {
  const { errors } = props;
  const controls = useAnimation();
  const form = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    document.querySelector("html").classList.add("overflow-hidden");
    controls.start({ opacity: 1, top: 0 });

    return () => {
      form.reset("password");
    };
  }, []);

  const handlerOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    form.setData(name, value);
  };
  const handlerLogin = (e) => {
    e.preventDefault();

    form.post(route("signin"));
  };

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
              <form className="space-y-4" onSubmit={handlerLogin}>
                <div>
                  <FormLabel>メールアドレス</FormLabel>
                  <TextInput
                    placeholder="メールアドレス"
                    name="email"
                    value={form.data.email}
                    onChange={handlerOnChange}
                    className={errors && errors.email && "input-error"}
                  />
                  {errors && errors.email && (
                    <p className="text-error">{errors.email}</p>
                  )}
                </div>
                <div>
                  <FormLabel>パスワード</FormLabel>
                  <TextInput
                    type="password"
                    placeholder="パスワード"
                    name="password"
                    value={form.data.password}
                    onChange={handlerOnChange}
                    className={errors && errors.password && "input-error"}
                  />
                  {errors && errors.password && (
                    <p className="text-error">{errors.password}</p>
                  )}
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
