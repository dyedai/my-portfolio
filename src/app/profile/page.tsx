import React from "react";
import Image from "next/image";

interface SkillIconProps {
  img: string;
  label: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ img, label }) => (
  <div className="flex flex-col items-center">
    <div className="p-10">
      <Image width={60} height={60} src={img} alt={label} />
    </div>
    <span className="mt-2 text-sm">{label}</span>
  </div>
);

export default function ProfilePage() {
  return (
    <div className="w-11/12 min-h-screen mx-auto rounded-lg overflow-hidden">
      <div className="px-6 py-8 text-center">
        <p className="text-5xl font-bold md:text-9xl">DaiDai</p>
        <span className="mt-2 text-lg">Daiki Kakimi</span>
        <p className="text-lg mt-2">Frontend Engineer / Student</p>
      </div>
      <hr className="w-7/12 mx-auto" />

      <div className="lg:gap-96 flex flex-col lg:flex-row px-6 md:px-32 my-10">
        <div className="py-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="">
            <span className="whitespace-nowrap">芝浦工業大学 システム理工学部 電子情報システム学科所属　学部3年</span>
            <br />
            <span className="whitespace-nowrap">Web制作をメインにデザインやコーディングをしています。</span>
            <br />
            <span className="whitespace-nowrap">主にHTML/CSS、JavaScriptを使用しています。</span>
            <br />
            <span className="whitespace-nowrap">最近はReactやNext.jsなどにも興味があります。</span>
          </p>
        </div>
        <div className="py-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Status</h2>
          <p className="">
            <span className="whitespace-nowrap">せいべつ：おとこ</span>
            <br />
            <span className="whitespace-nowrap">年齢：２１歳</span>
            <br />
            <span className="whitespace-nowrap">出身：とうきょう</span>
            <br />
            <span className="whitespace-nowrap">趣味：服</span>
          </p>
        </div>
      </div>

      <div className="md:px-32 py-8">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <SkillIcon img="/images/HTML5_Badge.svg" label="HTML/CSS" />
          <SkillIcon img="/images/javascript-original.svg" label="JavaScript" />
          <SkillIcon img="/images/react-logo.svg" label="React" />
          <SkillIcon img="/images/cpp_logo.png" label="C" />
          <SkillIcon img="/images/Figma-Icon.svg" label="Figma" />
          <SkillIcon img="/images/Logomark_Full Color.png" label="Firebase" />
        </div>
      </div>
    </div>
  );
}
