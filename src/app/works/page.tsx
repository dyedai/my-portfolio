"use client";
import Image from "next/image";

export default function WorksPage() {
  const projects = [
    {
      title: "):スレッドアプリ:(",
      thumbnail: "/images/threads.png",
      link: "https://example.com/project1",
    },
    {
      title: "):書籍レビューアプリ:(",
      thumbnail: "/images/bookreview.png",
      link: "https://example.com/project2",
    },
    {
      title: "):レシートバトルアプリ:(",
      thumbnail: "/images/receptBattle.png",
      link: "https://example.com/project3",
    },
    {
      title: "):塾の予定管理アプリ:(",
      thumbnail: "/images/juku.png",
      link: "https://example.com/project4",
    },
    {
      title: "comming soon...",
      thumbnail: "/images/noise.gif",
      link: "https://example.com/project5",
    },
    {
      title: "comming soon...",
      thumbnail: "/images/noise.gif",
      link: "https://example.com/project6",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-4 pt-20">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden transition-transform transform hover:scale-125 hover:z-100"
        >
          <Image src={project.thumbnail} alt={project.title} width={2400} height={1600} className="w-full h-60 object-cover" />
          <p className="font-dot text-xl mb-4">{project.title}</p>
        </a>
      ))}
    </div>
  );
}
