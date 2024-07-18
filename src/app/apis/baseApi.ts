import returnFetch from "return-fetch";

// return-fetch를 사용하여 확장된 fetch 함수
export const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  interceptors: {
    request: async (args) => {
      args[1] = {
        ...args[1],
        credentials: "include",
      };

      console.log("********* before sending request *********");
      console.log("URL:", args[0].toString());
      console.log("Request Init:", args[1], "\n\n");
      console.log("쿠키 포함 여부 확인:", document.cookie);
      return args;
    },
    response: async (response, requestArgs) => {
      console.log("********* after receiving response *********");
      console.log("URL:", requestArgs[0].toString());
      console.log("Request Init:", requestArgs[1], "\n\n");

      if (!response.ok) {
        // 응답 상태 코드가 200-299 범위가 아닐 경우, 에러를 처리
        try {
          const data = await response.json(); // 응답 본문을 JSON 형태로 파싱
          let errorMessage = `오류가 발생했습니다 (상태 코드: ${response.status})`;

          if (data && data.message) {
            errorMessage = data.message;
          } else if (data && data.error) {
            errorMessage = `${data.error} (상태 코드: ${response.status})`;
          }

          console.error(`응답 에러: ${errorMessage}`);
          throw new Error(errorMessage);
        } catch (err) {
          console.error(`응답 파싱 실패 (상태 코드: ${response.status})`, err);
          throw new Error(`응답 파싱 실패 (상태 코드: ${response.status})`);
        }
      }

      // 응답 데이터 로그
      try {
        const data = await response.json();
        console.log("응답 데이터:", data);
        return new Response(JSON.stringify(data), {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      } catch (err) {
        console.error("응답 데이터를 파싱할 수 없습니다:", err);
        throw new Error("응답 데이터를 파싱할 수 없습니다");
      }
    },
  },
});
