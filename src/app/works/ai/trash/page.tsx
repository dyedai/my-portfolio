import Image from "next/image";

export default function ManageclassPage() {
  console.log("隠し要素はどこかな？？");

  return (
    <div>
      <div className="flex h-screen w-full flex-col lg:flex-row">
        <div className="lg:w-1/2 h-ful text-white lg:px-8 pt-2 rainbow-text">
          <h1 className="font-dot text-3xl lg:text-4xl my-8 text-center">
            Trash
          </h1>
          {/* <p className="mx-2">コレクション説明</p> */}
          <p className="mx-2">Prompt:</p>
          <p className="mx-2 mt-2">
            Background: A simple runway with a trash dumpster feel. Foreground:
            Full body shot of model in long dress with discarded furniture,
            clothes, and trash trailing 3 meters behind. Color palette: -
            Primary: Pale, dark, dirty, colorful. - Secondary: Dull ivory -
            Accent colors: dull light greens, pinks and yellows Patterns and
            Structure: - Contrast between the cleanliness of the models and the
            gaps between the fabrics made of trash: * Dragging dresses spanning
            three to five meters * Pieced-together skirts with layers of fabric
            Silhouette: - Body conscious base with flowing outer layers -
            Asymmetrical upper body following the natural dress - Lower body:
            old fabrics pieced together Construction details: - Flowing outer
            layer on a body conscious base - Asymmetrical design along natural
            dress: - Strategic draping with random old fabrics - Use of
            discarded ragged old fabrics and furniture fabrics Accessories: -
            Heavy application of black eye shadow - Plenty of luxurious
            accessories as opposed to dresses that look like they are made of
            trash
          </p>
          <p className="mx-2 my-4">仕様技術：ImageFX</p>
        </div>

        <div className="lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="grid grid-cols-1 gap-4 p-4">
            <Image
              src="/images/AI-trash/trash-1.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-2.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-3.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-4.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-5.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-6.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-7.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-8.jpg"
              alt="look1"
              className="w-full h-auto"
              width={2400}
              height={1600}
            />
            <Image
              src="/images/AI-trash/trash-9.jpg"
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
