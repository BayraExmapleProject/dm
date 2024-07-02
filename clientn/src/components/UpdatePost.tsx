"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import Spinner from "./Spinner";

const UpdatePost = ({
  id,
  name,
  email,
  comment,
  update,
}: {
  id: number;
  name: string;
  email: string;
  comment: string;
  update?: boolean | any;
}) => {
  const [newName, setName] = useState(name);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [newEmail, setEmail] = useState(email);
  const [newComment, setComment] = useState(comment);
  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/items/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newName }),
      });
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
