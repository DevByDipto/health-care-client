/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "sonner";

const LoginForm = ({redirect}:{redirect:string}) => {                            
  const [state, formAction, isPending] = useActionState(loginUser, null);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  const getFieldError = (fieldName: string) => {
    if (state && state.errors) {
      const error = state.errors.find((err: any) => err.field === fieldName);
      return error.message;
    } else {
      return null;
    }
  };
console.log("state", state);

   useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);
  // console.log(state);
  const demoCredentials = {
  user: {
    email: "user@gmail.com",
    password: "123456",
  },
  doctor: {
    email: "doctor@gmail.com",
    password: "123456",
  },
  admin: {
    email: "admin@gmail.com",
    password: "123456",
  },
};
const handleAutoFill = (role: "user" | "doctor" | "admin") => {
  setEmail(demoCredentials[role].email);
  setPassword(demoCredentials[role].password);
};

  return (
    <form action={formAction}>
      {redirect && <Input
              id="redirect"
              name="redirect"
             value={redirect}
             type="hidden"
            />}
      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
                value={email}
                 onChange={(e) => setEmail(e.target.value)}
              //   required
            />

            {getFieldError("email") && (
              <FieldDescription className="text-red-600">
                {getFieldError("email")}
              </FieldDescription>
            )}
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
                value={password}
                 onChange={(e) => setPassword(e.target.value)}
              //   required
            />
            {getFieldError("password") && (
              <FieldDescription className="text-red-600">
                {getFieldError("password")}
              </FieldDescription>
            )}
          </Field>
        </div>
        <FieldGroup className="mt-4">
          <Field>

<div className="flex gap-2 mb-4">
  <Button type="button" variant="outline" onClick={() => handleAutoFill("user")}>
    User
  </Button>
  <Button type="button" variant="outline" onClick={() => handleAutoFill("doctor")}>
    Doctor
  </Button>
  <Button type="button" variant="outline" onClick={() => handleAutoFill("admin")}>
    Admin
  </Button>
</div>

            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>
            <FieldDescription className="px-6 text-center">
              <a
                href="/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>

    </form>
  );
};

export default LoginForm;
