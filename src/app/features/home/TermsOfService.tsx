export const TermsOfService: React.FC = () => {
  return (
    <div className="p-6 text-neutral-300">
      <h1 className="text-3xl font-bold mb-4">
        Chatfia(챗피아) 서비스 이용약관
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제1장 총칙</h2>
        <h3 className="text-xl font-semibold mt-4">제1조 (목적)</h3>
        <p className="mb-2">
          이 약관은 Chatfia(챗피아)(이하 “회사”)가 온라인으로 제공하는 게임 및
          이에 부수된 제반 서비스(이하 “게임서비스”)의 이용과 관련하여 회사와
          회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로
          합니다.
        </p>
        <h3 className="text-xl font-semibold mt-4">제2조 (용어의 정의)</h3>
        <p className="mb-2">① 이 약관에서 사용하는 정의는 다음과 같습니다.</p>
        <ol className="list-decimal ml-6 mb-2">
          <li>
            “회사”라 함은 온라인을 통하여 게임서비스를 제공하는 사업자를
            의미합니다.
          </li>
          <li>
            “회원”이라 함은 본 약관에 동의하고 게임서비스 이용 자격을 부여받은
            자를 의미합니다.
          </li>
          <li>
            “게임서비스”라 함은 회사가 회원에게 온라인으로 제공하는 게임 및 이에
            부수된 제반 서비스를 의미합니다.
          </li>
          <li>
            “계정(ID)”이라 함은 회원의 식별과 게임서비스 이용을 위하여 회원이
            선정하고 회사가 부여하는 문자, 숫자 또는 특수문자의 조합을
            의미합니다.
          </li>
          <li>
            “비밀번호”라 함은 회원이 부여받은 계정과 일치되는 회원임을 확인하고
            회원의 정보 및 권익보호를 위해 회원 자신이 선정하여 비밀로 관리하는
            문자, 숫자 또는 특수문자의 조합을 의미합니다.
          </li>
          <li>
            “캐쉬”라 함은 게임서비스를 이용 또는 구매하기 위해 사용되는 가상의
            데이터로서 회원이 대금을 지급하고 구입하는 것을 말합니다.
          </li>
          <li>
            “사이버 포인트”라 함은 게임서비스를 이용 또는 구매하기 위해 사용되는
            가상의 데이터로서 회사가 임의로 책정하고 무료로 지급하는 일체의
            재산적 가치가 없는 것을 말합니다.
          </li>
          <li>
            “게시물”이라 함은 회원이 서비스를 이용함에 있어 회원이 게시한 문자,
            문서, 그림, 음성, 영상 또는 이들의 조합으로 이루어진 모든 정보를
            말합니다.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제2장 이용계약의 체결</h2>
        <h3 className="text-xl font-semibold mt-4">제3조 (이용신청 및 방법)</h3>
        <p className="mb-2">
          ① 회사가 제공하는 게임서비스를 이용하고자 하는 자는 회사가 게임 초기
          화면이나 게임서비스 홈페이지에서 제공하는 이용신청서를 작성하는
          방법으로 이용신청을 하여야 합니다.
        </p>
        <p className="mb-2">
          ② 이용자는 이용신청 시 회사에서 요구하는 제반 정보를 제공하여야
          합니다.
        </p>
        <p className="mb-2">
          ③ 이용자는 본인의 실명 및 실제 정보를 기재하여야 하며, 실명 또는
          식별정보를 허위로 기재하거나 타인의 명의를 도용한 경우 이 약관에 의한
          회원의 권리를 주장할 수 없고, 회사는 환급 없이 이용계약을 취소하거나
          해지할 수 있습니다.
        </p>
        <h3 className="text-xl font-semibold mt-4">
          제4조 (이용신청의 승낙과 제한)
        </h3>
        <p className="mb-2">
          ① 회사는 이용자가 실명 및 실제 정보를 정확히 기재하여 이용신청을 한
          경우에 상당한 이유가 없는 한 이용신청을 승낙합니다.
        </p>
        <p className="mb-2">
          ② 회사는 다음 각 호의 어느 하나에 해당하는 이용신청에 대해서는 승낙을
          하지 않을 수 있습니다.
        </p>
        <ol className="list-decimal ml-6 mb-2">
          <li>실명 또는 타인의 명의를 도용한 경우</li>
          <li>이용요금을 납부하지 않거나 잘못 납부하여 확인할 수 없는 경우</li>
          <li>청소년이 법정대리인의 동의를 얻지 아니한 경우</li>
          <li>
            최근 3개월 내 이용제한 기록이 있는 이용자가 이용신청을 하는 경우
          </li>
          <li>
            제3자의 신용카드, 유/무선 전화, 은행 계좌 등을 무단으로 이용 또는
            도용하여 서비스 이용요금을 결제하는 경우
          </li>
          <li>
            대한민국 이외의 국가 중 회사에서 아직 서비스를 제공할 것으로
            결정하지 않은 국가에서 서비스를 이용하는 경우
          </li>
          <li>법령에서 금지하는 행위를 할 목적으로 이용신청을 하는 경우</li>
          <li>그 밖에 승낙이 부적절하다고 판단되는 경우</li>
        </ol>
        <h3 className="text-xl font-semibold mt-4">
          제5조 (회원 계정(ID) 및 비밀번호)
        </h3>
        <p className="mb-2">
          ① 회사는 회원에 대하여 회원의 정보 보호, 서비스 이용안내 등의 편의를
          위해 회원이 선정한 일정한 문자, 숫자 또는 특수문자의 조합을 계정으로
          부여합니다.
        </p>
        <p className="mb-2">
          ② 비밀번호의 관리책임은 회원에게 있으며, 회원이 원하는 경우에는
          보안상의 이유 등으로 언제든지 변경이 가능합니다.
        </p>
        <p className="mb-2">
          ③ 회원은 정기적으로 비밀번호를 변경하여야 합니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제3장 개인정보 보호</h2>
        <h3 className="text-xl font-semibold mt-4">
          제6조 (개인정보의 보호 및 관리)
        </h3>
        <p className="mb-2">
          ① 회사는 관계 법령이 정하는 바에 따라 계정정보를 포함한 회원의
          개인정보를 보호하기 위해 노력합니다. 회원 개인정보의 보호 및 사용에
          대해서는 관계법령 및 회사가 별도로 고지하는 개인정보취급방침이
          적용됩니다.
        </p>
        <p className="mb-2">
          ② 회사는 회원의 귀책사유로 인하여 노출된 회원의 계정정보를 포함한 모든
          정보에 대해서 일체의 책임을 지지 않습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제4장 계약 당사자의 의무</h2>
        <h3 className="text-xl font-semibold mt-4">제7조 (회사의 의무)</h3>
        <p className="mb-2">
          ① 회사는 관련 법령을 준수하고, 이 약관이 정하는 권리의 행사와 의무의
          이행을 신의에 따라 성실하게 합니다.
        </p>
        <p className="mb-2">
          ② 회사는 회원이 안전하게 서비스를 이용할 수 있도록 개인정보 보호를
          위해 보안시스템을 갖추어야 하며 개인정보취급방침을 공시하고
          준수합니다.
        </p>
        <p className="mb-2">
          ③ 회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가
          생기거나 데이터 등이 멸실된 때에는 지체 없이 이를 수리 또는 복구하도록
          최선의 노력을 다합니다.
        </p>
        <h3 className="text-xl font-semibold mt-4">제8조 (회원의 의무)</h3>
        <p className="mb-2">① 회원은 다음 행위를 하여서는 안 됩니다.</p>
        <ol className="list-decimal ml-6 mb-2">
          <li>신청 또는 변경 시 허위내용의 기재</li>
          <li>타인의 정보도용</li>
          <li>회사의 임직원, 운영자, 기타 관계자를 사칭하는 행위</li>
          <li>회사가 게시한 정보의 변경</li>
          <li>회사가 금지한 정보의 송신 또는 게시</li>
          <li>
            회사가 제공 또는 승인하지 아니한 컴퓨터 프로그램이나 기기 또는
            장치를 제작, 배포, 이용, 광고하는 행위
          </li>
          <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
          <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          <li>외설 또는 폭력적인 정보 공개 또는 게시</li>
          <li>게임 데이터의 유상 처분 행위</li>
          <li>
            기타 법령에 위반되거나 선량한 풍속 기타 사회통념상 허용되지 않는
            행위
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제5장 서비스 이용</h2>
        <h3 className="text-xl font-semibold mt-4">
          제9조 (서비스의 제공 및 중단)
        </h3>
        <p className="mb-2">
          ① 회사는 회원에게 게임서비스를 제공할 수 있습니다.
        </p>
        <p className="mb-2">
          ② 회사는 상당한 이유가 있는 경우 운영상, 기술상의 필요에 따라
          게임서비스를 수정할 수 있습니다.
        </p>
        <p className="mb-2">
          ③ 회사는 다음 각 호의 어느 하나에 해당하는 경우에는 일정한 시간 동안
          게임서비스를 제공하지 않을 수 있습니다.
        </p>
        <ol className="list-decimal ml-6 mb-2">
          <li>
            설비의 보수점검, 교체, 정기점검 또는 게임 내용의 수정을 위하여
            필요한 경우
          </li>
          <li>
            해킹 등의 전자적 침해사고, 통신사고, 회원들의 비정상적인 게임
            이용행태, 미처 예상하지 못한 게임서비스의 불안정성에 대응하기 위하여
            필요한 경우
          </li>
          <li>
            관련 법령에서 특정 시간 또는 방법으로 게임서비스 제공을 금지하는
            경우
          </li>
          <li>
            천재지변, 비상사태 등으로 정상적인 게임서비스 제공이 불가능할 경우
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제6장 청약철회 및 환불</h2>
        <h3 className="text-xl font-semibold mt-4">제10조 (청약철회)</h3>
        <p className="mb-2">
          ① 회사와 유료서비스 이용에 관한 계약을 체결한 회원은 구매일 또는
          유료서비스 이용가능일로부터 7일 이내에는 청약의 철회를 할 수 있습니다.
        </p>
        <p className="mb-2">
          ② 회원은 다음 각 호의 어느 하나에 해당하는 경우에는 회사의 의사에
          반하여 청약철회를 할 수 없습니다.
        </p>
        <ol className="list-decimal ml-6 mb-2">
          <li>회원에게 책임이 있는 사유로 재화 등이 멸실되거나 훼손된 경우</li>
          <li>회원이 재화를 사용 또는 일부 소비한 경우</li>
          <li>시간이 지나 다시 판매하기 곤란할 경우</li>
          <li>복제가능한 재화 등의 포장을 훼손한 경우</li>
        </ol>
        <h3 className="text-xl font-semibold mt-4">제11조 (환불)</h3>
        <p className="mb-2">
          ① 회원이 직접 구매한 캐쉬의 환불을 요청하면 이를 환불 받을 수
          있습니다.
        </p>
        <p className="mb-2">
          ② 현행법령 및 중대한 약관 위반 등 회원의 귀책사유로 이용계약을
          해지하는 경우 환불이 제한될 수 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제7장 손해배상 및 면책조항</h2>
        <h3 className="text-xl font-semibold mt-4">제12조 (손해배상)</h3>
        <p className="mb-2">
          ① 회사가 고의 또는 중과실로 회원에게 손해를 끼친 경우, 손해에 대하여
          배상할 책임이 있습니다.
        </p>
        <p className="mb-2">
          ② 회원이 본 약관을 위반하여 회사에 손해를 끼친 경우, 회원은 회사에
          대하여 그 손해에 대하여 배상할 책임이 있습니다.
        </p>
        <h3 className="text-xl font-semibold mt-4">제13조 (면책조항)</h3>
        <p className="mb-2">
          ① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할
          수 없는 경우에는 책임이 면제됩니다.
        </p>
        <p className="mb-2">
          ② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임이
          면제됩니다.
        </p>
        <p className="mb-2">
          ③ 회사는 회원이 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한
          것에 대하여 책임이 면제됩니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">제8장 기타</h2>
        <h3 className="text-xl font-semibold mt-4">
          제14조 (회원에 대한 통지)
        </h3>
        <p className="mb-2">
          ① 회사가 회원에게 통지를 하는 경우 회원이 지정한 전자우편주소 등으로
          할 수 있습니다.
        </p>
        <p className="mb-2">
          ② 회사는 회원 전체에게 통지를 하는 경우 7일 이상 회사의 게임사이트의
          초기화면에 게시함으로써 통지에 갈음할 수 있습니다.
        </p>
        <h3 className="text-xl font-semibold mt-4">
          제15조 (재판권 및 준거법)
        </h3>
        <p className="mb-2">
          이 약관은 대한민국 법률에 따라 규율되고 해석되며, 회사와 회원 간에
          발생한 분쟁으로 소송이 제기되는 경우, 법령에 정한 절차에 따른 법원을
          관할 법원으로 합니다.
        </p>
        <h3 className="text-xl font-semibold mt-4">
          제16조 (회원의 고충처리 및 분쟁해결)
        </h3>
        <p className="mb-2">
          ① 회사는 회원의 편의를 고려하여 회원의 의견이나 불만을 제시하는 방법을
          게임 초기화면이나 게임서비스 홈페이지에서 안내합니다.
        </p>
        <p className="mb-2">
          ② 회사는 회원으로부터 제기되는 의견이나 불만이 정당하다고 객관적으로
          인정될 경우 합리적인 기간 내에 이를 신속하게 처리합니다.
        </p>
        <p className="mb-2">
          ③ 회사와 회원 간에 분쟁이 발생하여 제3의 분쟁조정기관이 조정할 경우
          회사는 이용제한 등 회원에게 조치한 사항을 성실히 증명하고, 조정기관의
          조정에 따를 수 있습니다.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">부칙</h2>
        <p className="mb-2">이 약관은 2024년 7월 1일부터 시행됩니다.</p>
      </section>
    </div>
  );
};
