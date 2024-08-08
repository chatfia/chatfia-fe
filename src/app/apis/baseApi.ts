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
      return args;
    },

    response: async (response, requestArgs) => {
      console.log("********* after receiving response *********");
      console.log("URL:", requestArgs[0].toString());
      console.log("Request Init:", requestArgs[1], "\n\n");
      console.log("Response Status:", response.status);

      // 상태 코드가 200-299 범위 또는 201 Created인 경우
      if (response.ok || response.status === 201) {
        const contentType = response.headers.get("Content-Type");

        // JSON 응답 처리
        if (contentType && contentType.includes("application/json")) {
          try {
            const jsonResponse = await response.json();
            console.log("JSON 응답:", jsonResponse);
            return jsonResponse;
          } catch (error) {
            console.error("JSON 파싱 중 오류:", error);
            throw new Error("응답 데이터를 JSON으로 파싱할 수 없습니다");
          }
        }
        // 텍스트 응답 처리
        else if (contentType && contentType.includes("text/plain")) {
          try {
            const textResponse = await response.text();
            console.log("텍스트 응답:", textResponse);
            return textResponse;
          } catch (error) {
            console.error("텍스트 파싱 중 오류:", error);
            throw new Error("응답 데이터를 텍스트로 파싱할 수 없습니다");
          }
        }
        // 응답 본문이 없는 경우
        else {
          console.log("응답 본문 없음, 성공으로 간주");
          return null; // 아무 값도 반환하지 않음
        }
      }
      // 상태 코드가 200-299 범위 밖인 경우
      else {
        const errorMessage = `오류가 발생했습니다 (상태 코드: ${response.status})`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    },
  },
});
