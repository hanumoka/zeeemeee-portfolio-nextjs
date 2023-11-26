import Image from "next/image";

export default function ProjectItem({ data }: { data: any }) {
  const title = data.properties.Name.title[0].plain_text;
  const descrption = data.properties.Descrption.rich_text[0].plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start: string, end: string): number => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    // 월은 0부터 시작하므로 1을 빼줘야 합니다. 또한 `parseInt`를 사용하여 문자열을 숫자로 변환합니다.
    const startDate = new Date(
      parseInt(startDateStringArray[0], 10),
      parseInt(startDateStringArray[1], 10) - 1, // 월(month)은 0부터 시작합니다.
      parseInt(startDateStringArray[2], 10)
    );
    const endDate = new Date(
      parseInt(endDateStringArray[0], 10),
      parseInt(endDateStringArray[1], 10) - 1, // 월(month)은 0부터 시작합니다.
      parseInt(endDateStringArray[2], 10)
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    // `.getTime()` 메소드를 사용하여 날짜를 밀리초 단위의 타임스탬프로 변환합니다.
    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };

  // const calculatedPeriod = (start: string, end: string) => {
  //   const startDateStringArray = start.split("-");
  //   const endDateStringArray = end.split("-");

  //   const startDate = new Date(
  //     startDateStringArray[0],
  //     startDateStringArray[1],
  //     startDateStringArray[2]
  //   );
  //   const endDate = new Date(
  //     endDateStringArray[0],
  //     endDateStringArray[1],
  //     endDateStringArray[2]
  //   );

  //   console.log(`startDate: ${startDate}`);
  //   console.log(`endDate: ${endDate}`);

  //   const diffInMs = Math.abs(endDate - startDate);
  //   const result = diffInMs / (1000 * 60 * 60 * 24);

  //   console.log(`기간 : ${result}`);
  //   return result;
  // };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100"
        height="50"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{descrption}</h3>
        {/* <a href={github}>깃허브 바로가기</a> */}
        {/* <a href={youtube}>유튜브 시연영상 보러가기</a> */}
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
