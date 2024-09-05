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
import { useState } from "react";
import { toast } from "sonner";

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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const sendMail = (e: any) => {
    e.preventDefault();
    if(firstname === "" || lastname === "" || email === "" || phone === "" || message === "") {
      toast.error("Please fill all the fields.");
      return;
    }
    setLoading(true);
    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, email, phone, message }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        toast.success("Email has been sent successfully.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Unable to send email this time, please try again");
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Fill the below form and I will get back to you as soon as
                possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* text area */}
              <Textarea
                placeholder="Type your message here."
                className="h-[200px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* button */}
              <Button
                size="md"
                className="max-w-40"
                onClick={(e) => sendMail(e)}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] ;g:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
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
