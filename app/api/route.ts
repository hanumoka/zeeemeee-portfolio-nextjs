import { NextResponse } from "next/server";
import config from "../../config";

export async function POST(request: Request) {
  console.log("Notion Datagbase query POST...");

  const response = await fetch(
    `https://api.notion.com/v1/databases/${config.NOTION_DATABASE_ID}/query`,
    {
      method: "POST", // 또는 'POST', 'PUT' 등
      headers: {
        Authorization: `Bearer ${config.NOTION_TOKEN}`, // Bearer 토큰
        "Notion-Version": "2022-06-28", // 추가적인 사용자 정의 헤더
        "Content-Type": "application/json", // 필요한 경우
        Accetp: "application/json",
      },
      body: JSON.stringify({
        page_size: 100,
        sorts: [
          {
            property: "Name",
            direction: "ascending",
          },
        ],
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json({ data });
}
