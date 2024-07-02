import getNames from "@/utils/getNames";
import React from "react";
type Params = {
  params: { id: number };
};
const page = async ({ params }: Params) => {
  const datas: Promise<Data> = getNames(params.id);
  const data = await datas;
  return <>{data.name}</>;
};

export default page;
