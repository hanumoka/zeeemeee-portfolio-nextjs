import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET...");
  const res = await fetch(
    "https://api.notion.com/v1/databases/8a1703dbb7154c34b29dd0ecd04594f0/query"
  );

  const data = await res.json();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  console.log("POST...");
  // console.log(request);

  const response = await fetch(
    "https://api.notion.com/v1/databases/8a1703dbb7154c34b29dd0ecd04594f0/query",
    {
      method: "POST", // 또는 'POST', 'PUT' 등
      headers: {
        Authorization:
          "Bearer secret_sFyAOKw0xFmcDBxq38V406Ktj2hIpWKJDMPoHTc8qw", // Bearer 토큰
        "Notion-Version": "2022-06-28", // 추가적인 사용자 정의 헤더
        "Content-Type": "application/json", // 필요한 경우
        Accetp: "application/json",
      },
    }
  );

  const data = await response.json();

  return NextResponse.json({ data });
}
