import Image from "next/image";
export default function Logo() {
  return (
    <div>
      <Image
        src={"/brand/webLogo.png"}
        alt="web-logo"
        width={40}
        height={40}
      />
    </div>
  );
}
