import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const cardData = [
  {
    trigger: "게임 시작",
    content: "게임로비에서 방으로 입장합니다.",
  },
  {
    trigger: "자유 대화",
    content:
      "낮 동안 자유롭게 대화합니다. 시민은 마피아를 잡기 위해, 마피아는 시민을 속이기 위해 노력합니다.",
  },
  {
    trigger: "투표 결과",
    content: "투표 결과를 발표합니다. 가장 많은 표를 받은 사람은 처형됩니다.",
  },
  {
    trigger: "처형 or 생존",
    content:
      "처형된 사람은 즉시 사망합니다. 생존한 사람은 다음 턴으로 넘어갑니다.",
  },
  {
    trigger: "경찰 턴",
    content: "경찰은 한 명을 지목해 마피아인지 아닌지 조사합니다.",
  },
  {
    trigger: "자유 대화",
    content: "낮 동안 자유롭게 대화합니다.",
  },
];

export const GameInfoCardsBottom: React.FC = () => {
  return (
    <div className="mx-auto mt-4 flex w-11/12 justify-around space-x-[4%]">
      {cardData.map((card, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger className="cursor-pointer duration-300 hover:text-green-400">
            {card.trigger}
          </HoverCardTrigger>
          <HoverCardContent>{card.content}</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};
