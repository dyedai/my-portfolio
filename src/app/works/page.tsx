export default function WorksPage() {
  const projects = [
    {
      title: "プロジェクト1",
      thumbnail: "/path/to/thumbnail1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "プロジェクト2",
      thumbnail: "/path/to/thumbnail2.jpg",
      link: "https://example.com/project2",
    },
    {
      title: "プロジェクト3",
      thumbnail: "/path/to/thumbnail3.jpg",
      link: "https://example.com/project3",
    },
    {
      title: "プロジェクト4",
      thumbnail: "/path/to/thumbnail4.jpg",
      link: "https://example.com/project4",
    },
    {
      title: "プロジェクト5",
      thumbnail: "/path/to/thumbnail5.jpg",
      link: "https://example.com/project5",
    },
    {
      title: "プロジェクト6",
      thumbnail: "/path/to/thumbnail6.jpg",
      link: "https://example.com/project6",
    },
    // 追加のプロジェクトをここに追加
  ];
  return (
    // <div className="text-center">
    //   <h1 className="text-4xl mb-4">My Works</h1>
    //   <p>This is the works page. Showcase your projects here.</p>
    // </div>
    <div className="grid grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 border-4 border-gray-800 bg-gray-900"
        >
          <div className="absolute inset-0 border-4 border-gray-700 rounded-lg p-2">
            <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover rounded-lg" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}
