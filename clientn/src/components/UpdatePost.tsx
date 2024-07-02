"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Spinner from "./Spinner";

const UpdatePost = ({
  id,
  name,

  update,
}: {
  id: number;
  name: string;

  update?: boolean | any;
}) => {
  const [newName, setName] = useState(name);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/items/` + id,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newName }),
        }
      );
      if (res.ok) {
        const form: any = e.target;
        form.reset();
        router.refresh();
      }
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {update && (
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={newName}
            className="px-3 py-2 rounded-md outline outline-none border my-2 w-full"
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          {loading ? (
            <Spinner />
          ) : (
            <button className="bg-sky-600  rounded-md px-3 py-2 w-full my-2 text-white">
              <p>Update</p>
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default UpdatePost;
