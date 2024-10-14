import { GameRoomProps } from "@/app/apis/types/lobby";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Lock } from "lucide-react";

export const GameRoom: React.FC<GameRoomProps> = ({
  img,
  title,
  players,
  private: isPrivate,
}) => {
  const imgSrc = `/imgs/room-${img}.png`;
  const [playerCount, setPlayerCount] = useState(players);

  const handleJoinRoom = () => {
    setPlayerCount((prev) => Math.min(prev + 1, 6));
  };

  return (
    <div className="relative m-2 h-[250px] w-[280px] overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={imgSrc}
          alt={`room-${img}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {isPrivate && (
        <div className="absolute right-0 top-0 z-10 mr-2 mt-2">
          <Badge variant="outline" className="items-center">
            <Lock className="mr-1 h-3 w-3" />
            비공개
          </Badge>
        </div>
      )}
      <div className="absolute left-1/2 top-2/3 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform p-2 text-center">
        <p className="mt-2 line-clamp-2 text-xl">{title}</p>
        <p className="mb-4 opacity-50">{`${playerCount}/6 Players`}</p>
        <button
          onClick={handleJoinRoom}
          className="text-3xl font-bold transition-all ease-in-out hover:rotate-12 hover:scale-110 hover:transform hover:text-green-400"
        >
          Join
        </button>
      </div>
    </div>
  );
};
