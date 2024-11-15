import dynamic from "next/dynamic";

// HomePage コンポーネントを動的インポート
const HomePage = dynamic(() => import("./HomePage"), { ssr: false });

export default function Page() {
  return <HomePage />;
}
