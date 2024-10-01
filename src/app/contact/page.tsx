"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 930 542 6444",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "satwikgupta1801@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Varanasi, Uttar Pradesh 221001",
  },
];

const ContactPage = () => {

  const form = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current) {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER_ID!,
          }
        );
        setSubmitSuccess(true);
        toast.success("Email sent successfully.");
      }
    } catch (error) {
      setSubmitSuccess(false);
      console.error(error);
      toast.error("Failed to send email. Please try again later.");
    }

    setIsSubmitting(false);
    (form.current as HTMLFormElement).reset();

    setTimeout(() => setSubmitSuccess(null), 5000);
  };
console.log(process.env.NEXT_PUBLIC_ID, process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Fill the below form and I will get back to you as soon as
                possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  placeholder="First Name"
                />
                <Input
                  name="lastname"
                  placeholder="Last Name"
                />
                <Input
                  name="email"
                  placeholder="Email Address"
                />
                <Input
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <Textarea
                placeholder="Type your message here."
                className="h-[200px]"
                name="message"
              />
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
