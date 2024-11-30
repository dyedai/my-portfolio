import Image from "next/image";

export default function ManageclassPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            Syuji
          </h1>
          {/* <p className="mx-2">コレクション説明</p> */}
          <p className="mx-2">Prompt:</p>
          <p className="mx-2 mt-2">
            Background: Simple runway. Foreground: Full body shot of an
            international model wearing Japanese calligraphy. Color palette: -
            Primary: Transparent Pattern and structure: - The expression is like
            a fabric made of half-sheets of inked paper: * Wearing the
            calligraphy as it is Technical elements: - A fabric that looks as if
            it were made of half-sheets of paper with Chinese characters written
            in sumi ink, turned directly into a fabric Accessories: -A large
            calligraphy brush -Makeup that looks like sumi ink
          </p>
          <p className="mx-2 my-4">仕様技術：ImageFX</p>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/AI-syuji/syuji-1.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-syuji/syuji-2.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-syuji/syuji-3.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-syuji/syuji-4.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-syuji/syuji-5.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-syuji/syuji-6.jpg"
              alt="look1"
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
