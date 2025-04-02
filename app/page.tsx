import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Link href="/first-motion" >First-Practice</Link>
      <Link href="/hooks" >Motion Hooks</Link>
      <Link href="/animate" >3D Animation</Link>
    </div>
  );
}
