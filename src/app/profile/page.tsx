import React from "react";
import Image from "next/image";

interface SkillIconProps {
  img: string;
  label: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ img, label }) => (
  <div className="flex flex-col items-center">
    <div className="p-10">
      <Image src={img} alt={label} width={60} height={60} />
    </div>
    <span className="mt-2 text-sm">{label}</span>
  </div>
);

export default function ProfilePage() {
  console.log("このページにはなにもないかな");

  return (
    <div className="w-11/12 min-h-screen mx-auto rounded-lg overflow-hidden">
      <div className="px-6 py-8 text-center">
        <p className="text-5xl font-bold md:text-9xl">DaiDai</p>
        <span className="mt-2 text-lg">Daiki Kakimi</span>
        <p className="text-lg mt-2">Web Engineer / Designer?</p>
      </div>
      <hr className="w-7/12 mx-auto" />

      <div className="flex flex-col laptopS:gap-96 px-6 md:px-32 my-10 4k:gap-[80rem] laptopS:flex-row">
        <div className="py-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            <span className="md:whitespace-nowrap">芝浦工業大学 システム理工学部 電子情報システム学科所属　学部3年</span>
            <br />
            <span className="md:whitespace-nowrap">TechNova所属 </span>
            <br />
            <a className="md:whitespace-nowrap underline text-blue-600" href="https://technova.studio.site" target="_blank">
              TechNova公式サイト
            </a>
            <br />
            <a className="md:whitespace-nowrap underline text-blue-600" href="https://x.com/TechNova_JP" target="_blank">
              公式X(Twitter)
            </a>
            <br />
            <span className="md:whitespace-nowrap">Web制作をメインにデザインやコーディングをしています。</span>
            <br />
            <span className="md:whitespace-nowrap">主にHTML/CSS、JavaScriptを使用しています。</span>
            <br />
            <span className="md:whitespace-nowrap">最近はReactやNextjs、3DCG(blender)などにも興味があります。</span>
          </p>
        </div>
        <div className="py-8 lg:w-1/2">
          <h2 className="text-2xl mb-4">Status</h2>
          <p>
            <span className="whitespace-nowrap">せいべつ：おとこ</span>
            <br />
            <span className="whitespace-nowrap">うまれ：2003/5/24</span>
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
          <SkillIcon img="/images/typescript-original.svg" label="TypeScript" />
          <SkillIcon img="/images/react-logo.svg" label="React" />
          <SkillIcon img="/images/nextjs-original.svg" label="Next.js" />
          <SkillIcon img="/images/tailwindcss-original.svg" label="Tailwidcss" />
          <SkillIcon img="/images/nodejs-original.svg" label="Node.js" />
          <SkillIcon img="/images/linux-original.svg" label="Linux" />
          <SkillIcon img="/images/c-original.svg" label="C" />
          <SkillIcon img="/images/java-original.svg" label="Java" />
          <SkillIcon img="/images/Logomark_Full Color.png" label="Firebase" />
          <SkillIcon img="/images/figma-original.svg" label="Figma" />
          <SkillIcon img="/images/blender-original.svg" label="Blender" />
        </div>
      </div>
    </div>
  );
}
