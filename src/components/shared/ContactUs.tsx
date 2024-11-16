"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form"; // Use FormProvider here
import { z } from "zod";
import {
  Button,
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../ui";
import { Paperclip } from "lucide-react";

// Define schema with Zod for validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.number().min(10, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email" }),
  projectInfo: z.string().min(1, { message: "Project Info is required" }),
  checkbox: z.boolean().refine((val) => val, {
    message: "You must agree to receive updates.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const ContactUs = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: undefined,
      email: "",
      projectInfo: "",
      checkbox: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted", data);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/17573602/pexels-photo-17573602/free-photo-of-hand-touching-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        {/* Wrap the form with FormProvider to provide context */}
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-16">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex  gap-16 mt-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectInfo"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Project Info (Budget if avail.)*</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Info" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center gap-16 mt-8">
              <div className="flex gap-4 w-full">
                <Paperclip className="text-amber-500 w-6 h-6" />
                <div>
                  <p className="text-sm">Attach your file</p>
                  <p className="text-gray-500 pt-2">up to 20MB</p>
                </div>
              </div>

              <div className="w-full">
                <p className="text-xs text-gray-500">
                  We will process your personal information in accordance with
                  our <a className="text-amber-500">Privacy Policy</a>.
                </p>
                <FormField
                  control={form.control}
                  name="checkbox"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex gap-2 w-full mt-2">
                        <FormControl>
                          <Checkbox {...field} />
                        </FormControl>
                        <FormLabel className="text-xs text-gray-500">
                          I would like to be contacted with news and updates
                          about your events and services
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="w-full mt-8">
              <Button type="submit" className="bg-zinc-700 w-full">
                Send Message
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactUs;
