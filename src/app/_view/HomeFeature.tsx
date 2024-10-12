import Image from "next/image";

type Props = {
  image: string;
  text: string;
};

export default function HomeFeature({ image, text }: Props) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={image} alt={text} width={100} height={100} />
      <p className="text-2xl text-gray-50">{text}</p>
    </div>
  );
}
