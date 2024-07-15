import returnFetch from "return-fetch";

// return-fetch를 사용하여 확장된 fetch 함수
export const fetchExtended = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
  interceptors: {
    request: async (args) => {
      // 요청이 전송되기 전에 실행되는 요청 인터셉터
      console.log("********* before sending request *********");
      console.log("URL:", args[0].toString());
      console.log("Request Init:", args[1], "\n\n");

      // args[1]이 undefined일 경우 초기화
      if (!args[1]) {
        args[1] = {};
      }

      // 토큰을 가져와 Authorization 헤더에 추가
      const token = localStorage.getItem("token");
      if (token) {
        args[1].headers = {
          ...args[1].headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return args;
    },
    response: async (response, requestArgs) => {
      // 응답이 수신된 후에 실행되는 응답 인터셉터
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
          throw new Error(`응답 파싱 실패 (상태 코드: ${response.status})`);
        }
      }

      return response;
    },
  },
});
