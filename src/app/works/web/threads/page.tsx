import Image from "next/image";
import "../../../glow.css";

export default function ThreadsPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            &lt;Threads/&gt;
          </h1>
          <p className="mx-2">
            Threadアプリは、ユーザーがスレッドを作成し、そのスレッドにコメントを追加したり、他のユーザーが作成したスレッドを閲覧し、コメントを残すことができるアプリです。このアプリは、特定のトピックについて意見交換や議論ができる場を提供することを目的としています。
            アプリの特徴として、まずスレッドの作成機能があり、ユーザーは任意のトピックでスレッドを立ち上げることができます。また、スレッドにはコメント機能が備わっており、他のユーザーが自由に意見を追加することが可能です。さらに、他者が作成したスレッドを閲覧し、その内容に対してコメントを投稿することも簡単に行えます。
            このアプリでは、誰でも使いやすく、トピックに関する活発な議論や意見交換ができるような、直感的でフレンドリーなデザインにこだわっています。
          </p>
          <p className="mx-2 mt-2">
            The Thread app allows users to create threads, add comments to those
            threads, view threads created by other users, and leave comments.
            The purpose of the app is to provide a place where users can
            exchange opinions and discuss specific topics. The app first
            features a thread creation function, which allows users to start a
            thread on any topic. Threads are also equipped with a comment
            function, allowing other users to add their opinions freely.
            Furthermore, users can easily browse threads created by others and
            post comments on their content. The application focuses on an
            intuitive and friendly design that is easy for anyone to use and
            encourages lively discussion and exchange of ideas on topics.
          </p>
          <p className="mx-2 mt-4">仕様技術：React, Vite, Prettier, Eslint</p>
          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://github.com/dyedai/react-threads"
            target="_blank"
          >
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/threads/threadshome.png"
              alt="threadshome"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/threads/newthreads.png"
              alt="newthreads"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/threads/inthreads.png"
              alt="inthreads"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
