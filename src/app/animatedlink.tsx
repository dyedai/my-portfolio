import React, { FC, useState, useEffect } from "react";
import Link from "next/link";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

interface AnimatedLinkProps {
  href: string;
  english: string;
  japanese: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AnimatedLink: FC<AnimatedLinkProps> = ({ href, english, japanese, className }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={href}
      className="relative inline-block text-2xl font-semibold text-white"
      onMouseEnter={() => {
        if (isDesktop) setHovered(true);
      }}
      onMouseLeave={() => {
        if (isDesktop) setHovered(false);
      }}
    >
      <span className={`transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}>{english}</span>
      <span className={`absolute transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>{japanese}</span>
    </Link>
  );
};

export default AnimatedLink;
