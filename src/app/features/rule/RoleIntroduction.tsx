import RoleCard from "@/app/features/rule/RoleCard";

const RoleIntroduction: React.FC = () => {
  return (
    <>
      <div className="bg-custom">
        <div className="mt-40 flex items-end justify-center space-x-2 pt-20">
          <p className="text-4xl font-bold">직업 소개</p>
          <p className="font-bold">Role introduction</p>
        </div>
        <RoleCard
          img="/imgs/mafia.png"
          alt="mafia"
          title="마피아"
          subtitle="Mafia"
          description={[
            "낮에는 선량한 시민, 밤에는 극악부도한 '악당'",
            "마피아는 자신의 정체를 숨기고, 평범한 시민인 척하며",
            "시민들을 하나씩 제거해야 합니다.",
            "동료 마피아와 함께 밤에 의논을 통하여 시민을 죽일 수 있습니다.",
          ]}
          alignment="center"
        />
      </div>
      <RoleCard
        img="/imgs/police.png"
        alt="police"
        title="경찰"
        subtitle="Police"
        description={[
          "의심 가는 용의자를 조사하여 마피아의 정체를 알아내라!",
          "시민팀으로 활동하며, 밤에 능력을 사용하여",
          "의심스러운 플레이어를 조사하여 마피아인지 조사할 수 있습니다.",
          "마피아의 정체를 정확히 알 수 있는 만큼, 마피아에게 제일 성가신 존재입니다.",
        ]}
        alignment="left"
      />
      <div className="bg-custom">
        <RoleCard
          img="/imgs/doctor.png"
          alt="doctor"
          title="의사"
          subtitle="Doctor"
          description={[
            "밤에 마피아에게 습격 받을 것 같은 시민을 치료하라",
            "시민팀으로 활동하며, 밤에 능력을 사용하여",
            "마피아에게 습격 받을 것 같은 시민을 지목하여 치료할 수 있습니다.",
            "마피아의 공격을 무효화할 수 있는 시민팀의 소중한 존재",
          ]}
          alignment="right"
        />
      </div>
      <RoleCard
        img="/imgs/citizen.png"
        alt="citizen"
        title="시민"
        subtitle="Citizen"
        description={[
          "무능하지만 제일 중요한 역할",
          "시민팀으로 활동하며, 특수 능력이 없지만",
          "대화를 통해 마피아를 추리하고 시민팀과 협력하세요.",
          "소중한 투표를 통해 마피아를 찾아내야 합니다",
        ]}
        alignment="left"
      />
    </>
  );
};

export default RoleIntroduction;
