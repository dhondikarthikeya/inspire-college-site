import React from "react";
import "./ScrollStack.css";

type ScrollStackProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollStackItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export default function ScrollStack({ children, className = "" }: ScrollStackProps) {
  return <div className={className}>{children}</div>;
}