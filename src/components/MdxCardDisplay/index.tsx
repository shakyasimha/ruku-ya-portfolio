"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/languageContext";
import {
  alegreyaSans,
  nithyaRanjana,
  notoSansDevanagari,
  notoSerifDevanagari,
  roboto,
} from "@/ui/fonts";

type Section = {
  header: string;
  cards: Card[];
};

type Card = {
  title: string;
  content: string[];
};

type MdxCardDisplayProps = {
  section: string; // MDX file name (e.g., "academics", "publications")
  filterSection?: string | null; // Section header to filter (e.g., "Books")
};

const font = {
  en: {
    headerFont: alegreyaSans.className,
    bodyFont: roboto.className,
  },
  ne: {
    headerFont: notoSerifDevanagari.className,
    bodyFont: notoSansDevanagari.className,
  },
  new: {
    headerFont: nithyaRanjana.className,
    bodyFont: roboto.className,
  },
};

export default function MdxCardDisplay({
  section,
  filterSection = null,
}: MdxCardDisplayProps) {
  const { lang } = useLanguage();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true);
        setError(null);

        // Fetch from API route
        const response = await fetch(
          `/api/mdx-content?section=${section}&lang=${lang}`,
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to load content");
        }

        const data = await response.json();
        setContent(data.content);
      } catch (err) {
        console.error("Error loading content:", err);
        setError(err instanceof Error ? err.message : "Failed to load content");
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, [lang, section]);

  // Parse markdown text into sections and cards
  function parseMarkdown(text: string): Section[] {
    // Safety check for undefined or null text
    if (!text) {
      return [];
    }

    const lines = text.split("\n");
    const sections: Section[] = [];
    let currentSection: Section | null = null;
    let currentCard: Card | null = null;
    let currentContent: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Skip empty lines and comments
      if (!line || line.startsWith("<!--")) continue;

      // Section header (##)
      if (line.startsWith("## ")) {
        // Save previous card if exists
        if (currentCard && currentSection) {
          currentCard.content = currentContent;
          currentSection.cards.push(currentCard);
          currentCard = null;
          currentContent = [];
        }

        // Create new section
        currentSection = {
          header: line.replace("## ", "").trim(),
          cards: [],
        };
        sections.push(currentSection);
      }
      // Card title (###)
      else if (line.startsWith("### ")) {
        // Save previous card if exists
        if (currentCard && currentSection) {
          currentCard.content = currentContent;
          currentSection.cards.push(currentCard);
        }

        // Create new card
        currentCard = {
          title: line.replace("### ", "").trim(),
          content: [],
        };
        currentContent = [];
      }
      // Horizontal rule (end of card)
      else if (line.startsWith("---")) {
        if (currentCard && currentSection) {
          currentCard.content = currentContent;
          currentSection.cards.push(currentCard);
          currentCard = null;
          currentContent = [];
        }
      }
      // Content lines
      else if (currentCard) {
        if (line) {
          currentContent.push(line);
        }
      }
    }

    // Save last card if exists
    if (currentCard && currentSection) {
      currentCard.content = currentContent;
      currentSection.cards.push(currentCard);
    }

    return sections;
  }

  // Render content with proper formatting (bold, links, etc.)
  function renderContentLine(line: string) {
    // Handle bold text (__text__)
    let processed = line.replace(
      /__(.+?)__/g,
      '<strong class="font-semibold text-gray-900">$1</strong>',
    );

    // Handle markdown links [text](url)
    processed = processed.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-red-700 hover:text-red-800 underline transition-colors">$1</a>',
    );

    return <span dangerouslySetInnerHTML={{ __html: processed }} />;
  }

  // Render title with link support (for ### headers)
  function renderTitle(title: string) {
    // Handle markdown links [text](url)
    const processed = title.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-red-700 hover:text-red-800 underline transition-colors">$1</a>',
    );

    return <span dangerouslySetInnerHTML={{ __html: processed }} />;
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  // Parse content into sections
  let sections = parseMarkdown(content);

  // Filter to specific section if filterSection is provided
  if (filterSection) {
    sections = sections.filter(
      (s) => s.header.toLowerCase() === filterSection.toLowerCase(),
    );
  }

  // No content state
  if (sections.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No content available.
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-6 mt-6 mb-6">
          {/* Section Header (## headers) - Always show */}
          <h3
            className={`${font[lang].headerFont} text-2xl font-bold text-red-700 text-center mb-6`}
          >
            {section.header}
          </h3>

          {/* Cards Container - Vertical Stack */}
          <div className="space-y-4">
            {section.cards.map((card, cardIndex) => (
              <div
                key={cardIndex}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300"
              >
                {/* Card Title (### headers) - Bold with link support */}
                <h4
                  className={`${font[lang].headerFont} font-bold text-lg text-gray-900 mb-4 border-b border-gray-100 pb-2`}
                >
                  {renderTitle(card.title)}
                </h4>

                {/* Card Content - Each line on new line */}
                <div
                  className={`${font[lang].bodyFont} space-y-2 text-gray-700 text-sm leading-relaxed`}
                >
                  {card.content.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="hover:text-gray-900 transition-colors"
                    >
                      {renderContentLine(line)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
