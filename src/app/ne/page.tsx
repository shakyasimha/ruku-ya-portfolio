import { newaLipi } from "@/ui/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { nepalSambat, nepalSambatNewa } from "@/lib/fetchYear";

// Metadata
export const metadata = {
  title: '𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 - Rukshana Kapali'
};

// Main component
export default function Home() {
  const year = '𑐣𑐾.𑐳𑑄. '+nepalSambatNewa(nepalSambat());

  return (
    <div className={`${newaLipi.className} flex flex-col min-h-screen`}>
      {/* Header section */}
      <Header title="𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶"/>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className="flex-1 md:mr-4 mx-4">
          {/* About Me */}
          <div>
            <h2 className="text-xl font-bold text-red-700">𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
            𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑐵 𑐂𑐮𑐫𑑂 𑐟𑐵𑐎 𑐠𑑂𑐫𑑄 𑐧𑐮𑐫𑑂 𑐖𑐶𑐐𑐸 𑐖𑑂𑐫𑐵 𑐩𑐹𑐎𑐠𑑄 𑐨𑐵𑐫𑑂, 𑐫𑐎𑑂𑐰𑐖𑐵𑑅𑐴𑑂𑐩𑐫𑐟𑐵 𑐰 𑐎𑐵𑐣𑐸𑐣 𑐮𑐶𑐳𑐾𑑄 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵 𑐰 𑐣𑐾𑐰𑐵𑑅𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐳𑐸𑐂 𑐎𑑂𑐰𑐳𑑂𑐫𑐹 𑐰𑐣 𑑋 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐩𑐵𑐮𑐾𑐎𑐸𑐮𑐾𑐖𑑂𑐫𑐵 𑐰 𑐮𑑂𑐰𑐎 𑐰𑐵𑑅𑐔𑐵𑑅 𑐠𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐖𑑂𑐰𑐮𑑄 𑐥𑐶𑐠𑐣𑐾𑐐𑐸 𑐰 𑐥𑐬𑐐𑑂𑐫𑐵𑑃 𑐔𑑂𑐰𑐳𑐸 𑐠𑐾𑑄 𑐖𑑂𑐰𑑅𑐐𑐸 𑐐𑑂𑐫𑐵𑑄 𑐧𑐶𑐂𑐐𑐸 𑐖𑑂𑐰𑐮𑑄 𑐡𑐫𑐾𑐎𑐾𑐐𑐸𑐮𑐶𑐂 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵 𑑋 𑐠𑑂𑐰𑐫𑐵 𑐮𑐶𑐳𑐾𑑄 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐣𑑂𑐫𑐵𑑅𑐎𑐸𑐠𑐶𑐂 𑐂𑐣𑐵𑐥 𑐟𑐫𑐵𑑅 𑐎𑐵𑐣𑐸𑐣 𑐥𑐵𑐏𑐾𑑄 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐫𑐾𑐐𑐸 𑐰 𑐖𑑂𑐫𑐵𑐔𑐸 𑐴𑐶𑐮𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋
            </p>
          </div>
          
          {/* Demographics */}
          <div>
            <h2 className="text-xl font-bold text-red-700">𑐩𑐶𑐮𑑂𑐫𑐵𑑅𑐖𑑂𑐫𑐵𑐳𑐸</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐩𑐶𑐳𑐵 𑐧𑐵 𑐴𑐶𑐮𑐵𑐩𑐶𑐳𑐵 𑐏𑑅 𑑋 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂 𑐖𑐶𑑄 She/Her 𑐥𑐮𑐶𑐣𑐵𑑄 𑐕𑑂𑐫𑐮𑐵 𑑋 𑐀𑐠𑐾 𑐴𑐾 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐣𑐵𑐏𑑃𑐐𑑂𑐰𑑅 Ms. 𑐢𑐎𑐵𑑅 𑐕𑑂𑐫𑐮𑐵 𑑋 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐣𑐵𑐏𑑃𑐐𑑂𑐰𑑅 𑐩𑐡𑐸𑐐𑐸 𑐖𑐸𑐫𑐵𑑅 ‘𑐳𑐸𑐱𑑂𑐬𑐷 / 𑐱𑑂𑐬𑐷𑐩𑐟𑐷‘𑐫𑐵 𑐠𑐵𑐳𑐫𑑂 ‘𑐱𑑂𑐬𑐷‘ 𑐢𑐎𑐵𑑅 𑐕𑑂𑐫𑐮𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵𑐫𑑂 𑐮𑐵 𑐩𑐫𑑂‌𑐖𑐸 𑐏𑑃𑐐𑑂𑐰𑑅 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐾 𑐏𑑃𑐐𑑂𑐰𑑅 𑐖𑐸𑐮 𑑋

              𑐖𑐶𑑄 𑐠𑑅𑐐𑐸 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅 𑐨𑑂𑐰𑐫𑐔𑐵𑐩𑐶 𑐰 𑐕𑑂𑐰𑐵𑐮𑐸 𑐢𑐎𑐵𑑅 𑐠𑐸𑐂𑐎𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋

              𑐖𑐶 𑐣𑐷𑐳𑑂𑐰𑐡𑑃 𑐦𑐸𑐣𑐵𑑅 𑐣𑐷𑐥𑑂𑐫𑐡𑑃𑐫𑑂 𑐔𑑂𑐰𑐣𑐵 𑐔𑑂𑐰𑐣𑐵𑐴𑑂𑐩 𑐏𑑅 𑑋 𑐖𑐶𑐐𑐹 𑐧𑐸𑐴𑑂𑐣𑐶 𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 𑐎𑐠𑑄 𑐣𑐾𑐥𑐵𑐮 𑐳𑐩𑑂𑐧𑐟 𑑑𑑑𑑑𑑑 𑐔𑐶𑐮𑐵 𑑑𑑖 𑐏𑑅 𑐢𑐵𑑅𑐳𑐵 𑐩𑐶𑐮𑐵𑐮𑑂𑐫𑐵𑑅 𑐎𑐠𑑄 𑐔𑐶𑐮𑐵𑐐𑐵𑑅 𑐳𑑂𑐰𑐩𑐶𑐮𑐵 (𑐟𑐶𑐟𑐶𑐫𑐵) 𑐏𑐸𑐴𑑂𑐣𑐸 𑐮𑐵𑑅 𑑋

              𑐖𑐶𑐐𑐹 𑐡𑐾𑐫𑑂‌𑐳𑐸 𑐣𑐾𑐥𑐵𑑅𑐩𑐶 𑐏𑑅 𑑋 𑐖𑐶 𑐧𑑃𑐩𑐶 𑐣𑐾𑐰𑐵𑑅 𑐖𑐵𑐟𑐶𑐫𑐵𑐴𑑂𑐩 𑐏𑑅 𑑋 𑐣𑐾𑐰𑐵𑑅 𑐡𑐸𑐣𑐾 𑐖𑐶 𑐖𑐸𑐐𑐶 𑐖𑐵𑐟𑐫𑑂 𑐮𑐵𑑅 𑑋

              𑐖𑐶𑐐𑐹 𑐧𑐸𑐳𑐾𑑄 𑐰𑑅𑐐𑐸 𑐟𑐸𑐟𑐶 𑐧𑑂𑐫𑐎𑑂𑐰𑑅-𑐔𑐵𑑅𑐟𑐹 (bilateral clubfeet) 𑐫𑐵 𑐰𑐵𑐳𑑅 𑐰 𑐳𑐸𑐳𑐵𑑅 𑐫𑐵𑐣𑐵𑑅 𑐮𑑂𑐫𑑄𑐥𑐸𑐮𑑂𑐫𑑅 𑐏𑐹 (residual disability) 𑐠𑐵𑑅𑐣𑐶 𑑋
            </p>
          </div>

          {/* Academic Qualification */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐧𑐶𑐊 𑐊𑐮𑐊𑐮𑐧𑐶 𑑋 <br/>
              𑐳𑑂𑐰𑐐𑐹𑐐𑐸 𑐡𑑃𑐫𑑂 𑐧𑑂𑐰𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — <Link href="https://chbea.com/" className={`${newaLipi.className} font-bold mx-4 text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >𑐔𑐎𑐬𑐧𑐟𑐶 𑐊𑐖𑐸𑐎𑐾𑐳𑐣 𑐁𑐎𑐵𑐡𑐾𑐩𑐶 𑑋</Link> <br/>
              𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — <Link href="https://www.pusc.edu.np/" className={`${newaLipi.className} font-bold mx-4 text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >𑐥𑐸𑐬𑑂𑐧𑐵𑐘𑑂𑐔𑐮 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋</Link> <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐧𑐶𑐊 — 𑐨𑐵𑐫𑑂 𑐡𑐸𑐳𑐶𑐂𑐎𑐵 𑐰 𑐩𑐶𑐥𑐸𑐔𑑅 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 𑑋 <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐡𑑃𑐫𑑂 𑐟𑐵𑑅𑐮𑐵𑑅𑐐𑐸 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — 𑐟𑐶𑐬𑐔𑐣𑑂𑐣 𑐟𑑅𑐟𑐵𑐠𑐷 𑐠𑑃𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋 <br/>
              𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — 𑐟𑐶𑐬𑐨𑐸𑐧𑐣 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑑑𑑒 𑐐𑐹 𑐟𑐐𑐶𑑄 (+𑑒) 𑐟𑐐𑐶𑑄 𑑋 <br/>
              𑐣𑐾.𑐳𑑄 𑑑𑑑𑑓𑑗 𑐡𑑃𑐫𑑂 𑐟𑐵𑑅𑐮𑐵𑑅𑐐𑐸 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — 𑐊𑐩𑑂𑐳 𑐁𑐎𑐵𑐡𑐾𑐩𑐶 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑑑𑑐 𑐐𑐹 𑐟𑐐𑐶𑑄 (𑐊𑐳𑐊𑐮𑐳𑐶 𑐟𑐐𑐶𑑄) 𑑋 <br/>
              𑐣𑐾.𑐳𑑄 𑑑𑑑𑑓𑑔 𑐡𑑃𑐫𑑂 𑐟𑐵𑑅𑐮𑐵𑑅𑐐𑐸 𑑋 <br/>
            </p>   
          </div>

          {/* Fellowships */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐧𑑂𑐰𑐣𑐾𑐟𑐶𑐧𑑅 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐫𑑂 𑐳𑑅𑐟𑐫𑐾𑐐𑐸𑐖𑑂𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐟𑐶𑐧𑑅 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑋 <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐊𑐳𑐶𑐫𑐵-𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐳𑐘𑑂𑐖𑐵𑑅 𑑋 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑑄𑐮𑐵 – 𑐎𑑁𑐮𑐵 𑑋 <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐀𑐔𑑅𑐮𑐵𑐫𑐾𑐦𑐸𑐥𑐶𑑄 𑐩𑐶𑐰𑐵𑑄𑐎𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐣𑐶𑐟𑐶𑑄 𑐐𑐣𑐵𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐧𑐶𑐂𑐐𑐸 𑐎𑐠𑑄𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐟𑐶𑐧𑑅𑑋 <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐫𑐬𑑂𑐎 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐫𑐬𑑂𑐎, 𑐧𑐾𑐮𑐵𑐂𑐟 𑑋 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐫𑑄𑐮𑐵 – 𑑑𑑑𑑔𑑐 𑐠𑐶𑑄𑐮𑐵 𑑋 <br/>
            </p> 
          </div>

          {/* Institutes */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐳𑑂𑐫𑐣𑐾𑐎𑐣𑐾 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐨𑐵𑐫𑑂 (𑐮𑑂𑐫𑐵𑐨𑐾𑐣𑑂𑐡𑐬 𑐮𑑂𑐫𑐵𑐒𑐐𑐸𑐰𑐾𑐖) 𑐳𑑂𑐫𑐣𑐾𑐎𑐣𑐾 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑋 <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐦𑑂𑐮𑐬𑐶𑐡𑐵 𑐫𑐟𑐮𑐵𑐣𑑂𑐟𑐶𑐎 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐦𑑂𑐮𑐬𑐶𑐡𑐵, 𑐀𑐩𑐾𑐮𑐶𑐎𑐵 𑑋 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐟𑐕𑐮𑐵 – 𑐡𑐶𑐮𑐵 𑑋 <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐡𑐸𑐠𑑂𑐫𑐵𑑅𑐳𑐸 𑐴𑐮𑐶𑑄 𑐴𑑂𑐣𑑂𑐫𑐮𑐸𑐰𑐵𑑅 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐣𑐵𑐫𑐵 𑐟𑐵𑐥𑐮𑐵 𑐳𑑂𑐫𑐣𑐾𑐎𑐣𑐾 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 (𑐂𑐐𑑂𑐮𑐶) 𑑋 <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐖𑑂𑐰𑐳𑐾𑐦 𑐎𑑂𑐰𑐬𑐧𑐾𑐮 𑐡𑐾𑐫𑑂‌𑐳𑑄𑐡𑐾𑐫𑑂 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐡𑐾𑐣𑑂𑐨𑐬 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐎𑑂𑐰𑐮𑐬𑐵𑐡𑑂𑐰, 𑐀𑐩𑐾𑐮𑐶𑐎𑐵 𑑋 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐐𑐸𑑄𑐮𑐵 𑑋 <br/>
            </p>  
          </div>

          {/* MOOCs */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐀𑐣𑐮𑐵𑐂𑐣 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐨𑐵𑐫𑑂 𑐴𑑂𑐮𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 : 𑐴𑑂𑐣𑐣𑐵𑐰𑐣𑐾𑐟𑑂𑐫𑑄𑐐𑐸 𑐨𑐵𑐫𑑂‌𑐫𑐵𑐐𑐸 𑐮𑐶𑐰𑐃 𑐎𑑂𑐰𑐵𑐟𑐸𑐎𑐾𑐐𑐸 (<b>Lang101x</b>) 𑑋 <br/>
              𑐡𑑃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐰𑐮𑑄 : 𑐫𑐵𑐡𑐶𑐮𑐾𑐡 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋 <br/>
              𑐡𑐧𑐹 : 𑐊𑐡-𑐊𑐎𑑂𑐳 (𑐳𑑂𑐰𑐵𑐥𑐹) 𑑋 <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐧𑑃𑐩𑐶 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 𑐥𑐵𑐏𑐾𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐴𑐣𑐵𑐖𑑂𑐫𑐵 (<b>IndEdu200x</b>) 𑑋 <br/>
              𑐡𑑃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐰𑐮𑑄 : 𑐧𑐶𑐬𑐟𑐶𑐳 𑐎𑑂𑐰𑐮𑐩𑑂𑐧𑐶𑐫𑐵 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋 <br/>
              𑐡𑐧𑐹 : 𑐊𑐡-𑐊𑐎𑑂𑐳 (𑐳𑑂𑐰𑐵𑐥𑐹). <br/>
            </p>
          </div>

          {/* Language Proficiency */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐳𑑅𑐐𑐸 𑐨𑐵𑐫𑑂</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <ul className="list-disc ml-8">
                <li> 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳 — 𑐩𑐵𑑄𑐨𑐵𑐫𑑂, 𑐦𑐸𑐎𑑂𑐎 𑐳𑑅 𑑋 </li>
                <li> 𑐏𑐫𑑂 𑐨𑐵𑐫𑑂 — 𑐦𑐸𑐎𑑂𑐎 𑐳𑑅 𑑋 </li>
                <li> 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐫𑑂 — 𑐦𑐸𑐎𑑂𑐎 𑐳𑑅 𑑋 </li>
                <li> 𑐴𑐶𑐣𑑂𑐡𑐶 𑐨𑐵𑐫𑑂 — 𑐁𑐥𑐮𑑄 𑐳𑑅 𑑋 </li>
                <li> 𑐄𑐬𑑂𑐡𑐸 𑐨𑐵𑐫𑑂 — 𑐫𑐎𑑂𑐰𑐠𑐾𑑄 𑐏𑑃 𑐳𑑅 𑑋 </li>
                <li> 𑐟𑐵𑐩𑐵𑐒 𑐨𑐵𑐫𑑂 — 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐟𑐐𑐶𑐩𑐫𑑂 𑐟𑐶𑐣𑐶 𑑋 </li>
                <li> 𑐳𑑃𑐫𑑂 𑐨𑐵𑐫𑑂 — 𑐡𑐠𑐸 𑐟𑐐𑐶𑐩𑐫𑑂 𑐟𑐶𑐣𑐶 𑑋 </li>
                <li> 𑐣𑐾𑐥𑐵𑑅 𑐴𑑂𑐮𑐵𑑅 𑐨𑐵𑐫𑑂 — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 𑑋 </li>
                <li> 𑐧𑐵𑐒𑐐𑐮𑐵 𑐨𑐵𑐫𑑂 — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 𑑋 </li>
                <li> 𑐥𑑂𑐬𑐵𑐎𑑂𑐬𑐶𑐟 — 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐟𑐐𑐶𑐩𑐫𑑂 𑐟𑐶𑐣𑐶 𑑋 </li>
                <li> 𑐫𑐵𑐎𑑂𑐠𑐸𑐒 (𑐮𑐶𑐩𑑂𑐧𑐸) — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 𑑋 </li>
                <li> 𑐔𑐶𑐣 𑐨𑐵𑐫𑑂 — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 𑑋</li>
              </ul>
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              𑐨𑐵𑐫𑑂‌𑐫𑐵 𑐳𑑂𑐫𑐹𑐟𑐵𑑅𑐫𑐵 𑐏𑑃𑐫𑑂 𑐩𑐾𑐐𑐸 𑐕𑐟𑐵 𑐔𑑂𑐰𑐳𑐸𑐂 𑐢𑑂𑐰𑐵𑐠𑐸𑐂𑐎𑐵𑑅 𑐟𑐫𑐵𑐐𑐸 𑐡𑐸 𑑋 𑐄𑐐𑐸 𑐔𑑂𑐰𑐳𑐸 𑐧𑑂𑐰𑐣𑐾𑐟𑑅 𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃 𑑋
            </p>
          </div>

          {/* Working Experiences */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐫𑐵𑐫𑐾 𑐣𑑄𑐐𑐸 𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐎𑑂𑐰𑐫𑑂‌𑐬 𑐫𑐸𑐠 𑐐𑑂𑐬𑐸𑐥 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐡𑐶𑐮𑐵 𑐣𑐶𑐳𑐾𑑄 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐡𑐶𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐡𑐶𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵, 𑐡𑐸𑐳𑐶𑐂𑐎𑐵 𑐰 𑐟𑐖𑐶𑐮𑐖𑐶 𑐎𑐰𑑅 (𑐫𑐸𑐣𑐾𑐳𑑂𑐎𑑀) 𑐫𑐵 𑐎𑐸𑐬𑐸𑐒 𑐠𑐾𑐥 (𑐧𑐵𑐫𑑂‌𑐒𑐎𑐎) 𑐖𑑂𑐫𑐵𑐎𑐸𑐠𑐶 <br/>
              𑐟𑐵𑑅𑐟𑐸𑑄𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 : 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅, 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐰 𑐫𑐔𑐵 𑐟𑐵𑐖𑐶𑐫𑐵 𑐮𑐶𑐢𑑄𑐳𑐵𑐫𑑂 𑐢𑑂𑐫𑐵𑐎𑑂𑐰𑐫𑑂 𑐮𑐵𑐎𑐵𑐟𑑅𑐥𑐶𑑄 𑐡𑐸𑐠𑑂𑐫𑐵𑑅𑐐𑐸 𑐧𑑂𑐰𑐣𑐾𑐏𑑂𑐫𑑅𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐟𑑅𑐟𑐵 𑐡𑐾𑐳𑐫𑑂 𑐧𑑂𑐫𑐵𑑅𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐟𑐵𑑅𑐟𑐸𑑄𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅𑐫𑐵 𑐮𑐶𑐢𑑄𑐳𑐵 𑐥𑐸𑐔𑑅 (𑐴𑑂𑐣𑐵𑐥𑐵 𑐮𑐵𑐐𑐵 𑐎𑐸𑐟𑑅 𑐮𑐶𑐢𑑄𑐳𑐵 𑐥𑐸𑐔𑑅) 𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑘 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐧𑐡𑐶 𑐊𑐣𑑂𑐡 𑐡𑐵𑐟𑐵 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐳𑐶𑐮𑐵 — 𑐔𑐶𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐎𑐰𑑅𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐎𑐕𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐳𑐴𑐵𑐫𑐩𑑂 𑐣𑐾𑐥𑐵𑐮 <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐫𑑄𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐠𑐣 𑐴𑐾, 𑐁𑑅 𑐴𑐾, 𑐣𑐾𑐥𑐵𑑅 (𑐬𑐵𑐂𑐟 𑐴𑐶𑐫𑐬 𑐬𑐵𑐂𑐟 𑐣𑐵𑐄 𑐣𑐾𑐥𑐵𑐮) (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐐𑐣𑐵𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐰𑑃𑐔𑐸 𑐴𑑂𑐫𑐬𑐵 𑐩𑐶𑐥𑐸𑐔𑑅 (𑐧𑑂𑐮𑐸 𑐡𑐵𑐂𑐩𑐣𑑂𑐡 𑐳𑑀𑐳𑐵𑐂𑐟𑐶) (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐳𑑄𑐔𑐵𑑅𑐎𑑅𑐩𑐶 — 𑐮𑐾𑐡𑐶𑐰𑐵 𑐴𑑂𑐣𑑂𑐫𑐠𑐣𑐵𑐩𑐶, 𑐧𑐸𑐏𑑃 𑐣𑑂𑐫𑑄𑐎𑐶𑐂𑐴𑑂𑐩, 𑐔𑑂𑐰𑐂𑐴𑑂𑐩 𑐰 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐶𑐂𑐴𑑂𑐩 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑐶𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐩𑐶𑐥𑐸𑐔𑑅 𑐮𑐵𑐐𑐵 𑐳𑑂𑐰𑐎𑐸𑐩𑐶 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐐𑐸𑑄𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐳𑐶𑐮𑐵 𑑋 <br/>
              𑐊𑐳𑐶𑐫𑐵-𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐳𑐘𑑂𑐖𑐵𑑅𑐫𑐵 𑐣𑐾𑐥𑐵𑐮𑐫𑑂 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐄𑐳𑐵𑑃𑐫𑑂 𑐳𑑂𑐰𑐂𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑐵 𑐖𑑂𑐫𑐵𑐫𑐵 𑐩𑐹 𑐩𑐶𑐮𑑂𑐫𑐵𑑅 𑐩𑐵𑐮𑐾𑐎𑐸𑐮𑐾𑐖𑑂𑐫𑐵 𑐫𑐵𑐂𑐐𑐸 𑐰 𑐳𑑅 𑐴𑑂𑐮𑑂𑐰𑐣𑐶𑐂𑐐𑐸 (KPRA) 𑐖𑑂𑐫𑐵𑐐𑑂𑐰𑐳𑐵𑑅𑐫𑐵 𑐡𑐸𑐣𑐾 𑐮𑐵𑑅 𑑋 <br/>    
            </p>
            
          </div>

          {/* Freelancing */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐫𑐵𑐫𑐾 𑐣𑑄𑐐𑐸 𑐔𑐷𑐴𑐵𑑅 𑐃𑐫𑐵 𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <p className="mb-2">𑐩𑐹𑐎𑐠𑑄 𑐖𑐶𑐐𑐹 𑐎𑐸𑐟𑑅𑐫𑐵 𑐕𑐸𑑄 :— </p>

              <ol className="list-decimal pl-6">
                <li> 𑐠𑐷𑐠𑐷 𑐡𑐾𑐫𑑂‌𑐣𑑂𑐫𑑄 𑐟𑐐𑐶𑐩𑐫𑑂 𑐖𑐹𑐐𑐸 𑐰 𑐠𑐵𑐐𑐵𑑅 𑐟𑐐𑐶𑐩𑐫𑑂 𑐖𑐹𑐐𑐸 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑐰𑐵 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑐮𑐫𑑂 𑐏𑑃𑐎𑐸𑐔𑐵 𑐔𑑂𑐰𑐫𑐵𑑅 𑐎𑐵𑐂𑐴𑑂𑐩 𑐖𑐸𑐫𑐵𑑅 𑐖𑑂𑐫𑐵 𑐫𑐵𑐫𑐾 𑐣𑑄 𑑋 </li>
                <li> 𑐔𑑂𑐰𑐖𑑂𑐫𑐵, 𑐔𑑂𑐰𑐖𑑂𑐫𑐵𑐫𑐵𑐟 𑐟𑐵𑐮𑐫𑑂 𑐴𑐒𑑂𑐎𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐰 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐾𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑐵 𑐔𑐶𑐴𑐵𑑅 𑐃 𑐖𑑂𑐫𑐵 𑐫𑐵𑐫𑐾 𑐣𑑄 𑑋   </li>
              </ol>       

              <p className="mt-4 mb-4">𑐩𑐹𑐎𑐠𑑄 𑐖𑐶𑐐𑐹 𑐎𑐸𑐟𑑅𑐫𑐵 𑐕𑐸𑑄 :— </p>

              <ol className="list-decimal pl-6 mb-8">
                <li>𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐩𑐶𑐳𑐵 𑐎𑐰𑑅𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐖𑑂𑐰𑑅𑐫𑐔𑐵𑐩𑐶, 𑐣𑐶𑐫𑐔𑐵𑐩𑐶, 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶, 𑐟𑑂𑐫𑐵𑐩𑐖𑑂𑐫𑐹 𑐫𑐔𑐶𑑄𑐩𑐶 𑐰 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐩𑐶𑐳𑐵𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐫𑑂 𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐣𑐷𑐏𑑃𑐥𑑁 (UN Fact Sheet on LGBTIQ+ Women) 𑐫𑐵𑐟 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑑋 [𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑑄 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂]</li>
                <li>𑐧𑐡𑐶 𑐊𑐣𑑂𑐡 𑐡𑐵𑐟𑐵𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐣𑐾𑐥𑐵𑐮𑐫𑑂 𑐠𑑅𑐐𑐸 𑐏𑑃 𑐀𑐣𑐮𑐵𑐂𑐣 𑐡𑐧𑐸𑐮𑐶𑐂 𑐴𑑂𑐣𑑂𑐫𑐠𑐣𑐾𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑐵𑐟 𑐡𑑂𑐰𑐥𑑄 𑐣𑐵𑐮𑐵𑐟𑑅𑐐𑐸 𑐠𑐶𑐟𑐶𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 (Unshackling Expression: A study on criminalisation of freedom of expression online in Nepal) 𑐫𑐵𑐟 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑑋 [𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑑄 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂]</li>
                <li>𑐎𑐵𑐄𑐣𑑂𑐟𑐬 𑐎𑐮𑑂𑐔𑐬 𑐣𑐾𑐥𑐵𑑅𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐩𑐶𑐥𑐸𑐔𑑅 𑐳𑐘𑑂𑐖𑐵𑐮𑐫𑑂 𑐟𑐫𑐾𑐟𑑅 𑐖𑑂𑐰𑐮𑑄 𑐩𑐸𑐒𑑂𑐎𑐵𑑅 𑐧𑐶𑐫𑐾𑐐𑐸 𑐖𑑂𑐫𑐵, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑑋</li>
                <li>𑐰𑐥𑐾𑐣 𑐮𑐬𑐣𑐶𑐒 𑐊𑐎𑑂𑐳𑐔𑐾𑐣𑑂𑐖 𑐣𑐾𑐥𑐵𑑅 (𑐰𑐊𑐮𑐂 𑐣𑐾𑐥𑐵𑑅) 𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐩𑐶𑐖𑐵𑐣 𑐣𑐵𑑄𑐫𑐵 𑐧𑐵𑐏𑑄 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐎𑐕𑐮𑐵 𑑋 [𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑑄 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂]</li>
                <li>𑐫𑐸𑐣𑐶𑐟𑐾𑐬𑐵, 𑐳𑐾𑐣𑑂𑐟𑐬 𑐦𑐬 𑐂𑐣𑑂𑐟𑐬𑐣𑑂𑐫𑐵𑐳𑐣𑐮 𑐳𑑂𑐟𑐡𑐶𑐖 𑐊𑐣𑑂𑐡 𑐎𑑂𑐰𑐥𑐬𑐾𑐳𑐣 (𑐳𑐾𑐳𑐶) 𑐮𑐶𑐳𑐾𑑄𑐫𑐵 𑐳𑐴𑐮𑐥𑐵𑐫𑑂 𑐰𑑃𑐔𑐸 𑐴𑑂𑐫𑐬𑐵 𑐩𑐶𑐥𑐸𑐔𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟𑐫𑐵 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑑋 [𑐏𑐫𑑂 𑐨𑐵𑐳𑑄 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂]</li>
                <li><Link href="https://www.may17.org/" className={`${newaLipi.className} font-bold mx-4 text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >www.may17.org</Link> 𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐥𑐵𑐏𑐾𑐫𑐵 𑐩𑐴𑐶𑐟𑐵 𑐔𑐎𑐣𑐵 𑐴𑑂𑐣𑐶 (𑐩𑐾 𑑑𑑗) 𑐏𑐸𑐴𑑂𑐣𑐸 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐮𑐵𑐐𑐵𑐫𑐵 𑐠𑐷𑐠𑐷 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅𑐫𑐵 𑐀𑐣𑐮𑐵𑐂𑐣 𑐰𑐵𑑅𑐔𑐵𑑅 𑐟𑐫𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋</li>
                <li>𑐩𑐸𑐳𑑂𑐩𑐵𑑄 𑐩𑐶𑐥𑐸𑐔𑐮𑐫𑑂 𑐫𑐔𑐵 𑐰𑐵𑑄 𑐰 𑐴𑑂𑐩 𑐰𑐵𑑄𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐐𑐠𑑅𑐥𑐸𑐔𑑅 (𑐳𑐶𑐊𑐳𑐧𑐶𑐁𑐬) 𑐥𑐵𑐏𑐾𑑄 𑐐𑑂𑐰𑐳𑐵𑑅 𑐐𑑂𑐰𑑅𑐐𑐸 𑐂𑐟𑐵 𑐊𑐳𑐶𑐫𑐵 𑐰 𑐰𑑄𑐎𑐸𑐮𑐶 𑐊𑐳𑐶𑐫𑐵 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐩𑐸𑐳𑑂𑐩𑐵𑑄 𑐩𑐸𑑃𑐖𑑂𑐫𑐵𑐫𑑂 𑐏𑑃𑐎𑐸𑐔𑐵 𑐔𑑂𑐰𑐫𑐵𑑅 𑐎𑐵𑐂𑐴𑑂𑐩, 𑐣𑐾𑐳𑑄 𑑑𑑑𑑓𑑙, 𑐫𑐾𑑃 𑑋</li>
              </ol>
            </p>  
          </div>

          {/* Affilitations */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐡𑐸𑐠𑑂𑐫𑐵𑑅𑐐𑐸 𑐏𑐮𑑅 𑐥𑐸𑐔𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐡𑐾𑐫𑑂 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐎𑐰𑑅 𑐡𑐸𑐣𑐾 𑐣𑐷𑐳𑑂𑐰𑑄𑐐𑐸 𑐖𑐵𑑅 𑐰 𑐫𑐔𑐵 𑐴𑑂𑐩𑑂𑐰𑑅𑐮𑑂𑐫𑐵𑑅 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐳𑐘𑑂𑐖𑐵𑑅 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐣𑑂𑐰𑐎𑐹 𑑋  <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐟𑐕𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐣𑐾𑐥𑐵𑑅 𑐐𑐬𑑂𑐧𑐫𑐵𑑅 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐊𑐩𑐣𑐾𑐳𑑂𑐟𑐶 𑐂𑐣𑑂𑐟𑐬𑐣𑑂𑐫𑐵𑐳𑐣𑐮, 𑐣𑐾𑐥𑐵𑑅 <br/>
              𑐟𑐐𑐶𑑄 : 𑐴𑑂𑐩𑐕𑐶𑑄 𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐫𑑄𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐫𑐸𑐠 𑐮𑐶𑐡 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐣𑐾𑐥𑐵𑑅 𑐥𑐵𑐏𑐾𑑄 𑐩𑐹𑐩𑐣𑐹 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 𑐧𑐕𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐫𑐸𑐠 𑐨𑑂𑐰𑐂𑐳𑐾𑐳 𑐎𑐵𑐄𑐣𑑂𑐟 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐩𑐹𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅, 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂 𑐮𑐶𑐳𑐸𑐣𑐵𑐫𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐂𑐟𑐵 𑐊𑐳𑐶𑐫𑐵 𑐡𑐠𑐸𑐎𑐸𑐠𑐶, 𑐂𑐣𑑂𑐰𑐨𑐾𑐳𑐣 𑐦𑐬 𑐔𑐾𑐣𑑂𑐖 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐧𑐕𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐧𑐕𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐟𑐵𑑄 𑐣𑐾𑐥𑐵𑑅 (𑐮𑐸𑐩 𑐣𑐾𑐥𑐵𑐮) (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐩𑐹𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐟𑐕𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐧𑐕𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐟𑐐𑐶𑑄 : 𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐠𑐶𑑄𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐟𑐕𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑐶𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐠𑐶𑑄𑐮𑐵 𑑋𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐩𑐶𑐳𑐵𑐟𑐫𑑂‌𑐐𑐸 𑐮𑑅𑐴𑑂𑐮𑐵𑐣𑐵 (𑐰𑐶𑐩𑐣 𑐡𑐾𑐮𑐶𑐨𑐬) 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑓𑑙 (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐧𑑂𑐰𑐟𑐶𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐣𑐾𑐥𑐵𑑅 𑐧𑑃𑐩𑐶 𑐖𑐣𑐖𑐵𑐟𑐶 𑐥𑑁𑐎𑑅𑐩𑐶 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅 (𑐦𑑂𑐰𑐣𑐶𑐖) (𑐳𑑂𑐰𑐵𑐥𑐹) <br/>
              𑐟𑐐𑐶𑑄 : 𑐫𑐾𑑃 𑐩𑐹𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳 𑐎𑑂𑐮𑐧, 𑐫𑐮 𑐎𑐰𑑅 <br/>
              𑐟𑐐𑐶𑑄 : 𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑖 𑐔𑐶𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 𑐡𑐶𑐮𑐵 𑑋 <br/>
            </p>
          </div>

          {/* Awards and Recognitions */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐳𑐶𑐬𑐥𑐵 𑐰 𑐴𑐣𑐵𑐧𑐣𑐵</h2>
           
          </div>

          {/* Advocacy Experiences */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐳𑑅 𑐟𑐫𑐾𑐐𑐸 𑐖𑑂𑐫𑐵</h2>
            
          </div>

          {/* Initiatives & Co-initiatives */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵 𑐎𑐸𑐟𑑅</h2>
             
          </div>

          {/* Speaking Appointments */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐣𑑂𑐰𑐰𑐵𑐫𑐾𑐐𑐸 𑐨𑐵𑐮𑐵</h2>
            
          </div>

          {/* Publications */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐔𑑂𑐰𑐳𑐸 𑐰 𑐳𑐦𑐹 𑐥𑐶𑐠𑐣𑐵</h2>
             
          </div>

          {/* Legal Portfolio */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐠𑐶𑐟𑐶𑐫𑐵 𑐏𑑃</h2>
            
          </div>

          {/* International Conferences */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐡𑐾𑐫𑑂‌𑐳𑑄𑐡𑐾𑐫𑑂‌ 𑐩𑐸𑑃𑐖𑑂𑐫𑐵</h2>
              
          </div>

          {/* Features */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐕𑐸𑑄 𑐧𑐶𑐳𑐎𑑄𑐫𑐵 𑐎𑐶𑐥𑐵</h2>
            
          </div>

          {/* Miscellaneous */}
          <div> 
            <h2 className="mt-4 text-2xl font-bold text-red-700">𑐄𑐐𑐸𑑄𑐠𑐸𑐐𑐸𑑄</h2>
            
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer 
          info={{
            headerClassName: newaLipi.className,
            className: newaLipi.className,
            name: "𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶", 
            profileLink: "", 
            litigationLink: "", 
            publicationLink: "",
            locationHeader: "𑐠𑐵𑐫𑑂", 
            location: "𑐫𑐮, 𑐣𑐾𑐥𑐵𑐮", 
            emailHeader: "𑐃𑐩𑐾𑐮", 
            email: "rukshanakapali1144@gmail.com", 
            phoneHeader: "𑐫𑐵𑑄𑐨𑐵𑐫𑑂 𑐮𑑂𑐫𑐵𑑅", 
            phone: "+𑑙𑑗𑑗-𑑙𑑘𑑐𑑘𑑒𑑖𑑒𑑖𑑙𑑙",
            year: year
          }}
        />
    </div>
  );
}
