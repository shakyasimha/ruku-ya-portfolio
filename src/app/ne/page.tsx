import { newaLipi } from "@/ui/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Metadata
export const metadata = {
  title: '𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵 - Rukshana Kapali'
};

// Main component
export default function Home() {
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
          <h2 className="text-xl font-bold">𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵</h2>
          <p className="text-gray-700 mt-2 mb-4 text-justify">
           𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑐵 𑐂𑐮𑐫𑑂 𑐟𑐵𑐎 𑐠𑑂𑐫𑑄 𑐧𑐮𑐫𑑂 𑐖𑐶𑐐𑐸 𑐖𑑂𑐫𑐵 𑐩𑐹𑐎𑐠𑑄 𑐨𑐵𑐫𑑂, 𑐫𑐎𑑂𑐰𑐖𑐵𑑅𑐴𑑂𑐩𑐫𑐟𑐵 𑐰 𑐎𑐵𑐣𑐸𑐣 𑐮𑐶𑐳𑐾𑑄 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵 𑐰 𑐣𑐾𑐰𑐵𑑅𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐳𑐸𑐂 𑐎𑑂𑐰𑐳𑑂𑐫𑐹 𑐰𑐣 𑑋 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐩𑐵𑐮𑐾𑐎𑐸𑐮𑐾𑐖𑑂𑐫𑐵 𑐰 𑐮𑑂𑐰𑐎 𑐰𑐵𑑅𑐔𑐵𑑅 𑐠𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐖𑑂𑐰𑐮𑑄 𑐥𑐶𑐠𑐣𑐾𑐐𑐸 𑐰 𑐥𑐬𑐐𑑂𑐫𑐵𑑃 𑐔𑑂𑐰𑐳𑐸 𑐠𑐾𑑄 𑐖𑑂𑐰𑑅𑐐𑐸 𑐐𑑂𑐫𑐵𑑄 𑐧𑐶𑐂𑐐𑐸 𑐖𑑂𑐰𑐮𑑄 𑐡𑐫𑐾𑐎𑐾𑐐𑐸𑐮𑐶𑐂 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵 𑑋 𑐠𑑂𑐰𑐫𑐵 𑐮𑐶𑐳𑐾𑑄 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐣𑑂𑐫𑐵𑑅𑐎𑐸𑐠𑐶𑐂 𑐂𑐣𑐵𑐥 𑐟𑐫𑐵𑑅 𑐎𑐵𑐣𑐸𑐣 𑐥𑐵𑐏𑐾𑑄 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐫𑐾𑐐𑐸 𑐰 𑐖𑑂𑐫𑐵𑐔𑐸 𑐴𑐶𑐮𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋
          </p>

          <h2 className="text-xl font-bold">𑐩𑐶𑐮𑑂𑐫𑐵𑑅𑐖𑑂𑐫𑐵𑐳𑐸</h2>
          <p className="text-gray-700 mt-2 text-justify">
            𑐖𑐶 𑐴𑐶𑐮𑐵𑐖𑐵𑑅𑐩𑐶 𑐩𑐶𑐳𑐵 𑐧𑐵 𑐴𑐶𑐮𑐵𑐩𑐶𑐳𑐵 𑐏𑑅 𑑋 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂 𑐖𑐶𑑄 She/Her 𑐥𑐮𑐶𑐣𑐵𑑄 𑐕𑑂𑐫𑐮𑐵 𑑋 𑐀𑐠𑐾 𑐴𑐾 𑐂𑐒𑐮𑐶𑐳 𑐨𑐵𑐳𑐫𑑂 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐣𑐵𑐏𑑃𑐐𑑂𑐰𑑅 Ms. 𑐢𑐎𑐵𑑅 𑐕𑑂𑐫𑐮𑐵 𑑋 𑐏𑐫𑑂 𑐨𑐵𑐳𑐫𑑂 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐣𑐵𑐏𑑃𑐐𑑂𑐰𑑅 𑐩𑐡𑐸𑐐𑐸 𑐖𑐸𑐫𑐵𑑅 ‘𑐳𑐸𑐱𑑂𑐬𑐷 / 𑐱𑑂𑐬𑐷𑐩𑐟𑐷‘𑐫𑐵 𑐠𑐵𑐳𑐫𑑂 ‘𑐱𑑂𑐬𑐷‘ 𑐢𑐎𑐵𑑅 𑐕𑑂𑐫𑐮𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵𑐫𑑂 𑐮𑐵 𑐩𑐫𑑂‌𑐖𑐸 𑐏𑑃𑐐𑑂𑐰𑑅 𑐂𑐴𑐶𑐥𑐵 𑐖𑐹𑐩𑐖𑐹 𑐣𑐵𑐥𑑄 𑐳𑑂𑐰𑐵𑐥𑐹 𑐩𑐡𑐸𑐐𑐸 𑐴𑐾 𑐏𑑃𑐐𑑂𑐰𑑅 𑐖𑐸𑐮 𑑋

            𑐖𑐶𑑄 𑐠𑑅𑐐𑐸 𑐫𑐔𑐵 𑐎𑑂𑐰𑐳𑐵𑑅 𑐨𑑂𑐰𑐫𑐔𑐵𑐩𑐶 𑐰 𑐕𑑂𑐰𑐵𑐮𑐸 𑐢𑐎𑐵𑑅 𑐠𑐸𑐂𑐎𑐾𑐐𑐸 𑐫𑐵𑐣𑐵 𑑋

            𑐖𑐶 𑐣𑐷𑐳𑑂𑐰𑐡𑑃 𑐦𑐸𑐣𑐵𑑅 𑐣𑐷𑐥𑑂𑐫𑐡𑑃𑐫𑑂 𑐔𑑂𑐰𑐣𑐵 𑐔𑑂𑐰𑐣𑐵𑐴𑑂𑐩 𑐏𑑅 𑑋 𑐖𑐶𑐐𑐹 𑐧𑐸𑐴𑑂𑐣𑐶 𑐴𑑂𑐣𑐶𑐮𑑂𑐫𑐵𑑅 𑐎𑐠𑑄 𑐣𑐾𑐥𑐵𑐮 𑐳𑐩𑑂𑐧𑐟 𑑑𑑑𑑑𑑑 𑐔𑐶𑐮𑐵 𑑑𑑖 𑐏𑑅 𑐢𑐵𑑅𑐳𑐵 𑐩𑐶𑐮𑐵𑐮𑑂𑐫𑐵𑑅 𑐎𑐠𑑄 𑐔𑐶𑐮𑐵𑐐𑐵𑑅 𑐳𑑂𑐰𑐩𑐶𑐮𑐵 (𑐟𑐶𑐟𑐶𑐫𑐵) 𑐏𑐸𑐴𑑂𑐣𑐸 𑐮𑐵𑑅 𑑋

            𑐖𑐶𑐐𑐹 𑐡𑐾𑐫𑑂‌𑐳𑐸 𑐣𑐾𑐥𑐵𑑅𑐩𑐶 𑐏𑑅 𑑋 𑐖𑐶 𑐧𑑃𑐩𑐶 𑐣𑐾𑐰𑐵𑑅 𑐖𑐵𑐟𑐶𑐫𑐵𑐴𑑂𑐩 𑐏𑑅 𑑋 𑐣𑐾𑐰𑐵𑑅 𑐡𑐸𑐣𑐾 𑐖𑐶 𑐖𑐸𑐐𑐶 𑐖𑐵𑐟𑐫𑑂 𑐮𑐵𑑅 𑑋

            𑐖𑐶𑐐𑐹 𑐧𑐸𑐳𑐾𑑄 𑐰𑑅𑐐𑐸 𑐟𑐸𑐟𑐶 𑐧𑑂𑐫𑐎𑑂𑐰𑑅-𑐔𑐵𑑅𑐟𑐹 (bilateral clubfeet) 𑐫𑐵 𑐰𑐵𑐳𑑅 𑐰 𑐳𑐸𑐳𑐵𑑅 𑐫𑐵𑐣𑐵𑑅 𑐮𑑂𑐫𑑄𑐥𑐸𑐮𑑂𑐫𑑅 𑐏𑐹 (residual disability) 𑐠𑐵𑑅𑐣𑐶 𑑋

          </p>
        </div>
      </div>

      {/* Footer section */}
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
          emailHeader: '𑐃𑐩𑐾𑐮', 
          email: "rukshanakapali1144@gmail.com", 
          phoneHeader: "𑐫𑐵𑑄𑐨𑐵𑐫𑑂 𑐮𑑂𑐫𑐵𑑅", 
          phone: "+𑑙𑑗𑑗-𑑙𑑘𑑐𑑘𑑒𑑖𑑒𑑖𑑙𑑙"
        }}
      />
    </div> 
  );
}
