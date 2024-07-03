"use client";

import { useState } from "react";
import { GameRoomProps } from "@/app/types/lobby";
import { GameRoomDialog } from "@/app/features/lobby/GameRoomDialog";
import { GameRoomCommand } from "@/app/features/lobby/GameRoomCommand";
import { GameRoom } from "@/app/features/lobby/GameRoom";

const Lobby: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState<GameRoomProps[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const handleCreateRoom = (
    roomTitle: string,
    isPrivate: boolean,
    password: string
  ) => {
    const newRoom: GameRoomProps = {
      img: "red",
      title: roomTitle,
      players: 1,
      private: isPrivate,
      password: isPrivate ? password : "",
      registrationDate: new Date(),
    };
    setRooms((prevRooms) => [...prevRooms, newRoom]);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const filteredRooms = rooms.filter((room) =>
    room.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="mb-20 mt-40 flex flex-col text-center">
        <p className="text-4xl font-bold">게임로비</p>
        <p className="mb-4 font-bold">Start your Chatfia game now</p>
        <div className="flex justify-center my-4">
          <GameRoomDialog
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onCreateRoom={handleCreateRoom}
          />
        </div>
        <GameRoomCommand
          searchInput={searchInput}
          handleSearchInputChange={handleSearchInputChange}
        />
      </div>
      <div className="mb-20">
        <div className="mx-auto grid max-w-fit grid-cols-5 flex-col">
          {filteredRooms.map((room, index) => (
            <div key={index} className="flex animate-fadeIn justify-center">
              <GameRoom
                img={index % 2 === 0 ? "red" : "black"}
                title={room.title}
                players={room.players}
                private={room.private}
                password={room.password}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lobby;
