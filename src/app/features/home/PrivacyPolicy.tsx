import ScrollToTopButton from "@/components/ScrollToTopBtn";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">개인정보 처리방침</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
        <p>
          Chatfia(챗피아)는 다음의 목적을 위하여 개인정보를 처리합니다. 처리한
          개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이
          변경될 시에는 사전 동의를 구할 예정입니다.
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            회원 가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른
            본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종
            고지·통지, 고충처리 등을 목적으로 개인정보를 처리합니다.
          </li>
          <li>
            서비스 제공: 콘텐츠 제공, 맞춤서비스 제공, 본인인증 등을 목적으로
            개인정보를 처리합니다.
          </li>
          <li>
            고충처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한
            연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. 개인정보의 처리 및 보유 기간
        </h2>
        <p>
          Chatfia(챗피아)는 법령에 따른 개인정보 보유·이용기간 또는
          정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간
          내에서 개인정보를 처리·보유합니다.
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            회원 가입 및 관리: 회원 탈퇴 시까지. 다만, 관계 법령 위반에 따른
            수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지.
          </li>
          <li>서비스 제공: 서비스 이용계약 해지 시까지.</li>
          <li>고충처리: 고충처리 완료 시까지.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. 개인정보의 제3자 제공
        </h2>
        <p>
          Chatfia(챗피아)는 정보주체의 동의, 법률의 특별한 규정 등 관련 법령에
          해당하는 경우에만 개인정보를 제3자에게 제공합니다.
        </p>
        <p>
          Chatfia(챗피아)는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다:
        </p>
        <table className="min-w-full bg-zinc-900 border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border-b">제공받는 자</th>
              <th className="py-2 border-b">제공받는 자의 개인정보 이용목적</th>
              <th className="py-2 border-b">제공하는 개인정보 항목</th>
              <th className="py-2 border-b">
                제공받는 자의 개인정보 보유 및 이용기간
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border-b">OOO</td>
              <td className="py-2 border-b">본인인증</td>
              <td className="py-2 border-b">
                이름, 생년월일, 성별, 아이디, 휴대전화번호
              </td>
              <td className="py-2 border-b">회원 탈퇴 시까지</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          4. 정보주체의 권리·의무 및 그 행사방법
        </h2>
        <p>회원은 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>개인정보 열람요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제요구</li>
          <li>처리정지 요구</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          5. 처리하는 개인정보의 항목
        </h2>
        <p>Chatfia(챗피아)는 다음의 개인정보 항목을 처리하고 있습니다.</p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            필수항목: 성명, 생년월일, 아이디, 비밀번호, 휴대전화번호, 이메일주소
          </li>
          <li>선택항목: 프로필 사진, 취미, 관심사</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. 개인정보의 파기</h2>
        <p>
          Chatfia(챗피아)는 개인정보 보유기간의 경과, 처리목적 달성 등
          개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를
          파기합니다.
        </p>
        <p>
          회원으로부터 동의 받은 개인정보 보유기간이 경과하거나 처리목적이
          달성된 개인정보는 내부 방침 및 관련 법령에 따라 일정기간 저장된 후
          혹은 즉시 파기됩니다.
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>
            파기절차: 회원이 입력한 정보는 목적 달성 후 별도의 DB에
            옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 따라
            일정기간 저장된 후 혹은 즉시 파기됩니다.
          </li>
          <li>
            파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
            방법을 사용합니다.
          </li>
        </ul>
      </section>
      <ScrollToTopButton />
    </div>
  );
};

export default PrivacyPolicy;
