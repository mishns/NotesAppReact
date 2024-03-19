import React from "react";
import styles from "./LoginForm.css";
import { FormField } from "../FormField";
import { Button } from "../Button";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@api/queryClient";
import { invalidateMe, login } from "@api/User";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "@components/Loader";

const loginFormSchema = z.object({
  email: z.string().email("Неверный формат email"),
  password: z.string().min(8, "Пароль не может быть короче пяти символов"),
});
type LoginFormT = z.infer<typeof loginFormSchema>;

export const LoginForm = () => {
  const loginMutation = useMutation(
    {
      mutationFn: ({ email, password }: { email: string; password: string }) =>
        login(email, password),
      onSuccess: invalidateMe,
    },
    queryClient,
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormT>({
    resolver: zodResolver(loginFormSchema),
  });

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit(({ email, password }) => {
        loginMutation.mutate({ email, password });
      })}
    >
      <FormField label="Email" errorMessage={errors.email?.message}>
        <input type="email" {...register("email")} />
      </FormField>
      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input type="password" {...register("password")} />
      </FormField>

      {loginMutation.error && loginMutation.error.message}
      {loginMutation.isPending && <Loader />}
      <Button isLoading={loginMutation.isPending}>Войти</Button>
    </form>
  );
};
