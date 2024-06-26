"use client";
import { FaGithub, FaLinkedin, FaTwitter, } from "react-icons/fa";
import {socials} from "@/data.json";
import Link from "next/link";

const Socials = ({className, iconStyles}: any) => {
  return (
    <div className={className}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {social.name === "github" && <FaGithub />}
            {social.name === "linkedin" && <FaLinkedin />}
            {social.name === "twitter" && <FaTwitter />}
          </Link>
        );
      })}

    </div>
  )
}

export default Socials