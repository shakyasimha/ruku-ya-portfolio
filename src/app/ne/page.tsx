import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_Newa, Roboto } from "next/font/google";
import Header from "@/components/Header";

// Font
const newaLipi = Noto_Sans_Newa({
    weight: ['400'],
    subsets: [`newa`]
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={`${newaLipi.className} flex flex-col min-h-screen`}>
      <Header title="𑐬𑐸𑐎𑑂𑐳𑐣𑐵 𑐎𑐥𑐵𑐮𑐶"/>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className="flex-1 md:mr-4 mx-4">
          <h2 className="text-xl font-bold">𑐖𑐶𑐐𑐹 𑐴𑑂𑐩𑐳𑐶𑐂𑐎𑐵</h2>
          <p className="text-gray-700 mt-2 text-justify">
           𑐣𑐾.𑐳𑑄. 𑑑𑑑𑑔𑑐 𑐫𑐵 𑐂𑐮𑐫𑑂 𑐟𑐵𑐎 𑐠𑑂𑐫𑑄 𑐧𑐮𑐫𑑂 𑐖𑐶𑐐𑐸 𑐖𑑂𑐫𑐵 𑐩𑐹𑐎𑐠𑑄 𑐨𑐵𑐫𑑂, 𑐫𑐎𑑂𑐰𑐖𑐵𑑅𑐴𑑂𑐩𑐫𑐟𑐵 𑐰 𑐎𑐵𑐣𑐸𑐣 𑐮𑐶𑐳𑐾𑑄 𑐣𑐾𑐥𑐵𑐮𑐨𑐵𑐳𑐵 𑐰 𑐣𑐾𑐰𑐵𑑅𑐟𑐫𑑂‌𑐐𑐸 𑐏𑑃𑐳𑐸𑐂 𑐎𑑂𑐰𑐳𑑂𑐫𑐹 𑐰𑐣 𑑋 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐩𑐵𑐮𑐾𑐎𑐸𑐮𑐾𑐖𑑂𑐫𑐵 𑐰 𑐮𑑂𑐰𑐎 𑐰𑐵𑑅𑐔𑐵𑑅 𑐠𑐣𑐾𑐖𑑂𑐫𑐵𑐫𑐵 𑐖𑑂𑐰𑐮𑑄 𑐥𑐶𑐠𑐣𑐾𑐐𑐸 𑐰 𑐥𑐬𑐐𑑂𑐫𑐵𑑃 𑐔𑑂𑐰𑐳𑐸 𑐠𑐾𑑄 𑐖𑑂𑐰𑑅𑐐𑐸 𑐐𑑂𑐫𑐵𑑄 𑐧𑐶𑐂𑐐𑐸 𑐖𑑂𑐰𑐮𑑄 𑐡𑐫𑐾𑐎𑐾𑐐𑐸𑐮𑐶𑐂 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵 𑑋 𑐠𑑂𑐰𑐫𑐵 𑐮𑐶𑐳𑐾𑑄 𑐖𑐶𑑄 𑐩𑐹𑐎𑐠𑑄 𑐣𑑂𑐫𑐵𑑅𑐎𑐸𑐠𑐶𑐂 𑐂𑐣𑐵𑐥 𑐟𑐫𑐵𑑅 𑐎𑐵𑐣𑐸𑐣 𑐥𑐵𑐏𑐾𑑄 𑐴𑑂𑐣𑑂𑐫𑐖𑑂𑐫𑐵𑐫𑐾𑐐𑐸 𑐰 𑐖𑑂𑐫𑐵𑐔𑐸 𑐴𑐶𑐮𑐾𑐐𑐸 𑐖𑑂𑐫𑐵 𑐫𑐵𑐣𑐵𑐔𑑂𑐰𑐣𑐵𑐐𑐸 𑐡𑐸 𑑋<br />
          </p>
        </div>

        {/* Location, contact details */}
        <div className="flex-1 space-y-4 mx-4 md:ml-16 mt-2">
          <div>
            <h2 className="text-xl font-bold">𑐠𑐵𑐫𑑂</h2>
            <div className="flex items-center gap-2 mt-1">
              <Image 
                src="https://flagcdn.com/w80/np.png"
                width={20}
                height={20}
                alt="Nepal flag"
              />
              <p>𑐫𑐮, 𑐣𑐾𑐥𑐵𑐮</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">𑐃𑐩𑐾𑐮</h2>
            <Link 
                className={`${roboto.className} hover:opacity-80 hover:transition hover:duration-500`}
                href="mailto:rukshanakapali1144@gmail.com"
            >
                rukshanakapali1144@gmail.com
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold">𑐫𑐵𑑄𑐨𑐵𑐫𑑂 𑐮𑑂𑐫𑐵𑑅</h2>
            <p>+𑑙𑑗𑑗-𑑙𑑘𑑐𑑘𑑒𑑖𑑒𑑖𑑙𑑙</p>
          </div>
        </div>
      </div>
    </div> 
  );
}
