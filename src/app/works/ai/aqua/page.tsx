import Image from "next/image";

export default function ManageclassPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            Aqua
          </h1>
          {/* <p className="mx-2">コレクション説明</p> */}
          <p className="mx-2">Prompt:</p>
          <p className="mx-2 mt-2">
            Background: Lighting reflects the shadow of the water, like a dark
            aquarium, on a simple runway. Foreground: Full body shot of model
            inaquarium. Color palette: - Primary: Transparent Pattern and
            Structure: - Expression like fabric made from an aquarium: *
            Wearingthe aquarium as it is Technical elements: - Fabric that looks
            like a living aquarium turned into a fabric as it is
          </p>
          <p className="mx-2 my-4">仕様技術：ImageFX</p>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/AI-aqua/aqua-1.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-2.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-3.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-4.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-5.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-6.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-7.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-8.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-9.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-10.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-11.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-12.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-13.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-14.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-15.jpg"
              alt="look2"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-aqua/aqua-16.jpg"
              alt="look2"
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
