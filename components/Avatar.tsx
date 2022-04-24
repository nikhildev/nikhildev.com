import Image from "next/image";
import { HTMLAttributes } from "react";
import { FC } from "react";

type Props = {
  src: string;
  displayName: string;
};

const Avatar = (props: Props & HTMLAttributes<HTMLDivElement>) => (
  <div className={`avatar ${props.className}`}>
    <div className="w-8 ring-1 ring-secondary rounded-full">
      <Image
        height={24}
        width={24}
        alt={props.displayName}
        src={props.src}
        layout="responsive"
      />
    </div>
  </div>
);

export default Avatar;
