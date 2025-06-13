import { notoSerifDevanagari } from "@/ui/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nepalSambat, nepalSambatDevanagari } from "@/lib/fetchYear";

// Site metadata 
export const metadata = {
  title: 'मेरो परिचय - Rukshana Kapali'
};

// Main content
export default function Home() {
  const year = 'ने.सं. '+nepalSambatDevanagari(nepalSambat());

  return (
    <div className={`${notoSerifDevanagari.className} flex flex-col min-h-screen`}>
      <Header title="रुक्शना कपाली"/>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className="flex-1 md:mr-4 mx-4">
          {/* About Me */}
          <div>
            <h2 className="text-xl font-bold">मेरो परिचय</h2>
            <p className="text-gray-700 mt-2 text-justify">
              मैले १५ वर्षको उमेरमा एक अभियानकर्ता तथा बलग लेखकका रूपमा आफ्नो यात्रा सुरु गरेको थिएँ । मेरो सर्वप्रथम लिखितम् आफ्नो लैङ्गिक पहिचान बारे खुलेर आएको सुरुवाती समयमा आफू पारलैङ्गिक व्यक्ति हुँदाको अनुभवलाई बटुलेर व्यक्तिगत अनुभवको लेख लेखेको थिएँ । मैले विशेष सरी पारलैङ्गिक व्यक्तिहरू एवं यौभिकयौता (यौन अभिमुखिकरण, लैङ्गिक पहिचान तथा यौन विशेषता) का मुद्दाहरू साथै भाषा, जातीयता एवं नेवाः जनसमुदाय / सम्पदा बारे लेख्न र बोल्न थालेँ ।
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              ने.सं. ११४० (सन् २०२०) को समयमा आउँदा मेरो काम मुख्यतः भाषा, यौभिकयौता तथा कानून सहित नेपाल भाषा एवं नेवाः मुद्दाहरूमा केन्द्रित भएको छ । म विशेष गरी अनुसन्धान, जनचेतनामूलक सामाग्री प्रकाशन, प्राज्ञिक लेखन लगायतका ज्ञान उत्पादनमा काम गर्छु । यसका साथै म विशेष गरी अदालतमा रिट निवेदन दायर गरी कानूनी अभियान मार्फत् नीतिगत परिवर्तनमा काम गर्छु ।          
            </p>
          </div>

          {/* Demographics */}
          <div>
            <h2 className="text-xl font-bold">जनसांख्यिकी</h2>
            <p className="text-gray-700 mt-2 text-justify">
              म एक पारलैङ्गिक महिला हुँ । अङ्ग्रेजी भाषामा म she/her सर्वनामको प्रयोग गर्दछु । त्यसै गरी म अङ्ग्रेजी भाषामा वैवाहिक स्थिति तटस्थ शीर्षक Ms. प्रयोग गर्दछु भने खस / पर्वते भाषामा सुश्री/श्रीमतीको वैवाहिक स्थिति तटस्थ विकल्प नभएकाले लैङ्गिक तटस्थ विकल्प श्री प्रयोग गर्ने गरेको छु । खस / पर्वते मातृभाषीहरूले जस्तै महिलाहरूलाई स्त्रीलिङ्गी व्याकरणात्मक सम्बोधन (जस्तै: गर्छे, गर्छिन्, गरेकी, इत्यादि) प्रयोग गर्ने चलन नेवाः समाजमा व्यापक नभएकाले मेरो पनि त्यसरी बोल्ने बानी छैन । कसैले त्यसरी सम्बोधन गरेमा अन्यथा मान्दिनँ तर आफूले प्रयोग गर्ने गरेको छैन ।
            </p>

            <p className="text-gray-700 mt-2 text-justify">
              मेरो यौन अभिमुखिकरणलाई म सर्वप्रणयात्मक (प्यानरोम्यान्टिक) तथा तरल भनेर व्याख्या गर्दछु ।          
            </p>

            <p className="text-gray-700 mt-2 text-justify">
              म चौबीस (२४) वर्षको भएँ । यसलाई हामी नेवाः समाजमा तेइस वर्ष सकेर चौबीस वर्षमा बसिरहेको भन्छौँ । जन्म मिति : नेपाल संवत् १११९ चिला १६ (वि.सं. २०५५ फागुन २० गते, सन् १९९९ मार्च ४) । हाम्रो परम्परा अनुसार नेपाल संवत्‌को चान्द्रमासिक पात्रो बमोजिम रीतिथितिको कार्य हुने भएकाले पाँचौँ महिना चिला महिनाको गाः (कृष्ण पक्ष) को तितिया (तृतीया) तिथिमा जन्मदिन मनाउने गर्दछु । विक्रम संवत् चन्द्रमानक पात्रो अनुसार यो फाल्गुन कृष्ण तृतीयाका दिन पर्दछ ।          
            </p>

            <p className="text-gray-700 mt-2 text-justify">
              मेरो राष्ट्रियता नेपाःमि (नेपाली) हो । म आदिवासी नेवाः जाती-राष्ट्रबाट हुँ । म त्यस अन्तर्गत जुगि जात समूहमा पर्दछु ।          
            </p>

            <p className="text-gray-700 mt-2 text-justify">
              मेरो जन्मजात वक्रपद द्वय (bilateral clubfeet) बाट उपचार उत्तरको अवशिष्ट अपाङ्गता (residual disability) रहेको छ ।          
            </p>
          </div>

          {/* Academic Qualification */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Academic Qualification</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Fellowships */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Fellowships</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Institutes */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Institutes</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* MOOCs */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>MOOCs</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Language Proficiency */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Language Proficiency</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Working Experiences */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Working Experiences</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Freelancing */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Freelancing</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Affilitations */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Affilitations</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Awards and Recognitions */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Awards and Recognitions</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Advocacy Experiences */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Advocacy Experiences</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Initiatives & Co-initiatives */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Initiatives & Co-initiatives</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Speaking Appointments */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Speaking Appointments</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Publications */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Publications</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Legal Portfolio */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Legal Portfolio</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* International Conferences */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>International Conferences</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Features */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Features</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>

          {/* Miscellaneous */}
          <div> 
            <h2 className={`${notoSerifDevanagari.className} mt-4 text-2xl font-bold text-red-700`}>Miscellaneous</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I am a trans woman. My pronouns are she/her. I go by the title Ms. I describe my sexual orientation as panromantic and fluid.
            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              My date of birth is N.S. 1119 Chila 16 (4 March 1999 C.E.) In Newa culture, we observe our rituals based on Lunar Calendar of the Nepala Sambata, therefore I celebrate my birthday on the month of Chila (fifth month), third lunar phase of the dark fortnight.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              My nationality is Nepa-mi (Nepali). I come from the Newa inidgenous nationality. Within Newa, I am from the Jugi community.
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              I have a mild physical disability, i.e. residual disability from treated bilateral congenital clubfeet.
            </p>   
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer 
          info={{
            headerClassName: notoSerifDevanagari.className,
            className: notoSerifDevanagari.className,
            name: "रुक्शना कपाली", 
            profileLink: "", 
            litigationLink: "", 
            publicationLink: "",
            locationHeader: "ठेगाना", 
            location: "ललितपुर, नेपाल", 
            emailHeader: "ईमेल", 
            email: "rukshanakapali1144@gmail.com", 
            phoneHeader: "सम्पर्क नम्बर", 
            phone: "+९७७-९८०८२६२६९९",
            year: year
          }}
        />
    </div> 
  );
}
