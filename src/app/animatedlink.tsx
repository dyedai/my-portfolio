import React, { FC, useState } from "react";
import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  english: string;
  japanese: string;
  children: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimatedLink: FC<AnimatedLinkProps> = ({ href, english, japanese, className }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href} className="relative inline-block text-2xl font-semibold text-white" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span className={`transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}>{english}</span>
      <span className={`absolute transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>{japanese}</span>
    </Link>
  );
};

export default AnimatedLink;
