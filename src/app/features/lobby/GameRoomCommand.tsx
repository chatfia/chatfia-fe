import { GameRoomCommandProps } from "@/app/types/lobby";
import { Search } from "lucide-react";

export const GameRoomCommand: React.FC<GameRoomCommandProps> = ({
  searchInput,
  handleSearchInputChange,
}) => {
  return (
    <div className="mx-auto my-10 w-1/3 justify-center">
      <div className="flex items-center border-b px-3">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          type="text"
          placeholder="방 검색"
          value={searchInput}
          onChange={handleSearchInputChange}
          className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  );
};
