"use client";

import { HomeProps } from "@/app/types/home";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import NoRightClickImg from "@/components/NoRightClickImg";
import Image from "next/image";

const ImgWithTextAndBtns: React.FC<HomeProps> = ({ title, text, img }) => {
  const router = useRouter();

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <div className="flex items-center justify-center space-x-32 pb-20 pt-20 font-bold">
      <div>
        <div className="mb-4 text-4xl">{title}</div>
        <div className="text-lg">{text}</div>
        <div className="space-x-4 pt-4">
          <Button variant="outline" onClick={() => handleNavigation("/rule")}>
            게임설명
          </Button>
          <Button variant="outline" onClick={() => handleNavigation("/lobby")}>
            게임로비
          </Button>
        </div>
      </div>
      <NoRightClickImg>
        <Image
          src={img}
          alt="마피아게임"
          width={300}
          height={300}
          className="no-user-select no-user-drag"
        />
      </NoRightClickImg>
    </div>
  );
};

export default ImgWithTextAndBtns;
