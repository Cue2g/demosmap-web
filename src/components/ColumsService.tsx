interface ColumsServiceProps {
  title: string;
  description: string;
  index: number;
}

export default function ColumsService({
  title,
  description,
  index,
}: ColumsServiceProps) {
  return (
    <div className="max-w-[350px] w-full space-y-4 flex flex-col items-start px-2">
      <div className="space-y-2">
        <h5 className="font-bold text-left text-md text-gray-900">{index}. {title}</h5>
        <div className="h-1 w-40 bg-[linear-gradient(to_right,_#94DF73_0%,_#71DEA9_30%,_#3DD8E9_65%,_#3A80EB_98%)] rounded-full" />
      </div>
      <p className="text-left text-md text-gray-600">{description}</p>
    </div>
  );
}
