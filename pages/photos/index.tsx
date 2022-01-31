import Link from "next/link";
import React from "react";

const defaultPhotoIds = [1, 2, 3, 4, 5];
const Photos = () => {
  return (
    <>
      <h2>Photos</h2>
      <ul>
        {defaultPhotoIds.map((id) => (
          <Link href={`/photos/${id}`}>
            <li>
              <a>{id}</a>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Photos;
