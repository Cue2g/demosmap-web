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
    <div className="max-w-[320px] w-full text-white space-y-6 flex flex-col items-center text-center px-2">
      <div className="h-16 w-16 rounded-full border border-white flex justify-center items-center">
        <Image src={iconSrc} alt="Icon" width={32} height={32} />
      </div>
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
}
