import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_Devanagari, Roboto } from "next/font/google";
import Header from "@/components/Header";

// Font
const notoSerifDevanagari = Noto_Serif_Devanagari({
    weight: ['400', '500', '700'],
    subsets: ['devanagari']
});

const roboto = Roboto({
  weight: ['400', '500', '700'], 
  subsets: ['latin']
});

export default function Home() {
  return (
    <div className={`${notoSerifDevanagari.className} flex flex-col min-h-screen`}>
      <Header title="रुक्शना कपाली"/>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className="flex-1 md:mr-4 mx-4">
          <h2 className="text-xl font-bold">मेरो परिचय</h2>
          <p className="text-gray-700 mt-2 text-justify">
            मैले १५ वर्षको उमेरमा एक अभियानकर्ता तथा बलग लेखकका रूपमा आफ्नो यात्रा सुरु गरेको थिएँ । मेरो सर्वप्रथम लिखितम् आफ्नो लैङ्गिक पहिचान बारे खुलेर आएको सुरुवाती समयमा आफू पारलैङ्गिक व्यक्ति हुँदाको अनुभवलाई बटुलेर व्यक्तिगत अनुभवको लेख लेखेको थिएँ । मैले विशेष सरी पारलैङ्गिक व्यक्तिहरू एवं यौभिकयौता (यौन अभिमुखिकरण, लैङ्गिक पहिचान तथा यौन विशेषता) का मुद्दाहरू साथै भाषा, जातीयता एवं नेवाः जनसमुदाय / सम्पदा बारे लेख्न र बोल्न थालेँ ।
          </p>
          <p className="text-gray-700 mt-2 text-justify">
            ने.सं. ११४० (सन् २०२०) को समयमा आउँदा मेरो काम मुख्यतः भाषा, यौभिकयौता तथा कानून सहित नेपाल भाषा एवं नेवाः मुद्दाहरूमा केन्द्रित भएको छ । म विशेष गरी अनुसन्धान, जनचेतनामूलक सामाग्री प्रकाशन, प्राज्ञिक लेखन लगायतका ज्ञान उत्पादनमा काम गर्छु । यसका साथै म विशेष गरी अदालतमा रिट निवेदन दायर गरी कानूनी अभियान मार्फत् नीतिगत परिवर्तनमा काम गर्छु ।          </p>
        </div>

        {/* Location, contact details */}
        <div className="flex-1 space-y-4 mx-4 md:ml-16 mt-2">
          <div>
            <h2 className="text-xl font-bold">ठेगाना</h2>
            <div className="flex items-center gap-2 mt-1">
              <Image 
                src="https://flagcdn.com/w80/np.png"
                width={20}
                height={20}
                alt="Nepal flag"
              />
              <p>ललितपुर, नेपाल</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">ईमेल</h2>
            <Link 
                className={`${roboto.className} hover:opacity-80 hover:transition hover:duration-500`}
                href="mailto:rukshanakapali1144@gmail.com"
            >
                rukshanakapali1144@gmail.com
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-bold">सम्पर्क नम्बर</h2>
            <p>+९७७-९८०८२६२६९९</p>
          </div>
        </div>
      </div>
    </div> 
  );
}
