import Image from "next/image";
import "../../../glow.css";

export default function BookreviewPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            &lt;BookReview/&gt;
          </h1>
          <p className="mx-2">
            BookReviewは、ユーザーが書籍をレビューし、他のユーザーが投稿したレビューを簡単に参照できるアプリです。このアプリは、書籍選びに迷ったときに参考になるレビューを提供し、他の読者と感想を共有できる場を作ることを目的としています。開発の動機としては、自分が読んだ本の感想を他の人と共有したいという思いと、他の人が読んだ本のレビューを参考にして新しい本を見つけたいという考えからです。
            このアプリの特徴は、シンプルで直感的なUIデザインと、Tailwind
            CSSやdaisyUIを使用して視覚的に魅力的かつ使いやすいインターフェースを提供している点です。また、ユーザーは自分のプロフィールを自由にカスタマイズでき、書籍のレビューを投稿・編集・削除する機能も備えています。他のユーザーのレビューを簡単に参照できるため、新しい本を見つける際の助けとなるでしょう。
            このように、ユーザーフレンドリーな設計にこだわり、誰でも直感的に操作できる環境を整えることに注力しています。
          </p>
          <p className="mx-2 mt-2">
            BookReview is an application that allows users to review books and
            easily refer to reviews posted by other users. The purpose of this
            application is to provide users with reviews that they can refer to
            when they are unsure about their choice of books and to create a
            place where they can share their impressions with other readers. The
            motivation behind the development of this application was the desire
            to share my impressions of books I have read with others and to find
            new books by referring to reviews of books that others have read.
            The app features a simple and intuitive UI design and a visually
            appealing and easy-to-use interface using Tailwind CSS and daisyUI.
            Users are also free to customize their own profiles and have the
            ability to post, edit, and delete reviews of books. Users can easily
            refer to other users&apos; reviews, which can help them in finding
            new books. As you can see, our focus is on user-friendly design and
            creating an environment that anyone can operate intuitively.
          </p>
          <p className="mx-2 my-4">
            仕様技術：React, Vite, Prettier, Eslint, TailwindCss, daisyUI,
            Pines, compressor.js
          </p>
          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://github.com/dyedai/react-bookreview"
            target="_blank"
          >
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/bookreview/bookhome.png"
              alt="bookhome"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/bookreview/bookpost.png"
              alt="bookpost"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/bookreview/bookdetail.png"
              alt="bookdetail"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/bookreview/bookuser.png"
              alt="bookuser"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/bookreview/booksignup.png"
              alt="booksignup"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/bookreview/booklogin.png"
              alt="booklogin"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/bookreview/bookredit.png"
              alt="bookedit"
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
