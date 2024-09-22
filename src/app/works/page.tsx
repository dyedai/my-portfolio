"use client";

export default function WorksPage() {
  const projects = [
    {
      title: "スレッドアプリ",
      thumbnail: "https://github.com/user-attachments/assets/aaea920f-bb56-461a-88d6-644a0bb73a53",
      link: "https://example.com/project1",
    },
    {
      title: "書籍レビューアプリ",
      thumbnail: "https://github.com/user-attachments/assets/241e4d80-b032-4aa6-b53c-18b22a49c8db",
      link: "https://example.com/project2",
    },
    {
      title: "レシートバトルアプリ",
      thumbnail: "https://github.com/user-attachments/assets/a0784ffb-62e0-4055-b4a0-d258807c5ea4",
      link: "https://example.com/project3",
    },
    {
      title: "塾の予定管理アプリ",
      thumbnail: "https://github.com/user-attachments/assets/a9c61104-cda7-4a32-9d30-b541acac3a34",
      link: "https://example.com/project4",
    },
    {
      title: "comming soon...",
      thumbnail: "https://github.com/user-attachments/assets/72cb6af4-da13-427c-ad58-3a49a8c52cf3",
      link: "https://example.com/project5",
    },
    {
      title: "comming soon...",
      thumbnail: "https://github.com/user-attachments/assets/72cb6af4-da13-427c-ad58-3a49a8c52cf3",
      link: "https://example.com/project6",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-20 p-4">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-125 hover:z-100"
        >
          <img src={project.thumbnail} alt={project.title} className="w-full h-60 object-cover" />
        </a>
      ))}
    </div>
  );
}
