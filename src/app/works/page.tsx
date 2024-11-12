"use client";
import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  console.log("このページじゃないかな");

  const projects = [
    {
      title: "):スレッドアプリ:(",
      thumbnail: "/images/threads.png",
      link: "threads",
    },
    {
      title: "):書籍レビューアプリ:(",
      thumbnail: "/images/bookreview.png",
      link: "bookreview",
    },
    {
      title: "):レシートバトルアプリ:(",
      thumbnail: "/images/receptBattle.png",
      link: "receiptbattle",
    },
    {
      title: "):塾の予定管理アプリ:(",
      thumbnail: "/images/juku.png",
      link: "manageclass",
    },
    {
      title: "):PictLog:(",
      thumbnail: "/images/pictlog/home.png",
      link: "pictlog",
    },
    {
      title: "):LuggPal:(",
      thumbnail: "/images/luggpal/home.png",
      link: "luggpal",
    },
    {
      title: "):しりとりすごろくゲーム:(",
      thumbnail: "/images/shiritorisugoroku/home.png",
      link: "shiritorisugoroku",
    },
    {
      title: "comming soon...",
      thumbnail: "/images/noise.gif",
      link: "comingsoon1",
    },
    {
      title: "comming soon...",
      thumbnail: "/images/noise.gif",
      link: "comingsoon2",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 pt-20">
      {projects.map((project) => (
        <Link key={project.link} href={`/works/${project.link}`} rel="noopener noreferrer" className="relative group block overflow-hidden transition-transform transform hover:scale-125 hover:z-100">
          <Image src={project.thumbnail} alt={project.title} width={2400} height={1600} className="w-full h-60 object-cover" />
          <p className="font-dot text-xl mb-4">{project.title}</p>
        </Link>
      ))}
    </div>
  );
}
