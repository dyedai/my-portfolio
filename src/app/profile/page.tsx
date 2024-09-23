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
      <div className="md:flex px-32 my-10 gap-96">
        <div className="py-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="">
            芝浦工業大学 システム理工学部 電子情報システム学科所属　学部3年
            <br /> Web制作をメインにデザインやコーディングをしています。
            <br />
            主にHTML/CSS、JavaScriptを使用しています。
            <br />
            最近はReactやNext.jsなどにも興味があります。
          </p>
        </div>
        <div className="py-8">
          <h2 className="text-2xl font-semibold mb-4">Status</h2>
          <p className="">
            せいべつ：おとこ
            <br />
            年齢：２１歳
            <br />
            出身：とうきょう
            <br />
            趣味：服
          </p>
        </div>
      </div>
      <div className="px-32 py-8">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-3 gap-6">
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
