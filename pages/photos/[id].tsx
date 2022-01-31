import { useRouter } from "next/router";
import React from "react";

const Photo = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Photo: {id}</div>;
};

export default Photo;
