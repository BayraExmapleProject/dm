"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Spinner from "./Spinner";

const CreateName = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async (e: FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (res.ok) {
        console.log("ok");
      }
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="grid place-items-center">
      <h1 className="text-center font-extrabold" style={{ fontSize: "50px" }}>
        Digital MilCard
      </h1>
      <form onSubmit={onSubmitHandler} className="">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-3 py-2 rounded-md outline outline-none border my-2 w-full"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        {loading ? (
          <Spinner />
        ) : (
          <button className="bg-sky-600  rounded-md px-3 py-2 w-full my-2 text-white">
            <p>Check</p>
          </button>
        )}
      </form>
    </div>
  );
};

export default CreateName;
