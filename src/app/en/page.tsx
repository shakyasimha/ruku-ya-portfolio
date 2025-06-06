import Image from "next/image";
import Link from "next/link";
import { Alegreya_Sans, Roboto } from "next/font/google";
import Header from "@/components/Header";

// Font 
const alegreyaSans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], 
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Rukshana Kapali"/>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className={`${roboto.className} flex-1 md:mr-4 mx-4`}>
          <h2 className={`${alegreyaSans.className} text-2xl font-bold`}>About Me</h2>
          <p className="text-gray-700 mt-2 text-justify">
            My interest and work involves Language, Linguistics, Newa issues, Nepala Bhasa, Law, and SOGIESC issues. I engage in knowledge production through research, awareness toolkit publications, academic writing, and so on. I also engage in policy and legal issues, in which I mostly center on litigation. <br />
          </p>
          <p className="text-gray-700 mt-2 text-justify">
            Since N.S. 1141 (2020), my work has become more focused on SOGIESC issues, through registration of Queer Youth Group (QYG) as a not-for-profit, which was a loose network I co-initiated. As a part of QYG, my work has mostly entailed engaging in production of resource materials on SOGIESC. Similarly, I have focused on legal activism through litigation, which entails filing writ petitions at Supreme Court & High Courts on issues of concern to the PoMSOGIESC demography, providing legal assistance to PoMSOGIESC individuals on issues pertaining to their rights, which has predominantly been about, but not limited to, legal gender recognition issues of transgender folks.
          </p>
          <p className="text-gray-700 mt-2 text-justify">
            Since N.S. 1143 (2022), I began working around Jugi community’s traditional abode of Satachhen. I have been lobbying, campaigning and petitioning to ensure right of ownership, right to housing and several other aspects of the community’s historical residence.
          </p>
        </div>

        {/* Location, contact details */}
        <div className="flex-1 space-y-4 mx-4 md:ml-16 mt-2">
          <div>
            <h2 className={`${alegreyaSans.className} text-2xl font-bold`}>Location</h2>
            <div className="flex items-center gap-2 mt-1">
              <Image 
                src="https://flagcdn.com/w80/np.png"
                width={20}
                height={20}
                alt="Nepal flag"
              />
              <p className={`${roboto.className}`}>Lalitpur, Nepal</p>
            </div>
          </div>

          <div>
            <h2 className={`${alegreyaSans.className} text-2xl font-bold`}>Email</h2>
            <Link 
              className={`${roboto.className} hover:opacity-80 hover:transition hover:duration-500`} 
              href="mailto:rukshanakapali1144@gmail.com"
            >
              rukshanakapali1144@gmail.com
            </Link>
          </div>

          <div>
            <h2 className={`${alegreyaSans.className} text-2xl font-bold`}>Contact Number</h2>
            <p className={`${roboto.className}`}>+977-9808262699</p>
          </div>
        </div>
      </div>
    </div> 
  );
}
