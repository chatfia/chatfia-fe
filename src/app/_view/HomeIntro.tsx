import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Gamepad2, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  isTextLeft?: boolean;
  className?: string;
  isLast?: boolean;
};

export default function HomeIntro({
  title,
  description,
  image,
  isTextLeft = true,
  className,
  isLast,
}: Props) {
  return (
    <div
      className={cn(
        "container flex items-center justify-between gap-20 p-20",
        isTextLeft ? "flex-row" : "flex-row-reverse",
        className,
      )}
    >
      <div className="flex-col text-gray-50">
        <div className="text-3xl font-bold">{title}</div>
        <div className="h-5" />
        <div className="text-xl font-semibold">{description}</div>
        <div className="h-8" />
        {isLast && (
          <div className="flex gap-5">
            <Link href="/rule">
              <Button variant="home" size="home">
                <Info size={24} />
                게임설명
              </Button>
            </Link>
            <Link href="/">
              <Button variant="homeStart" size="home">
                <Gamepad2 size={24} />
                게임시작
              </Button>
            </Link>
          </div>
        )}
      </div>
      <Image
        src={image}
        alt="homeIntroImage"
        width={isLast ? 300 : 600}
        height={isLast ? 300 : 300}
        className="rounded-xl"
      />
    </div>
  );
}
