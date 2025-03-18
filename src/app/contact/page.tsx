import Image from "next/image";
import Link from "next/link";
import "../glow.css";

export default function ContactPage() {
  console.log("このページではないな");

  return (
    <div className="rainbow-text">
      <div className="flex justify-center items-center">
        <div className="flex gap-20">
          <Link href={"https://twitter.com/dyedaii"} target="_blank">
            <Image
              src="/images/sns/logo-white.png"
              alt="x-logo-white"
              width={100}
              height={100}
            />
          </Link>
          <Link href={"https://github.com/dyedai"} target="_blank">
            <div className="glow">
              <Image
                src="/images/sns/github-mark-white.svg"
                alt="github-logo-white"
                width={100}
                height={100}
              />
            </div>
          </Link>
          <Link href={"https://twitter.com/dyedaii"} target="_blank">
            <Image
              src="/images/sns/logo-white.png"
              alt="x-logo-white"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
