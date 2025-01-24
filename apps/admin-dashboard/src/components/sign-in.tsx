import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl
} from "@/components/ui/form";
import { Input } from "./ui/input";

import { useNavigate } from "react-router";

export default function SignIn() {
  const signinWithEmailSchema = z.object({
    email: z.string().email()
  });

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signinWithEmailSchema>>({
    resolver: zodResolver(signinWithEmailSchema),
    defaultValues: {
      email: ""
    }
  });

  async function onSubmit(values: z.infer<typeof signinWithEmailSchema>) {
    const body = new URLSearchParams();
    body.append("email", values.email);

    const request = await fetch("http://localhost:8080/api/auth/login/email", {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    if (!request.ok) {
      console.log("request not okay");
    }

    navigate("/auth/check-email");
  }

  React.useEffect(() => {
    window.document.title = "Sign in";
  }, []);

  return (
    <div>
      <h1>Sign In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sign In with Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="JaneDoe@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Sign In</Button>
        </form>
      </Form>
    </div>
  );
}
