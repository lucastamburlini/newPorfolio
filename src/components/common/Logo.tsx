import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/brand/webLogo.png"} alt="web-logo" width={40} height={40} />
    </div>
  );
}
