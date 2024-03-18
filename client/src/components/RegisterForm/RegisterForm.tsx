import React, { FC } from "react";
import { FormField } from "../FormField";
import { Button } from "../Button";
import styles from "./RegisterForm.css";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@api/queryClient";
import { registerUser } from "@api/User";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "@components/Loader";

const registerFormShema = z.object({
  username: z.string().min(5, "Имя не может быть короче пяти символов"),
  email: z.string().email({ message: "Неверный формат email" }),
  password: z.string().min(8, "Пароль не может быть короче восьми символов"),
});
type RegisterFormT = z.infer<typeof registerFormShema>;

export const RegisterForm: FC = () => {
  const registerMutation = useMutation(
    {
      mutationFn: ({
        username,
        email,
        password,
      }: {
        username: string;
        email: string;
        password: string;
      }) => registerUser(username, email, password),
    },
    queryClient,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormT>({
    resolver: zodResolver(registerFormShema),
  });

  return (
    <form
      className={styles.registerForm}
      onSubmit={handleSubmit(({ username, email, password }) => {
        registerMutation.mutate({ username, email, password });
      })}
    >
      <FormField label="Имя" errorMessage={errors.username?.message}>
        <input {...register("username")} />
      </FormField>
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input type="email" {...register("email")} />
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" {...register("password")} />
      </FormField>

      {registerMutation.error && <span>{registerMutation.error.message}</span>}

      <Button isLoading={registerMutation.isPending}>Зарегистрироваться</Button>
      {registerMutation.isPending && <Loader />}
    </form>
  );
};
