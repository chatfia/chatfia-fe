import { GameRules } from "@/app/features/rule/GameRules";
import { RoleIntroduction } from "@/app/features/rule/RoleIntroduction";

const Rule: React.FC = () => {
  return (
    <>
      <GameRules />
      <RoleIntroduction />
    </>
  );
};

export default Rule;
