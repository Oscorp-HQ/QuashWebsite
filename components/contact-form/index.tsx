"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { PostContact } from "@/services";
import { useToast } from "@/components/ui/use-toast";

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
  number: z.z
    .string()
    .max(10, {
      message: "Must be a valid mobile number.",
    })
    .min(10, {
      message: "Must be a valid mobile number.",
    }),
});

export function DemoRequestForm({ setFormSubmitted }: any) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const { toast } = useToast();

  const SendUserData = async () => {
    setShowLoader(true);
    const data = {
      name: name,
      email: email,
      companyName: company,
      phoneNumber: number,
    };

    try {
      const response = await PostContact(data);
      const { success } = response;
      if (success) setFormSubmitted(true);
      setShowLoader(false);
    } catch (e) {
      // what to do in case of api call failure??
      toast({
        description: "Something went wrong.",
      });
      setShowLoader(false);
    }
  };

  useEffect(() => {
    if (name && email && company && number) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
    console.log("states are", name, company, email, number);
  }, [name, company, email, number]);

  //Define your form.
  const form = useForm<z.infer<any>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      companyName: "",
      email: "",
      number: "",
    },
  });

  //Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    SendUserData();
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
                    className=" demo-input placeholder:text-black/30"
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
                    className=" demo-input placeholder:text-black/30"
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
                    className=" demo-input placeholder:text-black/30"
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
                    placeholder="1234567890"
                    {...field}
                    className=" demo-input placeholder:text-black/30"
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
          className={`demo-submit disabled:bg hover:bg-gray-100 ${
            !isEmpty ? "bg-white " : "bg-white cursor-not-allowed"
          } `}
        >
          {showLoader && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
