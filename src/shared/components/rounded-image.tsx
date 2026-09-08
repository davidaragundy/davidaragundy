import { type ComponentProps } from "react";
import Image from "next/image";

export const RoundedImage = ({
  alt,
  ...props
}: ComponentProps<typeof Image>) => {
  return <Image alt={alt} className="rounded-lg" {...props} />;
};
