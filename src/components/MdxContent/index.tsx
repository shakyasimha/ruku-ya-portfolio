"use client";

import { useLanguage } from "@/lib/languageContext";
import { mdxContent } from "@/content";

type MdxContentProps = {
  section: keyof typeof mdxContent; // Type-safe section prop
};

export default function MdxContent({ section }: MdxContentProps) {
  const { lang } = useLanguage();
  const Content = mdxContent[section][lang];
  return <Content />;
}