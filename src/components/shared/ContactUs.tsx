"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import {
  Button,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../ui";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z
    .string()
    .regex(/^[0-9\-\+\(\)\s]+$/, { message: "Invalid phone number" })
    .min(10, { message: "Phone number must be at least 10 digits" }),
  email: z.string().email({ message: "Invalid email address" }),
  projectInfo: z
    .string()
    .min(10, { message: "Project information must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const ContactUs = () => {
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectInfo: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    // Mock backend or email handler
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setLoading(false);
      toast({
        description:
          "Your message has been sent.Our Team will contact you within 4 working days",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to send the message. Please try again.",
      });
      form.reset();
      setLoading(false);
    }
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
      <div className="px-4 lg:px-0 lg:container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8" data-aos="fade-up">
          Contact Us
        </h1>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Name and Phone */}
            <div
              className="flex flex-col lg:flex-row gap-4 lg:gap-16"
              data-aos="fade-up"
            >
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

            {/* Email and Project Info */}
            <div
              className="flex flex-col lg:flex-row gap-4 lg:gap-16"
              data-aos="fade-up"
            >
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
                    <FormLabel>Your Message*</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Info" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              data-aos="fade-up"
              className=" w-full cursor-pointer"
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" />}
              Send Message
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ContactUs;
