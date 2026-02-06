import {
  GraduationCap,
  Briefcase,
  Users,
  Award,
  Trophy,
  Languages,
  BookOpen,
  Building2,
  Handshake,
  Scroll,
  University,
  Pencil,
} from "lucide-react";

export const experienceTabs = [
  {
    id: 0,
    icon: GraduationCap,
    label: {
      en: "Academics",
      ne: "शिक्षा",
      new: "",
    },
    content: "academics",
    section: null,
  },
  {
    id: 1,
    icon: Briefcase,
    label: {
      en: "Work Experience",
      ne: "पेशागत अनुभव",
      new: "",
    },
    content: "work",
    section: null,
  },
  {
    id: 2,
    icon: Users,
    label: {
      en: "Affiliations",
      ne: "",
      new: "",
    },
    content: "affiliations",
    section: null,
  },
  {
    id: 3,
    icon: Trophy,
    label: {
      en: "Fellowships",
      ne: "",
      new: "",
    },
    content: "fellowship",
    section: null,
  },
  {
    id: 4,
    icon: Award,
    label: {
      en: "Awards",
      ne: "",
      new: "",
    },
    content: "awards",
    section: null,
  },
  {
    id: 5,
    icon: Languages,
    label: {
      en: "Languages",
      ne: "भाषा",
      new: "",
    },
    content: "language",
    section: null,
  },
];

export const publicationTabs = [
  {
    id: 0,
    icon: BookOpen,
    label: {
      en: "Books",
      ne: "पुस्तक",
      new: "सफू",
    },
    content: "publications",
    section: {
      en: "Books",
      ne: "पुस्तक", // Section header in Nepali MDX
      new: "सफू", // Section header in Newari MDX
    },
  },
  {
    id: 1,
    icon: Building2,
    label: {
      en: "Authored as an Organization",
      ne: "संगठनवद्ध लेखन",
      new: "",
    },
    content: "publications",
    section: {
      en: "Authored as an organisation",
      ne: "संगठनवद्ध लेखन",
      new: "",
    },
  },
  {
    id: 2,
    icon: Pencil,
    label: {
      en: "Articles",
      ne: "लेख",
      new: "",
    },
    content: "publications",
    section: {
      en: "Articles",
      ne: "लेख",
      new: "",
    },
  },
  {
    id: 3,
    icon: Handshake,
    label: {
      en: "Co-authored",
      ne: "सह-लेखन",
      new: "",
    },
    content: "publications",
    section: {
      en: "Co-authored",
      ne: "सह-लेखन",
      new: "",
    },
  },
  {
    id: 4,
    icon: University,
    label: {
      en: "Academic Papers",
      ne: "शैक्षणिक लेखन",
      new: "",
    },
    content: "publications",
    section: {
      en: "Academic Papers",
      ne: "शैक्षणिक लेखन",
      new: "",
    },
  },
  {
    id: 5,
    icon: Scroll,
    label: {
      en: "Journal",
      ne: "जर्नल",
      new: "",
    },
    content: "publications",
    section: {
      en: "Journal",
      ne: "जर्नल",
      new: "",
    },
  },
];
