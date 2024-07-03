import ImgWithTextLeft from "@/app/features/home/ImgWithTextLeft";
import ImgWithTextRight from "@/app/features/home/ImgWithTextRight";
import ImgWithTextAndBtns from "@/app/features/home/ImgWithTextAndBtns";
import KeyFeatures from "@/app/features/home/KeyFeatures";

export default function Home() {
  return (
    <div>
      <ImgWithTextLeft
        title="마피아게임 좋아하시나요?"
        text="Do you like Mafia games?"
        img="/imgs/index-1.png"
        isTextLeft={true}
      />
      <ImgWithTextRight
        title="지인들과 오프라인에서 즐기던 마피아게임을"
        text="We used to enjoy playing Mafia game offline with friends"
        img="/imgs/index-2.png"
        isTextLeft={false}
      />
      <ImgWithTextLeft
        title="별도의 설치 없이 | EASY"
        text="Without the need for separate installation"
        img="/imgs/index-1.png"
        isTextLeft={true}
      />
      <ImgWithTextRight
        title="다른 사람들과 채팅하며 | FUN"
        text="Chatting with other people"
        img="/imgs/index-2.png"
        isTextLeft={false}
      />
      <ImgWithTextAndBtns
        title="웹으로 즐기는 마피아 게임 | Chatfia"
        text="Mafia game enjoyed online."
        img="/imgs/index-5.png"
        isTextLeft={true}
      />
      <KeyFeatures />
    </div>
  );
}
