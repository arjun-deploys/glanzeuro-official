import { ReactNode } from "react";

export default function SectionLabel({
  number,
  children,
  light = false,
  numberWhite = false,
}: {
  number: string;
  children: ReactNode;
  light?: boolean;
  numberWhite?: boolean;
}) {
  return (
    <div className={`section-label ${light ? "section-label--light" : ""}`}>
      <span className={numberWhite ? "text-white!" : ""}>{number}</span>
      <span>{children}</span>
    </div>
  );
}
