"use client";
import React, { useState } from "react";
import UpdatePost from "./UpdatePost";

const UpdateBtn = ({
  id,
  name,
  email,
  comment,
}: {
  id: number;
  name: string;
  email: string;
  comment: string;
}) => {
  const [update, setUpdate] = useState(false);

  return (
    <div>
      <button
        onClick={() => setUpdate(!update)}
        className="bg-green-600 rounded-md px-2 py-1.5 text-white"
      >
        {update ? <p>Close</p> : <p>Update</p>}
      </button>
      <UpdatePost
        id={id}
        name={name}
        email={email}
        comment={comment}
        update={update}
      />
    </div>
  );
};

export default UpdateBtn;
