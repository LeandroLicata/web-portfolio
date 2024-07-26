import React, { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  className: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  className,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
      {children}
    </section>
  );
}
