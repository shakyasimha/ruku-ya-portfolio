import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const section = searchParams.get("section");
  const lang = searchParams.get("lang");

  if (!section || !lang) {
    return NextResponse.json(
      { error: "Missing section or lang parameter" },
      { status: 400 },
    );
  }

  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "content",
      lang,
      `${section}.mdx`,
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `File not found: ${lang}/${section}.mdx` },
        { status: 404 },
      );
    }

    const content = fs.readFileSync(filePath, "utf8");

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}
