"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data: Record<string, string> = {};
    // // Convert FormData to plain object
    // formData.forEach((value, key) => {
    //   data[key] = value.toString();
    // });
    // alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form
        className="flex w-96 flex-col gap-4 border border-gray-300 p-4 rounded-2xl shadow-2xl"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="text-center">
          <p>If you do not have account</p>
          <p>
            Please{" "}
            <Link className="text-blue-700" href="/auth/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;
