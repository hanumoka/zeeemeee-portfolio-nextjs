"use client";
import React, { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState(null);
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

        console.log(JSON.stringify(data));
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>projects</h1>
      </div>
    </main>
  );
}
