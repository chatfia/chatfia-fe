import Image from "next/image";
import Link from "next/link";
import HomeIntro from "./_view/HomeIntro";
import HomeFeature from "./_view/HomeFeature";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TermsOfService from "./_view/TermsOfService";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[600px]">
        <Image
          src="/images/city.png"
          alt="city"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <p className="text-outline-gray-900 text-5xl font-bold text-gray-50">
            마피아의 어둠과 시민의 진실이 엇갈리는 밤
          </p>
          <p className="text-outline-gray-900 text-5xl font-bold text-gray-50">
            마피아 게임 <span className="text-red-600">Chatfia</span>에 오신 걸
            환영합니다!
          </p>
          <p className="text-outline-gray-900 text-5xl font-bold text-gray-50">
            오늘의 승자는 과연 누구일까요?
          </p>
        </div>
      </section>
      <section className="bg-gray-950">
        <HomeIntro
          title="마피아게임 좋아하시나요?"
          description="Do you like Mafia games?"
          image="/images/index1.png"
        />
        <HomeIntro
          title="지인들과 오프라인에서 즐기던 마피아게임을"
          description="We used to enjoy playing Mafia game offline with friends"
          image="/images/index2.png"
          isTextLeft={false}
          className="bg-red-600"
        />
        <HomeIntro
          title="별도의 설치 없이 | EASY"
          description="Without the need for separate installation"
          image="/images/index3.png"
        />
        <HomeIntro
          title="다른 사람들과 채팅하며 | FUN"
          description="Chatting with other people"
          image="/images/index4.png"
          isTextLeft={false}
          className="bg-red-600"
        />
        <HomeIntro
          title="웹으로 즐기는 마피아 게임 | Chatfia"
          description="Mafia game enjoyed online."
          image="/images/index5.png"
          isLast={true}
        />
        <div className="h-20" />
        <h3 className="flex justify-center p-1 text-4xl font-bold text-gray-50">
          주요 기능
        </h3>
        <div className="h-20" />
        <div className="flex justify-center gap-80">
          <HomeFeature image="/icons/feature1.png" text="몰입형 롤플레잉" />
          <HomeFeature
            image="/icons/feature2.png"
            text='별도의 설치 없이 "웹"으로'
          />
          <HomeFeature image="/icons/feature3.png" text="실시간 채팅" />
        </div>
        <div className="h-20" />
      </section>
      <footer className="flex-col bg-gray-950 p-8 text-sm text-gray-400">
        <div className="flex justify-center">
          <p>제작 : hiryuji@kakao.com (FE), kingmandoo95@gmail.com (BE)</p>
          <div className="w-4" />|<div className="w-4" />
          <Dialog>
            <DialogTrigger asChild>
              <p className="cursor-pointer hover:text-green-300 active:text-green-400">
                서비스 이용약관
              </p>
            </DialogTrigger>
            <DialogContent className="no-scrollbar max-h-[80vh] overflow-y-auto sm:max-w-[425px] md:max-w-[768px]">
              <DialogHeader>
                <DialogTitle>Chatfia(챗피아) 서비스 이용약관</DialogTitle>
                <div className="h-1 bg-gray-950" />
              </DialogHeader>
              <TermsOfService />
            </DialogContent>
          </Dialog>
          <div className="w-4" />|<div className="w-4" />
          <Link href="/terms/privacy">
            <p className="cursor-pointer hover:text-green-300 active:text-green-400">
              개인정보 처리방침
            </p>
          </Link>
        </div>
        <div className="h-4" />
        <p className="flex justify-center">
          &copy; 2024 Chatfia All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
