"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Spinner from "./Spinner";

const DeletePost = ({ e }: { e: number }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  async function handleDelete(id: number) {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/items/` + id,
        {
          method: "DELETE",
        }
      );

      if (res.ok) router.refresh();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      {" "}
      {loading ? (
        <Spinner />
      ) : (
        <button
          onClick={() => handleDelete(e)}
          className="bg-red-600 rounded-md px-2 py-1.5 text-white"
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default DeletePost;
