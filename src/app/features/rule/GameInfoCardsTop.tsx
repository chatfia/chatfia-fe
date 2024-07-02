import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const cardData = [
  {
    trigger: "역할 분배",
    content: "랜덤으로 마피아 2명, 경찰 1명, 의사 1명이 뽑힙니다.",
  },
  {
    trigger: "투표 시작",
    content:
      "저녁이 되면 토론을 통해 죽일 사람 한 명을 후보로 놓고, 그 사람을 죽일 지 말지 찬반 투표로 결정합니다.",
  },
  {
    trigger: "변론 기회",
    content: "변론 기회가 주어진 사람은 자신이 마피아가 아닌 이유를 말합니다.",
  },
  {
    trigger: "마피아 턴",
    content:
      "밤이 되었습니다. 마피아는 밤 동안 마피아끼리만 대화하며, 마피아를 제외한 모든 플레이어는 잠을 자야 합니다. 마피아는 밤 동안 한 명을 살해합니다.",
  },
  {
    trigger: "의사 턴",
    content: "의사는 지목한 사람을 살릴 수 있습니다.",
  },
];

const GameInfoCardsTop: React.FC = () => {
  return (
    <div>
      <div className="flex justify-around -space-x-[10%] text-xl font-bold mb-20">
        <div className="flex items-end space-x-2">
          <p>낮</p>
          <p className="text-sm">(자유 대화)</p>
        </div>
        <div className="flex items-end space-x-2">
          <p>저녁</p>
          <p className="text-sm">(투표 시작 ~ 처형 or 생존)</p>
        </div>
        <div className="flex items-end space-x-2">
          <p>밤</p>
          <p className="text-sm">(마피아 턴 ~ 의사 턴)</p>
        </div>
        <div className="flex items-end space-x-2">
          <p>낮</p>
          <p className="text-sm">(자유 대화)</p>
        </div>
      </div>
      <div className="flex justify-around mb-4 w-4/5 mx-auto space-x-1">
        {cardData.map((card, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger className="cursor-pointer hover:text-green-400 duration-300">
              {card.trigger}
            </HoverCardTrigger>
            <HoverCardContent>{card.content}</HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default GameInfoCardsTop;
