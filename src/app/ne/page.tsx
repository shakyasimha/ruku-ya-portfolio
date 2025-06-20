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
            <h2 className="mb-8 mt-4 text-2xl font-bold text-red-700 md:text-start text-center">𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶 𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶 𑑋 𑐖𑐶𑐐𑐹 𑐎𑐸𑐣𑐵𑑄 𑐩𑐶𑑃𑐔𑑂𑐫𑐵𑑅 𑐩𑐫𑑂‌𑐖𑐸 𑐏𑑅 𑑋 𑐖𑐶𑐟𑑅 𑐕𑐾𑑃𑐖𑑅 𑐰 𑐠𑑅𑐠𑐶𑐟𑐶 𑐡𑐠𑐸𑐂 𑐟𑑅𑐢𑐷𑐩𑐿𑑄 𑐢𑐎𑐵𑑅 𑐣𑑄 𑐳𑐟𑐹 𑑋
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶 𑑑𑑕𑐡𑑃 𑐡𑐸𑐧𑐮𑐫𑑂 𑐣𑐶𑐳𑐾𑑄 𑐴𑑂𑐣𑑂𑐫𑐮𑐸𑐰𑐵𑑅 𑐖𑑂𑐫𑐵𑐎𑑅𑐩𑐶 𑐰 𑐧𑐮𑐐 𑐔𑑂𑐰𑐩𑐶 𑐎𑐠𑑄 𑐠𑑅𑐐𑐸 𑐥𑐮𑐵𑑅 𑐴𑑂𑐣𑐫𑐵𑐎𑐵𑐐𑐸 𑐏𑑅 𑑋 𑐖𑐶𑐐𑐸 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐔𑑂𑐰𑐖𑑂𑐫𑐵 𑐠𑑅𑐐𑐸 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵𑐫𑐵 𑐏𑑃 𑐴𑑂𑐣𑑂𑐫𑑅𑐣𑐾 𑐰𑑅𑐐𑐸 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐂𑐮𑐫𑑂 𑐠𑑅 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐖𑐹𑐐𑐸 𑐰𑐵𑑅𑐔𑐵𑑅 𑐟𑐫𑐵𑐧𑐮𑐫𑑂 𑐠𑑅𑐫𑐵𑐟 𑐟𑐵𑑅𑐐𑐸 𑐏𑑃𑐫𑐵𑐟 𑐩𑐸𑐒𑑂𑐎𑐵𑑅 𑐠𑑅𑐐𑐸 𑐴𑐾 𑐏𑑃𑐩𑐵𑑅 𑐔𑑂𑐰𑐳𑐸 𑐔𑑂𑐰𑐫𑐵𑐐𑐸 𑐏𑑅 𑑋 𑐖𑐶𑑄 𑐧𑐶𑐳𑐎𑑄 𑐎𑐠𑑄 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐥𑐶𑐣𑐶𑐐𑐸 𑐏𑑃 𑐣𑐵𑐥𑑄 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅, 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐰 𑐫𑐔𑐵 𑐟𑐵𑐖𑐶 (𑐫𑐎𑑂𑐰𑐖𑐵𑑅𑐴𑑂𑐩𑐫𑐟𑐵) 𑐫𑐵 𑐏𑑃𑐳𑐸𑐂 𑐮𑐶𑐳𑐾𑑄 𑐨𑐵𑐫𑑂, 𑐖𑐵𑐟𑐶𑐫𑐵 𑐏𑑃, 𑐣𑐾𑐰𑐵𑑅 𑐖𑐵𑐟𑐶 𑐰 𑐮𑐴𑐣𑐵𑐫𑐵 𑐏𑑃𑐫𑑂 𑐔𑑂𑐰𑐫𑐾𑐐𑐸 𑐰 𑐳𑑅 𑐟𑐫𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋            
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑐵 𑐂𑐮𑐫𑑂 𑐟𑐵𑐎 𑐠𑑂𑐫𑑄 𑐧𑐮𑐫𑑂 𑐖𑐶𑐐𑐸 𑐖𑑂𑐫𑐵 𑐩𑐹𑐎𑐠𑑄 𑐨𑐵𑐫𑑂, 𑐫𑐎𑑂𑐰𑐖𑐵𑑅𑐴𑑂𑐩𑐫𑐟𑐵 𑐰 𑐎𑐵𑐣𑐸𑐣 𑐮𑐶𑐳𑐾𑑄 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵 𑐰 𑐣𑐾𑐰𑐵𑑅𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐳𑐸𑐂 𑐎𑑂𑐰𑐳𑑂𑐫𑐹 𑐰𑐣 𑑋 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐩𑐵𑐮𑐾𑐎𑐸𑐮𑐾𑐖𑑂𑐫𑐵 𑐰 𑐮𑑂𑐰𑐎 𑐰𑐵𑑅𑐔𑐵𑑅 𑐠𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐖𑑂𑐰𑐮𑑄 𑐥𑐶𑐠𑐣𑐾𑐐𑐸 𑐰 𑐥𑐬𑐐𑑂𑐫𑐵𑑃 𑐔𑑂𑐰𑐳𑐸 𑐠𑐾𑑄 𑐖𑑂𑐰𑑅𑐐𑐸 𑐐𑑂𑐫𑐵𑑄 𑐧𑐶𑐂𑐐𑐸 𑐖𑑂𑐰𑐮𑑄 𑐡𑐫𑐾𑐎𑐾𑐐𑐸𑐮𑐶𑐂 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵 𑑋 𑐠𑑂𑐰𑐫𑐵 𑐮𑐶𑐳𑐾𑑄 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐣𑑂𑐫𑐵𑑅𑐎𑐸𑐠𑐶𑐂 𑐂𑐣𑐵𑐥 𑐟𑐫𑐵𑑅 𑐎𑐵𑐣𑐸𑐣 𑐥𑐵𑐏𑐾𑑄 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐫𑐾𑐐𑐸 𑐰 𑐖𑑂𑐫𑐵𑐔𑐸 𑐴𑐶𑐮𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋            
            </p>
          </div>

          {/* Demographics */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐩𑐶𑐮𑑂𑐫𑐵𑑅𑐖𑑂𑐫𑐵𑐳𑐸</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐩𑐶𑐳𑐵 𑐧𑐵 𑐴𑐶𑐮𑐵𑐩𑐶𑐳𑐵 𑐏𑑅 𑑋 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂 𑐖𑐶𑑄 She/Her 𑐥𑐮𑐶𑐣𑐵𑑄 𑐕𑑂𑐫𑐮𑐵 𑑋 𑐀𑐠𑐾 𑐴𑐾 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐣𑐵𑐏𑑃𑐐𑑂𑐰𑑅 Ms. 𑐢𑐎𑐵𑑅 𑐕𑑂𑐫𑐮𑐵 𑑋 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐣𑐵𑐏𑑃𑐐𑑂𑐰𑑅 𑐩𑐡𑐸𑐐𑐸 𑐖𑐸𑐫𑐵𑑅 ‘𑐳𑐸𑐱𑑂𑐬𑐷 / 𑐱𑑂𑐬𑐷𑐩𑐟𑐷‘𑐫𑐵 𑐠𑐵𑐳𑐫𑑂 ‘𑐱𑑂𑐬𑐷‘ 𑐢𑐎𑐵𑑅 𑐕𑑂𑐫𑐮𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵𑐫𑑂 𑐮𑐵 𑐩𑐫𑑂‌𑐖𑐸 𑐏𑑃𑐐𑑂𑐰𑑅 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐾 𑐏𑑃𑐐𑑂𑐰𑑅 𑐖𑐸𑐮 𑑋            
            </p>  
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑑄 𑐠𑑅𑐐𑐸 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅 𑐨𑑂𑐰𑐫𑐔𑐵𑐩𑐶 𑐰 𑐕𑑂𑐰𑐵𑐮𑐸 𑐢𑐎𑐵𑑅 𑐠𑐸𑐂𑐎𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶 𑐣𑐷𑐳𑑂𑐰𑐡𑑃 𑐦𑐸𑐣𑐵𑑅 𑐣𑐷𑐥𑑂𑐫𑐡𑑃𑐫𑑂 𑐔𑑂𑐰𑐣𑐵 𑐔𑑂𑐰𑐣𑐵𑐴𑑂𑐩 𑐏𑑅 𑑋 𑐖𑐶𑐐𑐹 𑐧𑐸𑐴𑑂𑐣𑐶 𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 𑐎𑐠𑑄 𑐣𑐾𑐥𑐵𑐮 𑐳𑐩𑑂𑐧𑐟 𑑑𑑑𑑑𑑑 𑐔𑐶𑐮𑐵 𑑑𑑖 𑐏𑑅 𑐢𑐵𑑅𑐳𑐵 𑐩𑐶𑐮𑐵𑐮𑑂𑐫𑐵𑑅 𑐎𑐠𑑄 𑐔𑐶𑐮𑐵𑐐𑐵𑑅 𑐳𑑂𑐰𑐩𑐶𑐮𑐵 (𑐟𑐶𑐟𑐶𑐫𑐵) 𑐏𑐸𑐴𑑂𑐣𑐸 𑐮𑐵𑑅 𑑋
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑐐𑐹 𑐡𑐾𑐫𑑂‌𑐳𑐸 𑐣𑐾𑐥𑐵𑑅𑐩𑐶 𑐏𑑅 𑑋 𑐖𑐶 𑐧𑑃𑐩𑐶 𑐣𑐾𑐰𑐵𑑅 𑐖𑐵𑐟𑐶𑐫𑐵𑐴𑑂𑐩 𑐏𑑅 𑑋 𑐣𑐾𑐰𑐵𑑅 𑐡𑐸𑐣𑐾 𑐖𑐶 𑐖𑐸𑐐𑐶 𑐖𑐵𑐟𑐫𑑂 𑐮𑐵𑑅 𑑋
            </p>  
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑐐𑐹 𑐧𑐸𑐳𑐾𑑄 𑐰𑑅𑐐𑐸 𑐟𑐸𑐟𑐶 𑐧𑑂𑐫𑐎𑑂𑐰𑑅-𑐔𑐵𑑅𑐟𑐹 (bilateral clubfeet) 𑐫𑐵 𑐰𑐵𑐳𑑅 𑐰 𑐳𑐸𑐳𑐵𑑅 𑐫𑐵𑐣𑐵𑑅 𑐮𑑂𑐫𑑄𑐥𑐸𑐮𑑂𑐫𑑅 𑐏𑐹 (residual disability) 𑐠𑐵𑑅𑐣𑐶 𑑋            
            </p>    
          </div>

          {/* Academic Qualification */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐧𑐶𑐊 𑐊𑐮𑐊𑐮𑐧𑐶 𑑋 </strong> <br/>
              𑐳𑑂𑐰𑐐𑐹𑐐𑐸 𑐡𑑃𑐫𑑂 𑐧𑑂𑐰𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — 
              <Link href="https://chbea.com/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500"> 
                 𑐔𑐎𑐬𑐧𑐟𑐶 𑐊𑐖𑐸𑐎𑐾𑐳𑐣 𑐁𑐎𑐵𑐡𑐾𑐩𑐶
              </Link> । <br/>
              𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — 
              <Link href="https://www.pusc.edu.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" > 
                𑐥𑐸𑐬𑑂𑐧𑐵𑐘𑑂𑐔𑐮 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶
              </Link> । <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐧𑐶𑐊 — 𑐨𑐵𑐫𑑂 𑐡𑐸𑐳𑐶𑐂𑐎𑐵 𑐰 𑐩𑐶𑐥𑐸𑐔𑑅 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 𑑋 </strong> <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐡𑑃𑐫𑑂 𑐟𑐵𑑅𑐮𑐵𑑅𑐐𑐸 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 —
              <Link href="https://trichandracampus.edu.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" > 
                𑐟𑐶𑐬𑐔𑐣𑑂𑐣 𑐟𑑅𑐟𑐵𑐠𑐷 𑐠𑑃𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶
              </Link>।<br/>
              𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 —
              <Link href="http://www.tribhuvan-university.edu.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" > 
                𑐟𑐶𑐬𑐨𑐸𑐧𑐣 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶
              </Link>। <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑑑𑑒 𑐐𑐹 𑐟𑐐𑐶𑑄 (+𑑒) 𑐟𑐐𑐶𑑄 𑑋 </strong> <br/>
              𑐣𑐾.𑐳𑑄 𑑑𑑑𑑓𑑗 𑐡𑑃𑐫𑑂 𑐟𑐵𑑅𑐮𑐵𑑅𑐐𑐸 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 —
              <Link 
                href="https://www.google.com/maps/place/Aims+Academy/@27.668229,85.3223819,15z/data=!4m5!3m4!1s0x0:0x6bf9108eeb04e274!8m2!3d27.668229!4d85.3223819?shorturl=1" 
                className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" 
              >
                𑐊𑐩𑑂𑐳 𑐁𑐎𑐵𑐡𑐾𑐩𑐶
              </Link> । <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑑑𑑐 𑐐𑐹 𑐟𑐐𑐶𑑄 (𑐊𑐳𑐊𑐮𑐳𑐶 𑐟𑐐𑐶𑑄) 𑑋 </strong> <br/>
              𑐣𑐾.𑐳𑑄 𑑑𑑑𑑓𑑔 𑐡𑑃𑐫𑑂 𑐟𑐵𑑅𑐮𑐵𑑅𑐐𑐸 𑑋 <br/>
            </p>     
          </div>

          {/* Fellowships */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐧𑑂𑐰𑐣𑐾𑐟𑐶𑐧𑑅 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐫𑑂 𑐳𑑅𑐟𑐫𑐾𑐐𑐸𑐖𑑂𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐟𑐶𑐧𑑅 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑋</strong> <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐊𑐳𑐶𑐫𑐵-𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐳𑐘𑑂𑐖𑐵𑑅 𑑋 (<Link href="https://www.google.com/maps/place/Aims+Academy/@27.668229,85.3223819,15z/data=!4m5!3m4!1s0x0:0x6bf9108eeb04e274!8m2!3d27.668229!4d85.3223819?shorturl=1" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑑄𑐮𑐵 – 𑐎𑑁𑐮𑐵 𑑋 <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐀𑐔𑑅𑐮𑐵𑐫𑐾𑐦𑐸𑐥𑐶𑑄 𑐩𑐶𑐰𑐵𑑄𑐎𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐣𑐶𑐟𑐶𑑄 𑐐𑐣𑐵𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐧𑐶𑐂𑐐𑐸 𑐎𑐠𑑄𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐟𑐶𑐧𑑅𑑋</strong> <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐫𑐬𑑂𑐎 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐫𑐬𑑂𑐎, 𑐧𑐾𑐮𑐵𑐂𑐟 𑑋 (<Link href="https://www.york.ac.uk/cahr/human-rights-defenders/protective-fellowship/past/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐫𑑄𑐮𑐵 – 𑑑𑑑𑑔𑑐 𑐠𑐶𑑄𑐮𑐵 𑑋 <br/>
            </p> 
          </div>

          {/* Institutes */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐳𑑂𑐫𑐣𑐾𑐎𑐣𑐾 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐨𑐵𑐫𑑂 (𑐮𑑂𑐫𑐵𑐨𑐾𑐣𑑂𑐡𑐬 𑐮𑑂𑐫𑐵𑐒𑐐𑐸𑐰𑐾𑐖) 𑐳𑑂𑐫𑐣𑐾𑐎𑐣𑐾 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑋</strong> <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐦𑑂𑐮𑐬𑐶𑐡𑐵 𑐫𑐟𑐮𑐵𑐣𑑂𑐟𑐶𑐎 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐦𑑂𑐮𑐬𑐶𑐡𑐵, 𑐀𑐩𑐾𑐮𑐶𑐎𑐵 𑑋 (<Link href="https://www.fau.edu/artsandletters/lavender-languages/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐟𑐕𑐮𑐵 – 𑐡𑐶𑐮𑐵 𑑋 <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐡𑐸𑐠𑑂𑐫𑐵𑑅𑐳𑐸 𑐴𑐮𑐶𑑄 𑐴𑑂𑐣𑑂𑐫𑐮𑐸𑐰𑐵𑑅 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐣𑐵𑐫𑐵 𑐟𑐵𑐥𑐮𑐵 𑐳𑑂𑐫𑐣𑐾𑐎𑐣𑐾 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 (𑐂𑐐𑑂𑐮𑐶) 𑑋 </strong> <br/>
              𑐐𑑂𑐰𑐳𑐵𑑅 : 𑐖𑑂𑐰𑐳𑐾𑐦 𑐎𑑂𑐰𑐬𑐧𑐾𑐮 𑐡𑐾𑐫𑑂‌𑐳𑑄𑐡𑐾𑐫𑑂 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐡𑐾𑐣𑑂𑐨𑐬 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐎𑑂𑐰𑐮𑐬𑐵𑐡𑑂𑐰, 𑐀𑐩𑐾𑐮𑐶𑐎𑐵 𑑋 (<Link href="https://korbel.du.edu/sie/engagement-initiatives/inclusive-global-leadership-initiative/summer-institute" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐐𑐸𑑄𑐮𑐵 𑑋 <br/>
            </p>    
          </div>

          {/* MOOCs */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐀𑐣𑐮𑐵𑐂𑐣 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐨𑐵𑐫𑑂 𑐴𑑂𑐮𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 : 𑐴𑑂𑐣𑐣𑐵𑐰𑐣𑐾𑐟𑑂𑐫𑑄𑐐𑐸 𑐨𑐵𑐫𑑂‌𑐫𑐵𑐐𑐸 𑐮𑐶𑐰𑐃 𑐎𑑂𑐰𑐵𑐟𑐸𑐎𑐾𑐐𑐸  (Lang101x) । </strong> <br/>
              𑐡𑑃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐰𑐮𑑄 : 𑐫𑐵𑐡𑐶𑐮𑐾𑐡 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋 <br/>
              𑐡𑐧𑐹 : 𑐊𑐡-𑐊𑐎𑑂𑐳  (<Link href="https://www.edx.org/course/language-revival-securing-the-future-of-endangered" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐧𑑃𑐩𑐶 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 𑐥𑐵𑐏𑐾𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐴𑐣𑐵𑐖𑑂𑐫𑐵 (IndEdu200x) । </strong> <br/>
              𑐡𑑃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋 <br/>
              𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐰𑐮𑑄 : 𑐧𑐶𑐬𑐟𑐶𑐳 𑐎𑑂𑐰𑐮𑐩𑑂𑐧𑐶𑐫𑐵 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 𑑋<br/>
              𑐡𑐧𑐹 : 𑐊𑐡-𑐊𑐎𑑂𑐳 (<Link href="https://www.edx.org/course/reconciliation-through-indigenous-education" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
            </p>  
          </div>

          {/* Language Proficiency */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐳𑑅𑐐𑐸 𑐨𑐵𑐫𑑂</h2>
            <ul className="text-gray-700 mt-2 mb-4 text-justify list-disc ml-8">
              <li>𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳 — 𑐩𑐵𑑄𑐨𑐵𑐫𑑂, 𑐦𑐸𑐎𑑂𑐎 𑐳𑑅 𑑋 </li>
              <li>𑐏𑐫𑑂 𑐨𑐵𑐫𑑂 — 𑐦𑐸𑐎𑑂𑐎 𑐳𑑅 ।</li>
              <li>𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐫𑑂 — 𑐦𑐸𑐎𑑂𑐎 𑐳𑑅 ।</li>
              <li>𑐴𑐶𑐣𑑂𑐡𑐶 𑐨𑐵𑐫𑑂 — 𑐁𑐥𑐮𑑄 𑐳𑑅 ।</li>
              <li>𑐄𑐬𑑂𑐡𑐸 𑐨𑐵𑐫𑑂 — 𑐫𑐎𑑂𑐰𑐠𑐾𑑄 𑐏𑑃 𑐳𑑅 ।</li>
              <li>𑐟𑐵𑐩𑐵𑐒 𑐨𑐵𑐫𑑂 — 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐟𑐐𑐶𑐩𑐫𑑂 𑐟𑐶𑐣𑐶 ।</li>
              <li>𑐳𑑃𑐫𑑂 𑐨𑐵𑐫𑑂 — 𑐡𑐠𑐸 𑐟𑐐𑐶𑐩𑐫𑑂 𑐟𑐶𑐣𑐶 ।</li>
              <li>𑐣𑐾𑐥𑐵𑑅 𑐴𑑂𑐮𑐵𑑅 𑐨𑐵𑐫𑑂 — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 ।</li>
              <li>𑐧𑐵𑐒𑐐𑐮𑐵 𑐨𑐵𑐫𑑂 — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 ।</li>
              <li>𑐥𑑂𑐬𑐵𑐎𑑂𑐬𑐶𑐟 — 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐟𑐐𑐶𑐩𑐫𑑂 𑐟𑐶𑐣𑐶 । </li>
              <li>𑐫𑐵𑐎𑑂𑐠𑐸𑐒 (𑐮𑐶𑐩𑑂𑐧𑐸) — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 ।</li>
              <li>𑐔𑐶𑐣 𑐨𑐵𑐫𑑂 — 𑐳𑐫𑐾𑐎𑐾𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐔𑑂𑐰𑐣𑐵 ।</li>
            </ul> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐨𑐵𑐫𑑂‌𑐫𑐵 𑐳𑑂𑐫𑐹𑐟𑐵𑑅𑐫𑐵 𑐏𑑃𑐫𑑂 𑐩𑐾𑐐𑐸 𑐕𑐟𑐵 𑐔𑑂𑐰𑐳𑐸𑐂 𑐢𑑂𑐰𑐵𑐠𑐸𑐂𑐎𑐵𑑅 𑐟𑐫𑐵𑐐𑐸 𑐡𑐸 𑑋 𑐄𑐐𑐸 𑐔𑑂𑐰𑐳𑐸 𑐧𑑂𑐰𑐣𑐾𑐟𑑅 <Link href="https://www.edx.org/course/reconciliation-through-indigenous-education" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃</Link> 𑑋
            </p>
          </div>

          {/* Working Experiences */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐫𑐵𑐫𑐾 𑐣𑑄𑐐𑐸 𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐎𑑂𑐰𑐫𑑂‌𑐬 𑐫𑐸𑐠 𑐐𑑂𑐬𑐸𑐥</strong> (<Link href="https://queeryouthgroup.org.np" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐡𑐶𑐮𑐵 𑐣𑐶𑐳𑐾𑑄 𑐁𑑅 𑐟𑐵𑐎 ।<br/>
              <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐎𑐖𑐶 । <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐡𑐶𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐡𑐶𑐮𑐵 ।<br/>
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵, 𑐡𑐸𑐳𑐶𑐂𑐎𑐵 𑐰 𑐟𑐖𑐶𑐮𑐖𑐶 𑐎𑐰𑑅 (𑐫𑐸𑐣𑐾𑐳𑑂𑐎𑑀) 𑐫𑐵 𑐎𑐸𑐬𑐸𑐒 𑐠𑐾𑐥 (𑐧𑐵𑐫𑑂‌𑐒𑐎𑐎) 𑐖𑑂𑐫𑐵𑐎𑐸𑐠𑐶</strong> <br/>
              𑐟𑐵𑑅𑐟𑐸𑑄𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 : 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅, 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐰 𑐫𑐔𑐵 𑐟𑐵𑐖𑐶𑐫𑐵 𑐮𑐶𑐢𑑄𑐳𑐵𑐫𑑂 𑐢𑑂𑐫𑐵𑐎𑑂𑐰𑐫𑑂 𑐮𑐵𑐎𑐵𑐟𑑅𑐥𑐶𑑄 𑐡𑐸𑐠𑑂𑐫𑐵𑑅𑐐𑐸 𑐧𑑂𑐰𑐣𑐾𑐏𑑂𑐫𑑅𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐟𑑅𑐟𑐵 𑐡𑐾𑐳𑐫𑑂 𑐧𑑂𑐫𑐵𑑅𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐟𑐵𑑅𑐟𑐸𑑄𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅𑐫𑐵 𑐮𑐶𑐢𑑄𑐳𑐵 𑐥𑐸𑐔𑑅 (𑐴𑑂𑐣𑐵𑐥𑐵 𑐮𑐵𑐐𑐵 𑐎𑐸𑐟𑑅 𑐮𑐶𑐢𑑄𑐳𑐵 𑐥𑐸𑐔𑑅) 𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑘 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐧𑐡𑐶 𑐊𑐣𑑂𑐡 𑐡𑐵𑐟𑐵 </strong> (<Link href="https://bodyanddata.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐳𑐶𑐮𑐵 — 𑐔𑐶𑐮𑐵 𑑋 <br/>
              <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐎𑐰𑑅𑐎𑐖𑐶 𑑋   <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐎𑐕𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐳𑐴𑐵𑐫𑐩𑑂 𑐣𑐾𑐥𑐵𑐮</strong> <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐫𑑄𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐠𑐣 𑐴𑐾, 𑐁𑑅 𑐴𑐾, 𑐣𑐾𑐥𑐵𑑅 (𑐬𑐵𑐂𑐟 𑐴𑐶𑐫𑐬 𑐬𑐵𑐂𑐟 𑐣𑐵𑐄 𑐣𑐾𑐥𑐵𑐮)</strong> (<Link href="https://www.rutgers.international/programmes/right-here-right-now" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐐𑐣𑐵𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐎𑐖𑐶 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐰𑑃𑐔𑐸 𑐴𑑂𑐫𑐬𑐵 𑐩𑐶𑐥𑐸𑐔𑑅 (𑐧𑑂𑐮𑐸 𑐡𑐵𑐂𑐩𑐣𑑂𑐡 𑐳𑑀𑐳𑐵𑐂𑐟𑐶)  </strong> (<Link href="https://bds.org.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐳𑑄𑐔𑐵𑑅𑐎𑑅𑐩𑐶 — 𑐮𑐾𑐡𑐶𑐰𑐵 𑐴𑑂𑐣𑑂𑐫𑐠𑐣𑐵𑐩𑐶, 𑐧𑐸𑐏𑑃 𑐣𑑂𑐫𑑄𑐎𑐶𑐂𑐴𑑂𑐩, 𑐔𑑂𑐰𑐂𑐴𑑂𑐩 𑐰 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐶𑐂𑐴𑑂𑐩 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑐶𑐮𑐵 𑑋 <br/>
              <br/>
              𑐖𑑂𑐫𑐵𑐟𑐐𑐶𑑄 : 𑐩𑐶𑐥𑐸𑐔𑑅 𑐮𑐵𑐐𑐵 𑐳𑑂𑐰𑐎𑐸𑐩𑐶 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐐𑐸𑑄𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐳𑐶𑐮𑐵 𑑋 <br/>
              𑐊𑐳𑐶𑐫𑐵-𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐳𑐘𑑂𑐖𑐵𑑅𑐫𑐵 𑐣𑐾𑐥𑐵𑐮𑐫𑑂 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐄𑐳𑐵𑑃𑐫𑑂 𑐳𑑂𑐰𑐂𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑐵 𑐖𑑂𑐫𑐵𑐫𑐵 𑐩𑐹 𑐩𑐶𑐮𑑂𑐫𑐵𑑅 𑐩𑐵𑐮𑐾𑐎𑐸𑐮𑐾𑐖𑑂𑐫𑐵 𑐫𑐵𑐂𑐐𑐸 𑐰 𑐳𑑅 𑐴𑑂𑐮𑑂𑐰𑐣𑐶𑐂𑐐𑐸 (KPRA) 𑐖𑑂𑐫𑐵𑐐𑑂𑐰𑐳𑐵𑑅𑐫𑐵 𑐡𑐸𑐣𑐾 𑐮𑐵𑑅 𑑋
            </p>
          </div>

          {/* Freelancing */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐫𑐵𑐫𑐾 𑐣𑑄𑐐𑐸 𑐔𑐷𑐴𑐵𑑅 𑐃𑐫𑐵 𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐩𑐹𑐎𑐠𑑄 𑐖𑐶𑐐𑐹 𑐎𑐸𑐟𑑅𑐫𑐵 𑐕𑐸𑑄 :—
            </p>   
            <ol className="list-decimal pl-6 text-gray-700 mt-2 mb-4 text-justify ml-8">
              <li>𑐠𑐷𑐠𑐷 𑐡𑐾𑐫𑑂‌𑐣𑑂𑐫𑑄 𑐟𑐐𑐶𑐩𑐫𑑂 𑐖𑐹𑐐𑐸 𑐰 𑐠𑐵𑐐𑐵𑑅 𑐟𑐐𑐶𑐩𑐫𑑂 𑐖𑐹𑐐𑐸 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑐰𑐵 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑐮𑐫𑑂 𑐏𑑃𑐎𑐸𑐔𑐵 𑐔𑑂𑐰𑐫𑐵𑑅 𑐎𑐵𑐂𑐴𑑂𑐩 𑐖𑐸𑐫𑐵𑑅 𑐖𑑂𑐫𑐵 𑐫𑐵𑐫𑐾 𑐣𑑄 𑑋</li>
              <li>𑐔𑑂𑐰𑐖𑑂𑐫𑐵, 𑐔𑑂𑐰𑐖𑑂𑐫𑐵𑐫𑐵𑐟 𑐟𑐵𑐮𑐫𑑂 𑐴𑐒𑑂𑐎𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐰 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐾𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑐵 𑐔𑐶𑐴𑐵𑑅 𑐃 𑐖𑑂𑐫𑐵 𑐫𑐵𑐫𑐾 𑐣𑑄 𑑋</li>
            </ol>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              𑐕𑐸𑑄 𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐧𑑂𑐰𑐫𑐵 :—
            </p>
            <ol className="text-gray-700 mt-2 mb-4 text-justify list-decimal ml-8 pl-6">
              <li>𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐩𑐶𑐳𑐵 𑐎𑐰𑑅𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐖𑑂𑐰𑑅𑐫𑐔𑐵𑐩𑐶, 𑐣𑐶𑐫𑐔𑐵𑐩𑐶, 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶, 𑐟𑑂𑐫𑐵𑐩𑐖𑑂𑐫𑐹 𑐫𑐔𑐶𑑄𑐩𑐶 𑐰 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐩𑐶𑐳𑐵𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐫𑑂 𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐣𑐷𑐏𑑃𑐥𑑁 <em> (UN Fact Sheet on LGBTIQ+ Women)</em> 𑐫𑐵𑐟 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑑋 [𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑑄 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂] </li>
              <li>𑐧𑐡𑐶 𑐊𑐣𑑂𑐡 𑐡𑐵𑐟𑐵𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐣𑐾𑐥𑐵𑐮𑐫𑑂 𑐠𑑅𑐐𑐸 𑐏𑑃 𑐀𑐣𑐮𑐵𑐂𑐣 𑐡𑐧𑐸𑐮𑐶𑐂 𑐴𑑂𑐣𑑂𑐫𑐠𑐣𑐾𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑐵𑐟 𑐡𑑂𑐰𑐥𑑄 𑐣𑐵𑐮𑐵𑐟𑑅𑐐𑐸 𑐠𑐶𑐟𑐶𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵 <em> (Unshackling Expression: A study on criminalisation of freedom of expression online in Nepal)</em> 𑐫𑐵𑐟 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑑋 [𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑑄 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂] </li>
              <li>𑐎𑐵𑐄𑐣𑑂𑐟𑐬 𑐎𑐮𑑂𑐔𑐬 𑐣𑐾𑐥𑐵𑑅𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐩𑐶𑐥𑐸𑐔𑑅 𑐳𑐘𑑂𑐖𑐵𑐮𑐫𑑂 𑐟𑐫𑐾𑐟𑑅 𑐖𑑂𑐰𑐮𑑄 𑐩𑐸𑐒𑑂𑐎𑐵𑑅 𑐧𑐶𑐫𑐾𑐐𑐸 𑐖𑑂𑐫𑐵, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑑋</li>
              <li>𑐰𑐥𑐾𑐣 𑐮𑐬𑐣𑐶𑐒 𑐊𑐎𑑂𑐳𑐔𑐾𑐣𑑂𑐖 𑐣𑐾𑐥𑐵𑑅 (𑐰𑐊𑐮𑐂 𑐣𑐾𑐥𑐵𑑅) 𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐩𑐶𑐖𑐵𑐣 𑐣𑐵𑑄𑐫𑐵 𑐧𑐵𑐏𑑄 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐎𑐕𑐮𑐵 𑑋 [𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑑄 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂] </li>
              <li>𑐫𑐸𑐣𑐶𑐟𑐾𑐬𑐵, 𑐳𑐾𑐣𑑂𑐟𑐬 𑐦𑐬 𑐂𑐣𑑂𑐟𑐬𑐣𑑂𑐫𑐵𑐳𑐣𑐮 𑐳𑑂𑐟𑐡𑐶𑐖 𑐊𑐣𑑂𑐡 𑐎𑑂𑐰𑐥𑐬𑐾𑐳𑐣 (𑐳𑐾𑐳𑐶) 𑐮𑐶𑐳𑐾𑑄𑐫𑐵 𑐳𑐴𑐮𑐥𑐵𑐫𑑂 𑐰𑑃𑐔𑐸 𑐴𑑂𑐫𑐬𑐵 𑐩𑐶𑐥𑐸𑐔𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟𑐫𑐵 𑐨𑐵𑐫𑑂 𑐴𑐶𑐮𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑑋 [𑐏𑐫𑑂 𑐨𑐵𑐳𑑄 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂] </li>
              <li><Link href="https://www.may17.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">www.may17.org</Link> 𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐥𑐵𑐏𑐾𑐫𑐵 𑐩𑐴𑐶𑐟𑐵 𑐔𑐎𑐣𑐵 𑐴𑑂𑐣𑐶 (𑐩𑐾 𑑑𑑗) 𑐏𑐸𑐴𑑂𑐣𑐸 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐮𑐵𑐐𑐵𑐫𑐵 𑐠𑐷𑐠𑐷 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅𑐫𑐵 𑐀𑐣𑐮𑐵𑐂𑐣 𑐰𑐵𑑅𑐔𑐵𑑅 𑐟𑐫𑐵𑐐𑐸, 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋 </li>
              <li>𑐩𑐸𑐳𑑂𑐩𑐵𑑄 𑐩𑐶𑐥𑐸𑐔𑐮𑐫𑑂 𑐫𑐔𑐵 𑐰𑐵𑑄 𑐰 𑐴𑑂𑐩 𑐰𑐵𑑄𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐐𑐠𑑅𑐥𑐸𑐔𑑅 (𑐳𑐶𑐊𑐳𑐧𑐶𑐁𑐬) 𑐥𑐵𑐏𑐾𑑄 𑐐𑑂𑐰𑐳𑐵𑑅 𑐐𑑂𑐰𑑅𑐐𑐸 𑐂𑐟𑐵 𑐊𑐳𑐶𑐫𑐵 𑐰 𑐰𑑄𑐎𑐸𑐮𑐶 𑐊𑐳𑐶𑐫𑐵 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐩𑐸𑐳𑑂𑐩𑐵𑑄 𑐩𑐸𑑃𑐖𑑂𑐫𑐵𑐫𑑂 𑐏𑑃𑐎𑐸𑐔𑐵 𑐔𑑂𑐰𑐫𑐵𑑅 𑐎𑐵𑐂𑐴𑑂𑐩, 𑐣𑐾𑐳𑑄 𑑑𑑑𑑓𑑙, 𑐫𑐾𑑃 𑑋 </li>
            </ol>
          </div>

          {/* Affilitations */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐡𑐸𑐠𑑂𑐫𑐵𑑅𑐐𑐸 𑐏𑐮𑑅 𑐥𑐸𑐔𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐡𑐾𑐫𑑂 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐎𑐰𑑅 𑐡𑐸𑐣𑐾 𑐣𑐷𑐳𑑂𑐰𑑄𑐐𑐸 𑐖𑐵𑑅 𑐰 𑐫𑐔𑐵 𑐴𑑂𑐩𑑂𑐰𑑅𑐮𑑂𑐫𑐵𑑅 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐳𑐘𑑂𑐖𑐵𑑅</strong> (<Link href="http://nyc.gov.np/en/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐣𑑂𑐰𑐎𑐹 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐟𑐕𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐣𑐾𑐥𑐵𑑅 𑐐𑐬𑑂𑐧𑐫𑐵𑑅</strong> (<Link href="http://www.nepalprideparade.com/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐊𑐩𑐣𑐾𑐳𑑂𑐟𑐶 𑐂𑐣𑑂𑐟𑐬𑐣𑑂𑐫𑐵𑐳𑐣𑐮, 𑐣𑐾𑐥𑐵𑑅</strong> <br/>
              𑐟𑐐𑐶𑑄 : 𑐴𑑂𑐩𑐕𑐶𑑄 𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐫𑑄𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐫𑐸𑐠 𑐮𑐶𑐡</strong> (<Link href="https://www.youthleadap.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐣𑐾𑐥𑐵𑑅 𑐥𑐵𑐏𑐾𑑄 𑐩𑐹𑐩𑐣𑐹 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 𑐧𑐕𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐫𑐸𑐠 𑐨𑑂𑐰𑐂𑐳𑐾𑐳 𑐎𑐵𑐄𑐣𑑂𑐟  </strong> (<Link href="https://yvc-asiapacific.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐩𑐹𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅, 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂 𑐮𑐶𑐳𑐸𑐣𑐵𑐫𑑅 𑑋  <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 — 𑐁𑑅 𑐟𑐵𑐎 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐂𑐟𑐵 𑐊𑐳𑐶𑐫𑐵 𑐡𑐠𑐸𑐎𑐸𑐠𑐶, 𑐂𑐣𑑂𑐰𑐨𑐾𑐳𑐣 𑐦𑐬 𑐔𑐾𑐣𑑂𑐖 </strong> (<Link href="http://innovationforchange.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐧𑐕𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐧𑐕𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐟𑐵𑑄 𑐣𑐾𑐥𑐵𑑅 (𑐮𑐸𑐩 𑐣𑐾𑐥𑐵𑐮)</strong> (<Link href="https://taannepal.org.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐩𑐹𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐟𑐕𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐧𑐕𑐮𑐵 𑑋 <br/>
              <br/>
              𑐟𑐐𑐶𑑄 : 𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐠𑐶𑑄𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐟𑐕𑐮𑐵 𑑋 <br/>
              <br/>
              𑐟𑐐𑐶𑑄 : 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑐶𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐠𑐶𑑄𑐮𑐵 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐩𑐶𑐳𑐵𑐟𑐫𑑂‌𑐐𑐸 𑐮𑑅𑐴𑑂𑐮𑐵𑐣𑐵 (𑐰𑐶𑐩𑐣 𑐡𑐾𑐮𑐶𑐨𑐬) 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑓𑑙 </strong> (<Link href="https://womendeliver.org/conference/wd2019/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐧𑑂𑐰𑐟𑐶𑐫𑐵 𑐣𑐶𑐟𑐶𑑄 𑐖𑑂𑐫𑐵𑐳𑐣𑐵 𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐣𑐾𑐥𑐵𑑅 𑐧𑑃𑐩𑐶 𑐖𑐣𑐖𑐵𑐟𑐶 𑐥𑑁𑐎𑑅𑐩𑐶 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅 (𑐦𑑂𑐰𑐣𑐶𑐖) </strong> (<Link href="http://fonij.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>) <br/>
              𑐟𑐐𑐶𑑄 : 𑐫𑐾𑑃 𑐩𑐹𑐥𑐸𑐔𑑅𑐫𑐵 𑐡𑐸𑐖𑑅 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑑋<br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳 𑐎𑑂𑐮𑐧</strong>, 𑐫𑐮 𑐎𑐰𑑅<br/>
              𑐟𑐐𑐶𑑄 : 𑐕𑑂𑐫𑐵𑐘𑑂𑐖𑐾 𑑋 <br/>
              𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐐𑐸 𑐃 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑖 𑐔𑐶𑐮𑐵 — 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗 𑐡𑐶𑐮𑐵 𑑋 <br/>
            </p>
          </div>

          {/* Awards and Recognitions */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐳𑐶𑐬𑐥𑐵 𑐰 𑐴𑐣𑐵𑐧𑐣𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>टाईम १०० नेक्स्ट (ने.सं. ११४४ / सन् २०२४)</strong> <br/>
              TIME (<Link href="https://womendeliver.org/conference/wd2019/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>प्रेरणाको श्रोत (ने.सं. ११४४ / सन् २०२४)</strong> <br/>
              शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय (<Link href="https://cgs.moest.gov.np/home/storysingle/22" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑑑𑑐𑑐 𑐩𑑂𑐴 𑐣𑐵𑐮𑐵𑐧𑐴𑑅𑐥𑐶𑑄 𑐰 𑐖𑑂𑐫𑐵 𑐳𑑂𑐫𑐵𑐔𑐸𑐥𑐶𑑄 𑐩𑐶𑐳𑐵𑐟 (𑐣𑐾.𑐳𑑄 𑑑𑑑𑑔𑑓)</strong>  <br/>
              𑐧𑐶𑐧𑐶𑐳𑐶 (<Link href="https://www.bbc.co.uk/news/resources/idt-02d9060e-15dc-426c-bfe0-86a6437e5234" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐡𑐾𑐫𑑂 𑐮𑐫𑑂‌𑐟𑐵𑑅 𑐖𑑂𑐫𑐵𑐩𑐶 𑐳𑐶𑐬𑐥𑐵 (𑐣𑐾.𑐳𑑄 𑑑𑑑𑑔𑑑)</strong>  <br/>
              𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐰 𑐎𑐵𑐳𑐵 𑐩𑐣𑑂𑐟𑐬𑐶𑐎𑐸𑐠𑐶, 𑐣𑐾𑐥𑐵𑑅 𑐳𑐬𑐏𑐵𑐬   (<Link href="https://www.facebook.com/UNYSAN/posts/18426399424406460" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐴𑑂𑐫𑐹𑑅𑐥𑐵𑑅𑐩𑐶 𑐳𑐶𑐬𑐥𑐵 (𑐣𑐾.𑐳𑑄 𑑑𑑑𑑓𑑘)</strong>  <br/>
              𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐰 𑐧𑑂𑐰𑐣𑐵𑐩𑐶 𑐥𑐸𑐔𑑅, 𑐣𑐾𑐥𑐵𑑅  (<Link href="https://www.facebook.com/UNYSAN/posts/18426399424406460" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>  
          </div>

          {/* Advocacy Experiences */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐳𑑅 𑐟𑐫𑐾𑐐𑐸 𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐳𑑅𑐟𑐫𑐾𑐐𑐸 𑐰𑐵𑑅 𑑑𑑑𑑓𑑘</strong> <br/>
              <Link href="https://ilga.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐡𑐾𑐫𑑂‌𑐳𑑄𑐡𑐾𑐫𑑂 𑐖𑑂𑐰𑑅𑐫𑐔𑐵𑐩𑐶, 𑐣𑐶𑐫𑐔𑐵𑐩𑐶, 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐰 𑐟𑑂𑐫𑐵𑐩𑐖𑑂𑐫𑐹 𑐫𑐔𑐶𑑄𑐩𑐶 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅 (𑐂𑐮𑑂𑐐𑐵) </Link> 𑐥𑐵𑐏𑐾𑑄 𑐗𑐶𑐣𑑂𑐐𑐸𑐐𑐹 (𑑑𑑙 𑐐𑐹) 𑐡𑐾𑐳𑑄 𑐣𑐶𑐂𑐳𑑂𑐰𑐴𑑂𑐩 (𑑒𑑓 𑐴𑑂𑐩) 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶𑐥𑐶𑑄 𑐰 𑐠𑐷𑐠𑐷 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐡𑐸𑐥𑐶𑑄 𑐩𑐶𑐰𑐵𑑄𑐎𑑅𑐩𑐶𑐟𑐫𑑂‌𑐟𑑅 𑐳𑐸𑐂𑐖𑐬𑐮𑑂𑐫𑐵𑐣𑑂𑐡 𑐡𑐾𑐳𑐫𑑂 𑐖𑐾𑐣𑐶𑐨𑐵 𑐮𑐵𑐐𑐵𑐫𑑂 𑐴𑐫𑐵𑑅 𑐳𑑂𑐰𑐷𑐔𑑂𑐫𑐵𑐎𑑅𑐐𑐸 (𑑓𑑘𑐎𑑅𑐐𑐸) 𑐩𑐶𑐰𑐵𑑄 𑐎𑐰𑑅𑐫𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵𑐫𑑂 𑐳𑑅𑐟𑐫𑐾𑐐𑐸 𑐣𑐶𑐟𑐶𑑄 𑐧𑑂𑐰𑐟𑐶 𑐎𑐵𑐫𑐾𑐎𑐹𑐐𑐸 𑐏𑑅 𑑋 <br/>
              [<Link href="https://ilga.org/UN-Trans-Advocacy-Week-2018" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹 𑑑</Link>, <Link href="https://weareaptn.org/2018/06/29/trans-activists-advocate-for-their-rights-at-the-united-nations/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹 𑑒</Link>]
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>𑐴𑑂𑐣𑐹𑐥𑐸𑐏𑐹 𑐴𑑂𑐣𑐹𑐢𑐵𑑅 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐣𑐵</strong> <br/>
              𑐫𑐾𑑃𑐫𑑂 𑐔𑑂𑐰𑑄𑐐𑐸 𑐴𑑂𑐣𑐹 𑐥𑐸𑐏𑐹 𑑑𑑑𑑓𑑕 𑐡𑑃𑐫𑐵 𑐨𑐸𑐏𑐵𑐔𑑄 𑐎𑑂𑐰𑑅𑐡𑐫𑐵𑑅 𑐴𑐵𑐎𑐣𑑄 𑐴𑑂𑐣𑐹𑐢𑐵𑑅 𑐫𑐵𑐫𑐾𑐐𑐸 𑐏𑑃𑐫𑑂 𑐠𑑅𑐎𑐠𑑄 𑐡𑐫𑐾𑐎𑐾𑐩𑐵𑑅 𑐢𑐎𑐵𑑅 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐣𑐵𑐐𑐸 (𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑗)
              𑐧𑐸𑐏𑑃 : [<Link href="https://www.setopati.com/social/119121" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹 𑑑</Link>, <Link href="https://www.setopati.com/social/217421" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹 𑑒</Link>]
            </p>   
          </div>

          {/* Initiatives & Co-initiatives */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵 𑐎𑐸𑐟𑑅</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐎𑑂𑐰𑐫𑑂‌𑐬 𑐫𑐸𑐠 𑐐𑑂𑐬𑐸𑐥 </strong> <br/>
              𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑑃𑐫𑑂 𑐩𑐾𑐥𑐶𑑄 𑐮𑐶𑐳𑐾𑑄 𑐖𑐵𑐣𑐵𑑅 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐐𑐸 𑑋 <br/>
              𑐕𑑂𑐰𑐵𑐳𑐸 𑐥𑐸𑐔𑑅 𑐎𑐠𑑄 𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑑅 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐡𑑃𑐫𑑂 𑐮𑐧𑑅 𑐩𑐂𑐣𑐷𑐐𑐸 𑐎𑐩𑑂𑐥𑐣𑐶 𑐎𑐠𑑄 𑐡𑐸𑐟𑐶𑐣𑐵𑐐𑐸 𑐏𑑅 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐰𑐵𑑄 𑐏𑐮𑑅 (𑐟𑐬𑐵𑐣𑑂𑐳 𑐬𑐵𑐂𑐟𑑂𑐳 𑐎𑐮𑐾𑐎𑑂𑐟𑐶𑐨) </strong> <br/>
              𑐣𑐾𑐳𑑄 𑑑𑑑𑑔𑑐 𑐐𑐸𑑄𑐮𑐵𑐫𑑂 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐩𑐶𑐳𑐵-𑐩𑐶𑐖𑑄𑐟𑐫𑑂‌𑐐𑐸 𑐕𑑂𑐰𑐵𑐳𑐸 𑐥𑐸𑐔𑑅 𑐎𑐠𑑄 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐐𑐸 𑑋 <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> 𑐳𑐶-𑐣𑐸-𑐟𑑂𑐰𑐎 </strong> <br/>
              𑐣𑐾𑐳𑑄 𑑑𑑑𑑓𑑘 𑐡𑑃𑐫𑑂 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐐𑐸 𑑋 <br/>
              𑐮𑐶𑐥𑐵 𑐎𑑂𑐰𑐫𑑂‌𑐬 𑐫𑐸𑐠 𑐐𑑂𑐬𑐸𑐥 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐎𑐵𑑅 𑐕𑑂𑐰𑐫𑐵𑐐𑐸 𑑋 <br/>
            </p>
          </div>

          {/* Speaking Appointments */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐣𑑂𑐰𑐰𑐵𑐫𑐾𑐐𑐸 𑐨𑐵𑐮𑐵</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐡𑐾𑐫𑑂 𑐡𑐸𑐣𑐾 𑐰 𑐡𑐾𑐳𑑄 𑐥𑐶𑐣𑐾𑐫𑐵 𑐠𑐷𑐠𑐷 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑐰 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑐮𑐫𑑂 𑐖𑐶𑑄 𑐣𑑂𑐰𑐰𑐵𑐫𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋 𑐀𑐠𑐾𑐟𑐸𑑄 𑐫𑐵𑐣𑐵𑐰𑐫𑐵𑐐𑐸 𑐖𑑂𑐫𑐵𑐏𑑃𑐫𑑂 𑐠𑐷𑐠𑐷 𑐖𑑂𑐫𑐵𑐳𑐸 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑐰 𑐖𑑂𑐫𑐵𑐧𑑂𑐰 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵 𑐰𑐫𑐵𑐐𑐸 𑐡𑐸 𑑋 𑐄𑐐𑐸 𑐎𑐠𑑄𑐫𑐵 𑐕𑐸𑑄 𑐖𑑂𑐫𑐵 𑐠𑐣 𑐎𑑂𑐰𑐫𑑂 𑐴𑑂𑐣𑐠𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋
            </p>   
            <ol className="text-gray-700 mt-2 mb-4 text-justify list-decimal ml-8 pl-2 space-y-2">
              <li>
                <strong>𑐡𑐸𑐢𑑄𑐐𑐸 𑐧𑑂𑐰𑐮𑐒𑑂𑐎𑐾𑐖𑑂𑐫𑐵𑐫𑑂 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐡𑐧𑐹 𑑑𑑑𑑔𑑔, 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐡𑐧𑐹 𑑋</strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅: 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑔 𑐳𑐶𑐮𑐵 𑑒𑑙 𑐣𑐶𑐳𑐾𑑄 𑐔𑐶𑐮𑐵 𑑑 𑑋<br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐎𑐸𑐬𑐸𑐒 𑐠𑐾𑐥 (𑐧𑐵𑐫𑑂‌𑐒𑐎𑐎), 𑐠𑐵𑐂𑐮𑐵𑐫𑑂‌𑐣𑑂𑐡 𑑋 <br/>
                𑐡𑐧𑐹 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 𑑒 : 𑐴𑑂𑐣𑐵𑐥𑐵𑑄 𑐣𑐶𑐳𑐾𑑄 𑐔𑑂𑐰𑐣𑐵 𑐰𑐫𑐵𑐔𑑂𑐰𑑄𑐐𑐸 𑐳𑐟𑑅𑐕𑐾𑑃𑐣𑑄 𑐠𑐣𑐵 𑐕𑑂𑐰𑐫𑐾𑐐𑐸 𑐰 𑐥𑐶𑐟𑐣𑐾𑐐𑐸 : 𑐣𑐾𑐰𑐵𑑅𑐟 𑐡𑐠𑐸𑐂 𑐖𑐸𑐐𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐕𑐾𑑃𑐧𑐵𑐫𑑂‌𑐫𑐵 𑐏𑑃𑐫𑑂 𑐥𑐶𑐡𑑄𑐐𑐸 𑐠𑐵𑐎𑐸𑐥𑐒𑑂𑐐𑑅 𑑋 <br/>
                <Link href="https://weareaptn.org/2018/06/29/trans-activists-advocate-for-their-rights-at-the-united-nations/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟
                </Link>।
              </li>
              <li>
                <strong>𑐂𑐮𑑂𑐐𑐵 𑐊𑐳𑐶𑐫𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑔𑑓 𑑋 </strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅: 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑓 𑐠𑐶𑑄𑐮𑐵 𑑑𑑐 𑐣𑐶𑐳𑐾𑑄 𑑑𑑔 𑑋 <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐴𑑂𑐰𑐔𑐶𑐩𑐶𑑄, 𑐨𑐶𑐊𑐟𑐣𑐵𑐩 𑑋 <br/>
                𑐩𑐶𑐳𑐵 𑐴𑑂𑐫𑐠𑐩𑐸𑑃𑐖𑑂𑐫𑐵𑐫𑐵 𑐴𑑂𑐣𑐵𑐥𑐵𑑄𑐐𑐸 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑐮𑐫𑑂 𑐣𑑂𑐰𑑄𑐰𑐵𑐣𑐵𑐐𑐸 𑐀𑐮𑐫𑑂 𑐩𑐶𑐳𑐵 𑐴𑐵𑐳𑑅𑐥𑑁 𑐡𑐫𑐾𑐎𑐾𑐟𑑅 𑐐𑑂𑐰𑐴𑐵𑐮𑐶 𑐫𑐵𑐣𑐵𑐐𑐸 𑑋 <br/>
                <Link href="https://www.ilgaasia2022.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟 𑑋
                </Link>।
              </li>
              <li>
                <strong>𑑑𑑔 𑐎𑑅𑐐𑐸 𑐮𑑂𑐰𑐟𑑂𑐫𑐵𑐎 𑐮𑐵𑐐𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑋</strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑒 𑐔𑑁𑐮𑐵 𑑒𑑙 𑑋<br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐫𑐾𑑃, 𑐣𑐾𑐥𑐵𑑅 𑑋 <br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : 𑐩𑐶𑐳𑐵 𑐰 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶𑐟 𑐡𑐠𑐸𑐂 𑐏𑑂𑐫𑐮𑑄𑐏𑑂𑐫𑑅 𑐳𑑂𑐰𑐵𑐥𑐹𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐣𑐵 𑑋 <br/>
                <Link href="https://rotaract3292.org/2022/04/16/14th-rotaract-district-conference/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟  
                </Link>।
              </li>
              <li>
                <strong>𑐴𑐮𑐶𑑄 𑐣𑐾𑐰𑐵𑑅 : 𑐩𑐾𑐐𑐸 𑐃𑐮𑑂𑐰𑐴𑑄, 𑐨𑐬𑑂𑐔𑐸𑐀𑐮 𑐴𑐮𑐶𑑄 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 ।   </strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 𑑑𑑒 𑑋 <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐀𑐣𑐮𑐵𑐂𑐣 𑑋 <br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐫𑑂 𑐢𑑂𑐫𑐵𑐎𑑂𑐰𑐫𑑂 𑐮𑐵𑐎𑐵𑐟𑑅𑐐𑐸 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅, 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐰 𑐫𑐔𑐵 𑐟𑐵𑐖𑐶𑐫𑐵 𑐩𑐣𑐹𑐟 𑑋 <br/>
                <Link href="https://youtu.be/K1Vz-k5EhQ0" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐨𑐶𑐡𑐶𑐰𑐵
                </Link> ।
              </li>
              <li>
                <strong>𑐩𑐔𑐵 𑐧𑐸𑐂𑐎𑐾𑐫𑐵 𑐄𑐳𑐵𑑃𑐫𑑂 𑐰 𑐫𑐔𑐵 𑐄𑐳𑐵𑑃𑐫𑑂 𑐣𑐵𑐥𑑄 𑐄𑐎𑐾𑐫𑐵 𑐰𑐵𑑄𑐫𑐵 𑐏𑑃𑐫𑑂 𑐗𑐶𑐎𑑅𑐐𑐸 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 ।</strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑑 𑐥𑑂𑐰𑑃𑐴𑐾𑐮𑐵 𑑓 । <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐀𑐣𑐮𑐵𑐂𑐣 ।<br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐮𑐵𑐐𑐵𑐫𑑂 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅 𑐰 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐣𑐵𑐥𑑄 𑐫𑐔𑐵 𑐰 𑐩𑐔𑐵 𑐧𑐸𑐂𑐎𑐾𑐐𑐸 𑐄𑐳𑐵𑑃𑐫𑑂 𑐰 𑐰𑐵𑑄 । <br/>
                <Link href="https://apcrshr10cambodia.org/apcrshr10-virtual-14-sexual-orientation-and-gender-identity-srhr-in-asia-pacific/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟
                </Link>।
              </li>
              <li>
                <strong>𑐣𑐵𑐮𑐳𑐵𑐬 𑐠𑐶𑐟𑐶 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 — 𑐩𑑄𑐎𑐵𑑅 𑐖𑑂𑐫𑐵𑐔𑐸 𑐥𑐸𑐔𑑅 । </strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑑄𑐮𑐵 𑑑𑑙 । <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐀𑐣𑐮𑐵𑐂𑐣 𑑋 <br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐳𑐸 𑐰 𑐠𑐶𑐟𑐶𑐫𑐵 𑐏𑑃𑐫𑑂 𑐳𑐴𑐮𑐴, 𑐂𑐟𑐵 𑐊𑐳𑐶𑐫𑐵𑐫𑐵 𑐣𑐣𑐵𑐏𑑄 𑑋<br/>
                <Link href="https://youtu.be/DvwXmFh9NSw" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐨𑐶𑐡𑐶𑐰𑐵
                </Link>
              </li>
              <li>
                <strong> 𑐩𑐶𑐳𑐵𑐟𑐫𑑂‌𑐐𑐸 𑐮𑑅𑐴𑑂𑐮𑐵𑐣𑐵 (𑐰𑐶𑐩𑐣 𑐡𑐾𑐮𑐶𑐨𑐬) 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑓𑑙 । </strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑙 𑐟𑐕𑐮𑐵 𑑑𑑗 𑐣𑐶𑐳𑐾𑑄 𑑒𑑐 । <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐨𑑂𑐫𑐵𑐒𑐎𑐸𑐨𑐬, 𑐎𑑂𑐫𑐵𑐣𑐾𑐡𑐵 । <br/>
                <p className="pl-8">
                  𑐎) 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐮𑐵𑐐𑐵𑐫𑐵 𑐮𑑂𑐫𑐵𑐫𑑂𑐴𑑂𑐩𑐟𑐫𑑂‌𑐐𑐸 𑐴𑑂𑐫𑐠𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑐴𑑂𑐣𑑂𑐫𑐵𑐎𑐵𑐐𑐸 । <br/>
                  𑐏) 𑐎𑑂𑐰𑐔𑐵𑐫𑐾𑐎𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵𑐫𑑂 𑐣𑑂𑐰𑑄𑐰𑐵𑐣𑐵𑐐𑐸 ।
                </p>
                <Link href="https://youtu.be/H0yHG8wusnE" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                   𑐨𑐶𑐡𑐶𑐰𑐵
                </Link>

              </li>
              <li>
                <strong>𑐴𑐮𑐶𑑄 𑐊𑐡𑑂𑐳 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑓𑑘 ।</strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐐𑐸𑑄𑐮𑐵 𑑕 𑐣𑐶𑐳𑐾𑑄 𑑙  ।  <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐫𑐵𑐩𑐳𑑂𑐟𑐬𑐡𑑂𑐫𑐵𑐩, 𑐣𑑂𑐫𑐡𑐬𑐮𑑂𑐫𑐵𑐣𑑂𑐡 । <br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : <br/>
                <p className="pl-8">
                  𑐎) 𑐟𑑂𑐫𑐧𑐸𑐮𑐫𑑂 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶𑐟 : 𑐮𑐶𑐥𑐵𑐫𑐵 𑐟𑐵𑐦𑐹; <br/>
                  𑐏) 𑐎𑑂𑐰𑐵𑐟𑐸𑐳𑐸𑐫𑐵 𑐎𑐸𑐟𑐮𑐫𑑂 : 𑐄𑐳𑐵𑑃𑐫𑑂 𑐳𑐸𑐳𑐵𑑅𑐩𑐶 𑐰𑐵 𑐳𑐸𑐳𑐵𑑅 𑐎𑐵𑑅𑐥𑐶𑑄 𑐥𑐵𑐏𑐾𑑄 𑐠𑑅𑐠𑑅𑐐𑐸 𑐏𑑃; <br/>
                  𑐐) 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐰𑐵𑑄𑐎𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐨𑐶𑑄𑐄𑐳𑐵𑑃𑐫𑑂 𑐰 𑐮𑐶𑐳𑑂𑐰𑐣𑐵𑐫𑐵 𑐏𑑃𑐫𑑂 𑐖𑑂𑐫𑐵𑐳𑐸 𑐩𑐸𑑃𑐖𑑂𑐫𑐵; <br/>
                  𑐑) 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐴𑑂𑐣𑑂𑐫𑐮𑐸𑐰𑐵𑑅𑐟 𑐥𑐵𑐏𑐾𑑄 𑐘𑑂𑐫𑐣𑐾𑐎𑐣𑐾 : 𑐖𑐶𑐩𑐶𑐐𑐸 𑐴𑑂𑐫𑐹𑐥𑐵𑑅 𑐳𑑂𑐰𑐫𑐾𑐐𑐸 𑐩𑑄𑐟𑐸𑐣𑐵 𑑋 <br/>
                </p>
                <Link href="https://programme.aids2018.org/People/PeopleDetailStandalone/9021" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                    𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟
                </Link> ।
              </li>
              <li>
                <strong>𑑓𑑘𑐎𑑅𑐐𑐸 𑐩𑐶𑐰𑐵𑑄 𑐎𑐰𑑅𑐫𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵, 𑐳𑐶𑐠 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅</strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 : 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑐶𑐮𑐵 𑑑 𑑋 <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐖𑐾𑐣𑐶𑐨𑐵, 𑐳𑐸𑐂𑐖𑐬𑐮𑑂𑐫𑐵𑐣𑑂𑐡 𑑋 <br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐩𑐶𑐏𑐵𑑄 𑐩𑐶𑐳𑐵𑐧𑐵𑐡 𑐰 𑐖𑐵𑑅 𑐄𑐟𑐶𑑄𑐐𑑂𑐫𑑄𑐎𑐾𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑑂 𑐖𑐵𑑅 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 𑐰 𑐥𑐶𑐧𑑂𑐰𑐫𑐵𑐫𑐵𑐟 𑐩𑐹𑐢𑐵𑐮𑐫𑑂 𑐴𑐫𑐾𑐐𑐸 । <br/>
                <Link href="https://fb.watch/fxIb6p0K83/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                    𑐨𑐶𑐡𑐶𑐰𑐵
                </Link> ।
                <Link href="https://gate.ngo/trans-activists-advocate-for-their-rights-at-the-united-nations/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                    𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟
                </Link> ।
              </li>
              <li>
                <strong>𑐴𑐮𑐶𑑄𑐫𑐵 𑐩𑐶𑐳𑐵𑐟 (𑐰𑐵𑐄) 𑐫𑐾𑑃 𑑑𑑑𑑓𑑘 𑑋 । </strong> <br/>
                𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅: 𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐔𑐶𑐮𑐵 𑑑 𑑋 <br/>
                𑐧𑑂𑐰𑐟𑐶 : 𑐮𑐔𑑄𑐡𑐣𑐵 𑐧𑑂𑐰𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 (𑐁𑐂𑐌𑐂) – 𑐥𑐹𑐔𑑂𑐰 𑐠𑑃𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶, 𑐫𑐮, 𑐣𑐾𑐥𑐵𑑅 । <br/>
                𑐡𑐧𑐹 𑐳𑐴𑐮𑐴 : 𑐩𑐶𑐳𑐵 𑐰 𑐫𑐔𑐵𑐳𑐸 𑑋 <br/>
                <Link href="https://www.britishcouncil.org.np/wowktm-2018-panel-discussion" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  𑐐𑑂𑐰𑐳𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐰𑐾𑐧𑐳𑐵𑐂𑐟
                </Link> ।
              </li>
            </ol>
            
          </div>

          {/* Publications */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐔𑑂𑐰𑐳𑐸 𑐰 𑐳𑐦𑐹 𑐥𑐶𑐠𑐣𑐵</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑑄 𑐔𑑂𑐰𑐫𑐵𑐐𑐸 𑐠𑐷𑐠𑐷 𑐔𑑂𑐰𑐳𑐸 𑐰 𑐳𑐦𑐹 𑐠𑐣 𑐎𑑂𑐰𑐫𑑂 𑐴𑑂𑐣𑑂𑐫𑐠𑐣𑐵 𑐟𑐫𑐵𑐐𑐸 𑐳𑑂𑐰𑐵𑐥𑐹 𑐁𑐏𑐮𑐫𑑂 𑐟𑐶𑐫𑐵𑑅 𑐳𑑂𑐰𑑅 𑐗𑐵𑐫𑐾 𑐦𑐂 𑑋
            </p>
            <ul className="list-disc pl-8">
              <li><Link href="https://rukshanakapali1119.wordpress.com/myacademia/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐥𑑂𑐬𑐐𑑂𑐫𑐵𑑃 𑐔𑑂𑐰𑐳𑐸</Link></li>
              <li><Link href="https://rukshanakapali1119.wordpress.com/myarticles/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐄𑐐𑐸𑑄𑐠𑐸𑐐𑐸𑑄 𑐔𑑂𑐰𑐳𑐸</Link></li>
              <li><Link href="https://rukshanakapali1119.wordpress.com/mybooks/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑐦𑐹</Link></li>
            </ul>
            <p className="text-gray-700 mt-2 text-justify">
              <Link href="https://archive.org/details/@user_28080" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐁𑐬𑐎𑐵𑐂𑐨 𑐦𑐸𑐟𑐶 𑐀𑐬𑑂𑐐</Link> 𑐫𑑂 𑐣𑑄 𑐖𑐶𑑄 𑐔𑑂𑐰𑐫𑐵𑐐𑐸 𑐠𑐷𑐠𑐷 𑐔𑑂𑐰𑐳𑐸 𑐩𑐸𑐒𑑂𑐎𑐵 𑐟𑐫𑐵𑐐𑐸 𑐡𑐸  ।
            </p>   
          </div>

          {/* Legal Portfolio */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐠𑐶𑐟𑐶𑐫𑐵 𑐏𑑃</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑑄 𑐠𑐶𑐟𑐶 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐟𑐫𑐵𑑅 𑐫𑐵𑐣𑐵𑐐𑐸 𑐠𑐷𑐠𑐷 𑐖𑑂𑐫𑐵𑐫𑐵𑐟 𑐴𑑂𑐣𑑂𑐫𑐧𑑂𑐰𑐫𑐵 𑐎𑑂𑐫𑐣𑐵𑐟𑐫𑐵𑐐𑐸 𑐥𑑁 𑐳𑑂𑐰𑐫𑐾𑐐𑐸 𑐣𑐶𑐟𑐶𑑄 <Link href="https://rukshanakapali1119.wordpress.com/legalportfolio/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃</Link> ।
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑑄 𑐣𑑂𑐫𑐵𑑅𑐎𑐸𑐠𑐶𑐂 𑐡𑐸𑐟𑐶𑐣𑐵𑐐𑐸 𑐠𑐷𑐠𑐷 𑐂𑐣𑐵𑐥𑐥𑑁 𑐳𑑂𑐰𑐫𑐾𑐐𑐸 𑐣𑐶𑐟𑐶𑑄 <Link href="https://rukshanakapali1119.wordpress.com/writ-petitions/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500"> 𑐠𑐣 𑐟𑐶𑐫𑐵𑐡𑐶𑐳𑑃</Link> ।
            </p>   
          </div>

          {/* International Conferences */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐡𑐾𑐫𑑂‌𑐳𑑄𑐡𑐾𑐫𑑂‌ 𑐩𑐸𑑃𑐖𑑂𑐫𑐵</h2>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐶𑑄 𑐧𑑂𑐰𑐟𑐶 𑐎𑐫𑐵𑐐𑐸 𑐠𑐷𑐠𑐷 𑐡𑐾𑐫𑑂‌𑐳𑑄𑐡𑐾𑐫𑑂 𑐩𑐸𑑃𑐖𑑂𑐫𑐵𑐫𑑂 𑐕𑐸𑑄 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑐠𑐸𑐎𑐠𑑄 𑐡𑐸 :-
            </p>   
            <ol className="list-decimal pl-8">
              <li>2024 Global LGBTI Funding Summit. (<Link href="https://lgbtifundingsummit.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>International Youth Conference 10th Edition (IYC10). (<Link href="https://iycforyouth.org/events/international-youth-conference-10th-edition-iyc10/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐨𑐵𑐫𑑂‌𑐫𑐵 𑐣𑑂𑐫𑐵𑑅 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑔𑑓, 𑐦𑐵𑐄𑐣𑑂𑐡𑐾𑐳𑐣 𑐦𑐬 𑐖𑐳𑑂𑐟 𑐳𑑀𑐳𑐵𑐂𑐟𑐶 । </li>
              <li>𑐨𑐵𑐫𑑂 𑐖𑑂𑐫𑐵𑐔𑐸 𑐡𑐧𑐹 𑑑𑑑𑑔𑑓 । (<Link href="https://www.soas.ac.uk/about/event/language-policy-forum-2023" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐨𑐵𑐫𑑂 𑐰 𑐨𑐵𑐫𑑂‌𑐡𑐸𑐳𑐷𑐎𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑒𑑙  । (<Link href="https://sites.google.com/boisestate.edu/lavenderlanguagesconference29/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐗𑐷𑐐𑐸 𑐮𑐶𑐰𑐃𑐫𑐵𑐟 𑐴𑐵𑐎𑐣𑑄 𑐧𑐶𑐔𑐵𑑅 𑐫𑐵𑐫𑐾 : 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐰 𑐠𑐷𑐠𑐷 𑐖𑐵𑑅𑐩𑐶𑐟𑐫𑑂‌𑐐𑐸 𑐩𑐸𑑃𑐖𑑂𑐫𑐵, 𑐂𑐟𑐵 𑐊𑐳𑐶𑐫𑐵, 𑑑𑑑𑑔𑑓 । (<Link href="https://weareaptn.org/2023/01/12/reimagine-our-future-trans-and-gender-diverse-peoples-convening-south-asia/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐂𑐮𑑂𑐐𑐵 𑐊𑐳𑐶𑐫𑐵 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑔𑑓  । (<Link href="https://www.ilgaasia2022.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐨𑐵𑐫𑑂‌𑐫𑐵 𑐣𑑂𑐫𑐵𑑅 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑔𑑒, 𑐦𑐵𑐄𑐣𑑂𑐡𑐾𑐳𑐣 𑐦𑐬 𑐖𑐳𑑂𑐟 𑐳𑑀𑐳𑐵𑐂𑐟𑐶  । </li>
              <li>𑐡𑐸𑐢𑑄𑐐𑐸 𑐧𑑂𑐰𑐮𑐒𑑂𑐎𑐾𑐖𑑂𑐫𑐵𑐫𑑂 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐡𑐧𑐹 𑑑𑑑𑑔𑑒, 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐡𑐧𑐹 । </li>
              <li>𑐩𑐶𑐳𑐵𑐟𑐫𑑂‌𑐐𑐸 𑐮𑑅𑐴𑑂𑐮𑐵𑐣𑐵 (𑐰𑐶𑐩𑐣 𑐡𑐾𑐮𑐶𑐨𑐬) 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑓𑑙   (<Link href="https://wd2019.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐴𑐮𑐶𑑄 𑐊𑐡𑑂𑐳 𑐩𑐸𑑃𑐖𑑂𑐫𑐵 𑑑𑑑𑑓𑑘 (<Link href="https://www.aids2018.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
              <li>𑐩𑐔𑐵 𑐧𑐸𑐂𑐎𑐾𑐫𑐵 𑐄𑐳𑐵𑑃𑐫𑑂 𑐰 𑐫𑐔𑐵 𑐄𑐳𑐵𑑃𑐫𑑂 𑐣𑐵𑐥𑑄 𑐄𑐎𑐾𑐫𑐵 𑐰𑐵𑑄𑐫𑐵 𑐏𑑃𑐫𑑂 𑐐𑐸𑐎𑑅𑐐𑐸 𑐊𑐳𑐶𑐫𑐵 𑐥𑑂𑐬𑐳𑐵𑐣𑑂𑐟 𑐩𑐸𑑃𑐖𑑂𑐫𑐵, 𑑑𑑑𑑓𑑗 (<Link href="https://asiapacific.unfpa.org/en/events/9th-asia-pacific-conference-reproductive-and-sexual-health-and-rights" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)</li>
            </ol>
          </div>

          {/* Features */}
          <div className="space-y-4 text-xl"> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐕𑐸𑑄 𑐧𑐶𑐳𑐎𑑄𑐫𑐵 𑐎𑐶𑐥𑐵</h2>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>TIME 100 Next 2024</strong> (<Link href="https://time.com/7023612/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>𑐧𑐶𑐧𑐶𑐳𑐶 𑑒𑑐𑑒𑑓 𑐫𑐵 𑑑𑑐𑑐 𑐴𑑂𑐩 𑐩𑐶𑐳𑐵𑐟 :</strong> (<Link href="https://www.bbc.co.uk/news/resources/idt-02d9060e-15dc-426c-bfe0-86a6437e5234" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>विकिपेडिया </strong> (<Link href="https://en.wikipedia.org/wiki/Rukshana_Kapali" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Championing change, The Kathmandu Post</strong> (<Link href="https://kathmandupost.com/art-culture/2023/12/09/championing-change-1702090110" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Minchyaa Meyju by Mrigaja Bajracharya, British Council Nepal</strong> (<Link href="https://fb.watch/wfCGj4zRLH/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>𑐖𑐶𑐐𑐹 𑐖𑑂𑐫𑐹𑐟𑐵𑑅𑐫𑐵 𑐣𑐎𑐶𑑄𑐟 : </strong> (<Link href="https://theheroines.blogspot.com/2021/08/interview-with-rukshana-kapali.html" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>संयुक्त राष्ट्र बालिका शिक्षा पहल : तपाइँले चिन्न पर्ने ६ युवा क्वयेर अभियानकर्ताहरू</strong> (<Link href="https://medium.com/ungei-blog/6-lgbtq-young-activists-you-should-know-about-d0fcccc68fdd" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>𑐫𑐬𑑂𑐎 𑐴𑐮𑐶𑑄𑐧𑑂𑐰𑐣𑐾𑐎𑐸𑐠𑐶 : </strong> (<Link href="https://www.york.ac.uk/cahr/human-rights-defenders/protective-fellowship/past/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>𑐩𑐟𑐶𑐣𑐵 𑐫𑐵𑐫𑐾 𑐩𑐡𑐸𑐐𑐸 𑐠𑐵𑐫𑑂 :  </strong> (<Link href="https://whereloveisillegal.com/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐩𑐶𑐳𑐵 𑐎𑐰𑑅 : 𑐖𑐶 𑐔𑑂𑐰𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑐠𑐵𑐳𑑄 𑐳𑑂𑐰𑐫𑐾𑐧𑐮𑐫𑑂 𑐏𑑂𑐫𑐮𑑄𑐏𑑂𑐫𑑅 𑐳𑑂𑐰𑐵𑐥𑐹𑐫𑐵𑐟 𑐣𑐵𑐮𑐵𑑅 𑐎𑐵𑐫𑐾𑐐𑐸 𑐏𑑃𑐫𑑂 𑐣𑐶𑐐𑐸𑐮𑐶𑑄 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐣𑐵𑐩𑐵𑐮𑐫𑑂 𑐴𑐵𑐟𑑂𑐠𑐵𑐫𑑂 𑐏𑐣𑐵 (<Link href="https://asiapacific.unwomen.org/en/news-and-events/stories/2019/06/fwis-rukshana-kapali" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐴𑐮𑐶𑑄 𑐡𑐾𑐫𑑂 𑐩𑑄𑐎𑐵𑑅 𑐏𑐮𑑅𑐫𑐵 𑐳𑐸𑐔𑑄 𑐡𑐠𑐸𑐎𑐸𑐠𑐶 : (<Link href="https://un.info.np/Net/NeoDocs/View/9214" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐖𑐵𑑅 𑐄𑐟𑐶𑑄𑐐𑑂𑐫𑑄𑐎𑐾𑐐𑐸 𑐖𑑂𑐫𑐵𑐫𑑂 𑐖𑐶𑐐𑐹 𑐎𑐸𑐟𑑅, 𑐳𑐶 𑐂𑐖 𑐡 𑐳𑑂𑐟𑑀𑐬𑐶 (<Link href="http://sheisthestory.com/my-struggle-for-gender-equality-rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐕𑐴𑑂𑐩 𑐩𑐾𑐴𑑂𑐩 ‘𑐩𑐾𑐟𑐵𑐖𑐶’ 𑐩𑐏𑐸, 𑐳𑑂𑐟𑐾𑐮𑐵𑐬 𑐀𑐣𑐮𑐵𑐂𑐣 : (<Link href="https://studioiridium.wixsite.com/magazine/post/rukshana-kapali-not-another-other" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              𑐣𑐾𑐥𑐵𑑅𑐫𑐵 𑐎𑑂𑐰𑐫𑑂‌𑐮𑐩𑐶 𑐴𑑂𑐣𑑂𑐫𑐵𑑅𑐳𑐣𑐵𑐫𑑂 𑐠𑐵𑐟𑑄𑐡𑐧𑐹 𑐳𑐒𑑂𑐎𑐾𑐐𑐸 𑐎𑐸𑐟𑑅, 𑐳𑐸𑐡𑑂𑐢𑐳𑐵𑐬 :  (<Link href="https://shuddhashar.com/shaking-up-the-status-quo-in-nepals-queer-movement-mallika-aryal/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐳𑑂𑐰𑐵𑐥𑐹</Link>)
            </p>
          </div>

          {/* Miscellaneous */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">𑐄𑐐𑐸𑑄𑐠𑐸𑐐𑐸𑑄</h2>
            <ol className="list-decimal pl-8">
              <li>
                𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐/𑑔𑑑 𑐡𑑃 𑐥𑐵𑐏𑐾 𑐖𑐶𑑄 𑐬𑐸𑐎𑐸 𑐫𑐸 𑐨𑐵𑐂𑐣𑑂𑐳 𑐣𑐵𑑄𑐫𑐵 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑑄 𑐏𑑂𑐫𑐵𑐮𑑅 𑐨𑐶𑐡𑐶𑐰𑐵 𑐡𑐫𑐾𑐎𑐵𑐐𑐸 𑐡𑐸 𑑋 
                <Link href="https://www.youtube.com/watch?v=WG8q92c3iak&feature=youtu.be" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐨𑐶𑐡𑐶𑐰𑐵 𑐩𑐸𑐣𑐵 </Link>।
              </li>
              <li>
                𑐖𑐶𑑄 𑐡𑐾𑐫𑑂 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐏𑐮𑑅 𑐥𑐵𑐏𑐾𑑄 𑐐𑑂𑐰𑐳𑐵𑑅 𑐐𑑂𑐰𑑅𑐐𑐸 𑐡𑐾𑐫𑑂‌𑐩𑑄𑐎𑐵𑑅 𑐮𑑂𑐫𑐵𑐫𑑂‌𑐩𑐶 𑐠𑐵𑐥𑑄𑐥𑐵𑑅𑐮𑐵𑑅 𑐳𑑂𑐰𑐣𑐾𑐐𑐸 𑐰 𑐎𑐸𑐟𑑅 𑐖𑑂𑐫𑐵𑐗𑑂𑐰𑑅 – 𑑑𑑑𑑓𑑘 𑐫𑑂 𑐧𑑂𑐰𑐟𑐶 𑐎𑐫𑐵𑐐𑐸 𑐡𑐸 𑑋
              </li>
              <li>
                𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑓𑑘 𑐡𑑃𑐫𑑂 𑐳𑑂𑐰𑐫𑐵𑐟𑑂𑐬𑐵 𑐣𑐵𑑄𑐫𑐵 𑐕𑐟𑐵 𑐩𑐶𑐳𑐵𑐟 𑐫𑐵𑐎𑑅𑐧𑐵𑐎𑑅 𑐔𑐵𑑅𑐴𑐶𑐮𑐾𑐐𑐸 𑐴𑐵𑐠𑑂𑐫𑐵 𑐢𑐾𑑄𑐢𑐾𑑄𑐧𑐮𑑂𑐮𑐵𑐫𑑂 𑐧𑑂𑐰𑐟𑐶 𑐎𑐫𑐵𑑅 𑐮𑑂𑐰𑐡𑐾𑐫𑑂 (𑐩𑐸𑐳𑑂𑐟𑐵𑐒) 𑐔𑐵𑑅𑐴𑑂𑐫𑐹 𑐰𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋 <br/>
                <Link href="https://nepaltraveller.com/sidetrack/246" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐧𑐸𑐏𑑃𑐫𑐵 𑐳𑑂𑐰𑐵𑐥𑐹</Link>। <br/>
                <Link href="https://youtu.be/-TdPcsKbC80" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">𑐨𑐶𑐡𑐶𑐰𑐵𑐫𑐵 𑐳𑑂𑐰𑐵𑐥𑐹</Link> ।
              </li>
            </ol>
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
