import { FeatureItemProps } from "@/app/apis/types/home";
import NoRightClickImg from "@/components/NoRightClickImg";
import Image from "next/image";
import Link from "next/link";

const FeatureItem: React.FC<FeatureItemProps> = ({ src, alt, text }) => {
  return (
    <div className="flex-col space-y-3">
      <div className="flex justify-center">
        <NoRightClickImg>
          <Image
            src={src}
            alt={alt}
            width={80}
            height={80}
            className="no-user-select no-user-drag"
          />
        </NoRightClickImg>
      </div>
      <p className="text-center">{text}</p>
    </div>
  );
};

export const KeyFeatures: React.FC = () => {
  return (
    <div>
      <header className="flex justify-center py-10 text-4xl font-bold">
        주요 기능
      </header>
      <div className="mr-6 flex justify-around pb-32">
        <FeatureItem
          src="/icons/feat-1.png"
          alt="playing"
          text="몰입형 롤플레잉"
        />
        <FeatureItem
          src="/icons/feat-2.png"
          alt="web"
          text='별도의 설치 없이 "웹"으로'
        />
        <FeatureItem src="/icons/feat-3.png" alt="chat" text="실시간 채팅" />
      </div>
      <footer className="flex-col text-sm text-gray-400">
        <div className="mb-4 flex justify-center">
          <div className="mr-4">
            제작 : hiryuji@kakao.com (FE), kingmandoo95@gmail.com (BE)
          </div>
          |
          <Link
            href="/terms/service"
            className="mx-4 cursor-pointer duration-300 hover:text-green-300"
          >
            서비스 이용약관
          </Link>
          |
          <Link
            href="/terms/privacy"
            className="mx-4 cursor-pointer duration-300 hover:text-green-300"
          >
            개인정보 처리방침
          </Link>
        </div>
        <div className="mb-8 flex justify-center">
          &copy; 2024 Chatfia All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};
