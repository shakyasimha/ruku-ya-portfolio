"use client";

import { mdxContent } from "@/content";

type MdxContentProps = {
  section: keyof typeof mdxContent;
  lang: "en" | "ne" | "new";
};

export default function MdxContent({ section, lang }: MdxContentProps) {
  const Content = mdxContent[section][lang];
  return <Content />;
}
