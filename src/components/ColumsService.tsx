import Image from "next/image";

interface ColumsServiceProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function ColumsService({
  iconSrc,
  title,
  description,
}: ColumsServiceProps) {
  return (
    <div className=" max-w-[350px] text-white  space-y-4">
      <div className="h-16 w-16 rounded-[50%] border border-white flex justify-center items-center">
        <Image src={iconSrc} alt="Icon" width={32} height={32} />
      </div>

      <h4 className="font-semibold">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
