"use client";

import { useLanguage } from "@/lib/languageContext";
import { mdxContent } from "@/content";

type MdxContentProps = {
  section: string; // e.g., "academics", "work", "affiliations", etc.
};

export default function MdxContent({ section }: MdxContentProps) {
  const { lang } = useLanguage();
  const Content = mdxContent[section][lang];
  return <Content />;
}
