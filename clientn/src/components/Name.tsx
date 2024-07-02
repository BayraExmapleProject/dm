import getName from "@/utils/getName";
import React from "react";
import DeletePost from "./DeletePost";
import Link from "next/link";
import UpdatePost from "./UpdatePost";
import UpdateBtn from "./UpdateBtn";

const Name = async () => {
  const data: Promise<Data[]> = getName();
  const datas = await data;
  return (
    <>
      {" "}
      <h2 className="text-center font-bold  " style={{ fontSize: "30px" }}>
        List of student
      </h2>{" "}
      <main className="container">
        <div className="container grid grid-cols-2 gap-8 ">
          {datas.map((e) => (
            <div className="container" key={e.id}>
              <div className="my-3 bg-slate-300 rounded-md px-3 py-2 flex justify-between">
                <Link href={`/name/${e.id}`}>
                  <p className="py-2 px-3 font-bold capitalize">{e.name}</p>
                </Link>
                <DeletePost e={e.id} />
                <UpdateBtn id={e.id} name={e.name} />
                <div>
                  <UpdatePost id={e.id} name={e.name} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Name;
