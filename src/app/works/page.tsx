"use client";
import Image from "next/image";
import Link from "next/link";

export default function WorksPage() {
  console.log("このページじゃないかな");

  const WebProjects = [
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
  ];

  const AIProjects = [
    {
      title: "[Aqualium]",
      thumbnail: "/images/AI-aqua/aqua-6.jpg",
      link: "aqua",
    },
    {
      title: "[Bidouilleur]",
      thumbnail: "/images/AI-bidouilleur/bidouilleur-2.jpg",
      link: "bidouilleur",
    },
    {
      title: "[Syuji]",
      thumbnail: "/images/AI-syuji/syuji-4.jpg",
      link: "syuji",
    },
    {
      title: "[Trash]",
      thumbnail: "/images/AI-trash/trash-1.jpg",
      link: "trash",
    },
  ];

  const GameProjects = [
    {
      title: "comming soon...",
      thumbnail: "/images/noise.gif",
      link: "comingsoon",
    },
  ];

  const CGProjects = [
    {
      title: "comming soon...",
      thumbnail: "/images/noise.gif",
      link: "comingsoon",
    },
  ];

  return (
    <div className="flex-col">
      <h2 className="text-3xl mb-6 px-6 lg:px-0 lg:text-4xl rainbow-text pt-20">
        &lt;WebApp/&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 pb-10">
        {WebProjects.map((WebProject) => (
          <Link
            key={WebProject.link}
            href={`/works/web/${WebProject.link}`}
            rel="noopener noreferrer"
            className="relative group block overflow-hidden transition-transform transform hover:scale-125 hover:z-100"
          >
            <Image
              src={WebProject.thumbnail}
              alt={WebProject.title}
              width={2400}
              height={1600}
              className="w-full h-60 object-cover"
            />
            <p className="font-dot text-xl mb-4">{WebProject.title}</p>
          </Link>
        ))}
      </div>

      <hr className="w-11/12 mx-auto" />

      <h2 className="text-3xl mb-6 px-6 lg:px-0 lg:text-4xl rainbow-text pt-10">
        &lt;AI:Art/&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 pb-10">
        {AIProjects.map((AIProject) => (
          <Link
            key={AIProject.link}
            href={`/works/ai/${AIProject.link}`}
            rel="noopener noreferrer"
            className="relative group block overflow-hidden transition-transform transform hover:scale-125 hover:z-100"
          >
            <Image
              src={AIProject.thumbnail}
              alt={AIProject.title}
              width={2400}
              height={1600}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </div>

      <hr className="w-11/12 mx-auto" />

      <h2 className="text-3xl mb-6 px-6 lg:px-0 lg:text-4xl rainbow-text pt-10">
        &lt;CG:Art/&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 pb-10">
        {CGProjects.map((CGProject) => (
          <Link
            key={CGProject.link}
            href={`/works/cg/${CGProject.link}`}
            rel="noopener noreferrer"
            className="relative group block overflow-hidden transition-transform transform hover:scale-125 hover:z-100"
          >
            <Image
              src={CGProject.thumbnail}
              alt={CGProject.title}
              width={2400}
              height={1600}
              className="w-full h-60 object-cover"
            />
            <p className="font-dot text-xl mb-4">{CGProject.title}</p>
          </Link>
        ))}
      </div>

      <hr className="w-11/12 mx-auto" />

      <h2 className="text-3xl mb-6 px-6 lg:px-0 lg:text-4xl rainbow-text pt-10">
        &lt;Game/&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 pb-10">
        {GameProjects.map((GameProject) => (
          <Link
            key={GameProject.link}
            href={`/works/game/${GameProject.link}`}
            rel="noopener noreferrer"
            className="relative group block overflow-hidden transition-transform transform hover:scale-125 hover:z-100"
          >
            <Image
              src={GameProject.thumbnail}
              alt={GameProject.title}
              width={2400}
              height={1600}
              className="w-full h-60 object-cover"
            />
            <p className="font-dot text-xl mb-4">{GameProject.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
