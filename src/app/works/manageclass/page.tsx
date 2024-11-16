import Image from "next/image";
import "../../glow.css";

export default function ManageclassPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            &lt;ManageClass/&gt;
          </h1>
          <p className="mx-2">
            このアプリは、スプレッドシートから講習期間を設定し、その期間に対応するコマ数分のチェックボックスをフロントに表示し、各講師が入力したシフトを個別にスプレッドシートにまとめて記録する機能を備えています。目的は、講習期間中のシフト管理を効率化し、各講師が自分のシフトを簡単に入力・確認できるようにすることです。
            アプリの開発動機としては、手動でシフトを管理する手間を減らし、講師一人ひとりのシフトを正確に記録するプロセスを自動化したいという思いからです。講習期間がスプレッドシートから自動で読み込まれ、その期間中のコマ分がチェックボックスとしてフロントに表示されます。講師は自分のシフトを入力し、その内容がスプレッドシートにまとめられるため、管理が容易になります。
            このアプリは、直感的でわかりやすいインターフェースを提供しており、各講師が迷わずに自分のシフトを入力できるようデザインされています。また、効率的なシフト管理をサポートするために、シームレスなスプレッドシート連携機能にこだわっています。
          </p>
          <p className="mx-2 mt-2">
            The application has the ability to set the course duration from a
            spreadsheet, display checkboxes at the front for the number of
            frames corresponding to that duration, and record the shifts entered
            by each instructor individually in a spreadsheet. The goal is to
            streamline shift management during the course period and allow each
            instructor to easily enter and check his or her own shifts. The
            motivation for developing the application was to reduce the time and
            effort required to manually manage shifts and to automate the
            process of accurately recording each instructor&apos;s shifts. The
            course period is automatically loaded from a spreadsheet, and the
            frames during that period are displayed in the front as checkboxes.
            Instructors can enter their own shifts, which are then compiled in
            the spreadsheet for easy management. The application provides an
            intuitive and easy-to-understand interface, designed so that each
            instructor can enter his or her own shifts without hesitation. We
            also insist on seamless spreadsheet integration features to support
            efficient shift management.
          </p>
          <p className="mx-2 my-4">
            仕様技術：React, Vite, Prettier, Eslint, TailwindCss, Google App
            Script
          </p>
          <a
            className="underline  text-blue-600 mx-2 text-2xl"
            href="https://github.com/dyedai/manage-class"
            target="_blank"
          >
            GitHub
          </a>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/manageclass/home_manageclass.png"
              alt="homemanageclass"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/manageclass/data.png"
              alt="data"
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
