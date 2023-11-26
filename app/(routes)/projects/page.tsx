"use client";
import ProjectItem from "@/app/_components/project/ProjectItem";
import React, { useEffect, useState } from "react";
import Head from "next/head";

interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: NotionCover | null;
  icon: any | null; // icon의 정확한 타입을 알 수 없으므로 any를 사용하거나 더 구체적인 타입 정의 필요
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: NotionProperties;
  url: string;
  public_url: string | null;
}

interface NotionUser {
  object: string;
  id: string;
}

interface NotionCover {
  type: string;
  external: {
    url: string;
  };
}

interface NotionProperties {
  Tags: NotionMultiSelectProperty;
  WorkPeriod: NotionDateProperty;
  GitHubLink: NotionUrlProperty;
  Descrption: NotionRichTextProperty;
  Name: NotionTitleProperty;
  // 추가적으로 필요한 다른 프로퍼티 타입들
}

interface NotionMultiSelectProperty {
  id: string;
  type: string;
  multi_select: Array<{
    id: string;
    name: string;
    color: string;
  }>;
}

interface NotionDateProperty {
  id: string;
  type: string;
  date: {
    start: string;
    end: string;
    time_zone: any | null; // time_zone의 정확한 타입을 알 수 없으므로 any를 사용하거나 더 구체적인 타입 정의 필요
  } | null;
}

interface NotionUrlProperty {
  id: string;
  type: string;
  url: string | null;
}

interface NotionRichTextProperty {
  id: string;
  type: string;
  rich_text: Array<{
    type: string;
    text: {
      content: string;
      link: any | null; // link의 정확한 타입을 알 수 없으므로 any를 사용하거나 더 구체적인 타입 정의 필요
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: string | null;
  }>;
}

interface NotionTitleProperty {
  id: string;
  type: string;
  title: Array<{
    type: string;
    text: {
      content: string;
      link: any | null; // link의 정확한 타입을 알 수 없으므로 any를 사용하거나 더 구체적인 타입 정의 필요
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: string | null;
  }>;
}

interface NotionResponse {
  data: {
    object: string;
    results: NotionPage[];
    next_cursor: string | null;
    has_more: boolean;
    type: string;
    page_or_database: any; // 이 부분의 정확한 타입을 알 수 없으므로 any를 사용하거나 더 구체적인 타입 정의 필요
    request_id: string;
  };
}

export default function Projects() {
  const [data, setData] = useState<NotionPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 외부 데이터 소스로부터 데이터를 가져옵니다.
    fetch(
      "/api",

      {
        method: "POST", // 또는 'POST', 'PUT' 등
      }
    )
      .then((response) => {
        // 응답이 성공적인지 확인합니다.
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);

        const projects: NotionResponse = data;

        setData(projects.data.results);
      })
      .catch((error) => {
        // 오류 처리를 합니다.
        setError(error);
        setLoading(false);
      });
  }, []); // 빈 의존성 배열로 마운트 시에만 실행합니다.

  if (loading) {
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Loading...</div>
    </main>;
  }

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Error: {error.message}</div>{" "}
      </main>
    );
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>하누모카 포트폴리오</title>
          <meta name="description" content="오늘도 빡코딩!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :<span className="pl-4 text-blue-500">{data.length}</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
          {data.map((item: NotionPage) => (
            <ProjectItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
