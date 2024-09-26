import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  console.log("このページではないな");

  return (
    <div className="text-center">
      <div className="flex items-center gap-20 justify-center">
        <Link href={"https://twitter.com/___daidai__"}>
          <Image src="/images/logo-white.png" alt="x-logo-white" width={100} height={100} />
        </Link>
        <Link href={"https://github.com/dyedai"}>
          <Image src="/images/github-mark-white.svg" alt="x-logo-white" width={100} height={100} />
        </Link>
        <Link href={"https://twitter.com/___daidai__"}>
          <Image src="/images/logo-white.png" alt="x-logo-white" width={100} height={100} />
        </Link>
      </div>
    </div>
  );
}
