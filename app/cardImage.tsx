"use client"
import Image from 'next/image';

export default function CardImage({ id, face, endpoint, name = "", key }: any) {

  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_API_HOST}/api/storybuilders/${endpoint}/image/${id}/${face}`}
      unoptimized={true}
      key={`${id}_types_0_${key}`}
      alt={`${name}_${face}`}
      width="150"
      height="150" />
  )
}