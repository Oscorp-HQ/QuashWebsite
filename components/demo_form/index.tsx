"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Name must be at least 1 character.",
  }),
  companyName: z.string().min(1, {
    message: "Company Name must be at least 1 character.",
  }),
  email: z.string().email("Please enter correct email format.").min(1, {
    message: "Email must be at least 1 character.",
  }),
  // number: z.optional(
  //   z
  //     .string()
  //     .max(10, {
  //       message: "Must be a valid mobile number.",
  //     })
  //     .min(1, {
  //       message: "Must be a valid mobile number.",
  //     })
  // ),
});

export function DemoRequestForm({ setFormSubmitted }: any) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (name && email && company) {
      setIsEmpty(false);
      console.log(name, company, email);
    }
  }, [name, company, email]);

  //Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      companyName: "",
      email: "",
      // number: "",
    },
  });

  //Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    setFormSubmitted(true);
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:gap-[72px] gap-10"
      >
        <div className="md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-6 flex flex-col gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-required className="demo-label">
                  Name*
                </FormLabel>
                <FormControl
                  onChange={(e: any) => {
                    setName(e.target.value);
                  }}
                >
                  <Input
                    placeholder="Bruce Wayne"
                    {...field}
                    className=" demo-input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-required className="demo-label">
                  Company Name*
                </FormLabel>
                <FormControl
                  onChange={(e: any) => {
                    setCompany(e.target.value);
                  }}
                >
                  <Input
                    placeholder="Quash"
                    {...field}
                    className=" demo-input"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-required className="demo-label">
                  Work Email*
                </FormLabel>
                <FormControl
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                >
                  <Input
                    placeholder="bruce@quash.com"
                    {...field}
                    className=" demo-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel aria-required className="demo-label">
                  Phone
                </FormLabel>
                <FormControl
                  onChange={(e: any) => {
                    setNumber(e.target.value);
                  }}
                >
                  <Input
                    placeholder="Optional"
                    {...field}
                    className=" demo-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          disabled={isEmpty}
          onClick={() => {
            // setFormOpen(false);
          }}
          className={`demo-submit ${
            !isEmpty ? "bg-[#418A30] hover:bg-[#418A30]" : "bg-[#bdddab]"
          } `}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
