import Image from "next/image";
export default function ImageSection() {
  return (
    <Image
      src="/Photo.png"
      alt="arrowF.svg"
      layout="responsive"
      width={100}
      height={100}
    />
  );
}
