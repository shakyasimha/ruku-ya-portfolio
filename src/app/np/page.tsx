import { notoSerifDevanagari } from "@/ui/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nepalSambat, nepalSambatDevanagari } from "@/lib/fetchYear";
import Link from "next/link";

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
            <h2 className="mb-8 mt-4 text-2xl font-bold text-red-700 md:text-start text-center">मेरो परिचय</h2>
            <p className="text-gray-700 mt-2 text-justify">
              मैले १५ वर्षको उमेरमा एक अभियानकर्ता तथा बलग लेखकका रूपमा आफ्नो यात्रा सुरु गरेको थिएँ । मेरो सर्वप्रथम लिखितम् आफ्नो लैङ्गिक पहिचान बारे खुलेर आएको सुरुवाती समयमा आफू पारलैङ्गिक व्यक्ति हुँदाको अनुभवलाई बटुलेर व्यक्तिगत अनुभवको लेख लेखेको थिएँ । मैले विशेष सरी पारलैङ्गिक व्यक्तिहरू एवं यौभिकयौता (यौन अभिमुखिकरण, लैङ्गिक पहिचान तथा यौन विशेषता) का मुद्दाहरू साथै भाषा, जातीयता एवं नेवाः जनसमुदाय / सम्पदा बारे लेख्न र बोल्न थालेँ ।
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              ने.सं. ११४० (सन् २०२०) को समयमा आउँदा मेरो काम मुख्यतः भाषा, यौभिकयौता तथा कानून सहित नेपाल भाषा एवं नेवाः मुद्दाहरूमा केन्द्रित भएको छ । म विशेष गरी अनुसन्धान, जनचेतनामूलक सामाग्री प्रकाशन, प्राज्ञिक लेखन लगायतका ज्ञान उत्पादनमा काम गर्छु । यसका साथै म विशेष गरी अदालतमा रिट निवेदन दायर गरी कानूनी अभियान मार्फत् नीतिगत परिवर्तनमा काम गर्छु ।
            </p>
          </div>

          {/* Demographics */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">जनसांख्यिकी</h2>
            <p className="text-gray-700 mt-2 text-justify">
              म एक पारलैङ्गिक महिला हुँ । अङ्ग्रेजी भाषामा म she/her सर्वनामको प्रयोग गर्दछु । त्यसै गरी म अङ्ग्रेजी भाषामा वैवाहिक स्थिति तटस्थ शीर्षक Ms. प्रयोग गर्दछु भने खस / पर्वते भाषामा सुश्री/श्रीमतीको वैवाहिक स्थिति तटस्थ विकल्प नभएकाले लैङ्गिक तटस्थ विकल्प श्री प्रयोग गर्ने गरेको छु । खस / पर्वते मातृभाषीहरूले जस्तै महिलाहरूलाई स्त्रीलिङ्गी व्याकरणात्मक सम्बोधन (जस्तै: गर्छे, गर्छिन्, गरेकी, इत्यादि) प्रयोग गर्ने चलन नेवाः समाजमा व्यापक नभएकाले मेरो पनि त्यसरी बोल्ने बानी छैन । कसैले त्यसरी सम्बोधन गरेमा अन्यथा मान्दिनँ तर आफूले प्रयोग गर्ने गरेको छैन ।            </p> 
            <p className="text-gray-700 mt-2 text-justify">
              मेरो यौन अभिमुखिकरणलाई म सर्वप्रणयात्मक (प्यानरोम्यान्टिक) तथा तरल भनेर व्याख्या गर्दछु ।
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              म चौबीस (२५) वर्षको भएँ । यसलाई हामी नेवाः समाजमा तेइस वर्ष सकेर चौबीस वर्षमा बसिरहेको भन्छौँ । जन्म मिति : नेपाल संवत् १११९ चिला १६ (वि.सं. २०५५ फागुन २० गते, सन् १९९९ मार्च ४) । हाम्रो परम्परा अनुसार नेपाल संवत्‌को चान्द्रमासिक पात्रो बमोजिम रीतिथितिको कार्य हुने भएकाले पाँचौँ महिना चिला महिनाको गाः (कृष्ण पक्ष) को तितिया (तृतीया) तिथिमा जन्मदिन मनाउने गर्दछु । विक्रम संवत् चन्द्रमानक पात्रो अनुसार यो फाल्गुन कृष्ण तृतीयाका दिन पर्दछ ।
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
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">शैक्षिक योग्यता</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> मानविकी संकायमा स्नातक – कानून संकायमा स्नातक (बिए एलएलबि) । </strong> <br/>
              चौथौं वर्षमा अध्ययनरत । <br/>
              शैक्षिक संस्था — 
              <Link href="https://chbea.com/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500"> 
                चक्रवर्ती हबि एजुकेशन एकेडेमी
              </Link> । <br/>
              विश्वविद्यालय — 
              <Link href="https://www.pusc.edu.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" > 
                पूर्वाञ्चल विश्वविद्यालय
              </Link> । <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> मानविकी संकायमा स्नातक (बिए) — भाषाविज्ञान तथा समाजशास्त्र मूल विषय । </strong> <br/>
              ने.सं ११४३ / सन् २०२३ / वि.सं. २०८० मा उत्तीर्ण । <br/>
              शैक्षिक संस्था — 
              <Link href="https://trichandracampus.edu.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" > 
                त्रि-चन्द्र बहुमुखी क्याम्पस
              </Link>।<br/>
              विश्वविद्यालय — 
              <Link href="http://www.tribhuvan-university.edu.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" > 
                त्रिभुवन विश्वविद्यालय
              </Link>। <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> +२, कक्षा १२ परिषदीय परीक्षा । </strong> <br/>
              ने.सं ११३७ / सन् २०१७ / वि.सं. २०७४ मा उत्तीर्ण । <br/>
              शैक्षिक संस्था — 
              <Link 
                href="https://www.google.com/maps/place/Aims+Academy/@27.668229,85.3223819,15z/data=!4m5!3m4!1s0x0:0x6bf9108eeb04e274!8m2!3d27.668229!4d85.3223819?shorturl=1" 
                className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500" 
              >
                 एम्स एकाडेमि
              </Link> । <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> प्रवेशिका परीक्षा (एसएलसी), कक्षा १० परिषदीय परीक्षा । </strong> <br/>
              ने.सं ११३४ / सन् २०१४ / वि.सं. २०७१ मा उत्तीर्ण । <br/>
            </p>     
          </div>

          {/* Fellowships */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">अध्येतावृत्ति</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>पारलैङ्गिक पैरवी प्रवर्धन अध्येतावृत्ति ।</strong> <br/>
              आयोजक : एशिया प्रशान्त पारलैङ्गिक सञ्जाल । (<Link href="https://www.google.com/maps/place/Aims+Academy/@27.668229,85.3223819,15z/data=!4m5!3m4!1s0x0:0x6bf9108eeb04e274!8m2!3d27.668229!4d85.3223819?shorturl=1" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              ने.सं. ११४० (सन् २०२० सेप्टेम्बर देखि अक्टोबर) । <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>जोखिममा रहेका मानव अधिकार रक्षकहरूका लागि सुरक्षात्मक अध्येतावृत्ति योजना ।</strong> <br/>
              आयोजक : योर्क विश्वविद्यालय, योर्क, बेलायत । (<Link href="https://www.york.ac.uk/cahr/human-rights-defenders/protective-fellowship/past/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              ने.सं. ११३९ – ११४० (सन् २०१९ सेप्टेम्बर देखि डिसेम्बर) । <br/>
            </p> 
          </div>

          {/* Institutes */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">शैक्षणिक कार्यक्रम</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>क्वयेर भाषा (ल्याभेन्डर ल्याग्वेजेस्) शैक्षणिक कार्यक्रम ।</strong> <br/>
              आयोजक : फ्लोरिडा एटलान्टिक विश्वविद्यालय, डेन्भर, फ्लोरिडा, संयुक्त राज्य अमेरिका । (<Link href="https://www.fau.edu/artsandletters/lavender-languages/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              ने.सं. ११४३ (सन् २०२३ जून) । <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> समावेशी वैश्विक नेतृत्व पहलको ग्रीष्म शैक्षणिक कार्यक्रम (इग्ली) । </strong> <br/>
              आयोजक : जोसेफ कोर्बेल अन्तर्राष्ट्रिय अध्ययनको विद्यालय, डेन्भर विश्वविद्यालय, डेन्भर, कोलोराडो, संयुक्त राज्य अमेरिका । (<Link href="https://korbel.du.edu/sie/engagement-initiatives/inclusive-global-leadership-initiative/summer-institute" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              ने.सं. ११४२ (सन् २०२२ अगष्ट) । <br/>
            </p>    
          </div>

          {/* MOOCs */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">अनलाइन पठन</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> भाषा पुनरुत्थान : खतरामा परेका भाषाहरूको भविष्यलाई सुरक्षित गर्ने (Lang101x) । </strong> <br/>
              साल : ने.सं. ११४२ (सन् २०२२) । <br/>
              पठन प्रदायक : एडिलेड विश्वविद्यालय । <br/>
              मञ्च : एडएक्स (<Link href="https://www.edx.org/course/language-revival-securing-the-future-of-endangered" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> आदिवासी शिक्षा मार्फत् मेलमिलाप (IndEdu200x) । </strong> <br/>
              साल : ने.सं. ११३९ (सन् २०१८) । <br/>
              पठन प्रदायक : ब्रिटिस कोलोम्बिया विश्वविद्यालय । <br/>
              मञ्च : एडएक्स (<Link href="https://www.edx.org/course/reconciliation-through-indigenous-education" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
            </p>  
          </div>

          {/* Language Proficiency */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">भाषिक दक्षता</h2>
            <ul className="text-gray-700 mt-2 mb-4 text-justify list-disc ml-8">
              <li>नेपाल भाषा — मातृभाषा, सर्वाङ्गीन दक्षता । </li>
              <li>खस / पर्वते (नेपाली भाषा) — सर्वाङ्गीन दक्षता ।</li>
              <li>अङ्ग्रेजी भाषा — सर्वाङ्गीन दक्षता ।</li>
              <li>हिन्दी भाषा — उन्नत तहको दक्षता ।</li>
              <li>उर्दू भाषा – मध्यम तहको दक्षता ।</li>
              <li>तामाङ भाषा — प्रारम्भिक तहको दक्षता ।</li>
              <li>तिब्बती भाषा — मध्यम तहको दक्षता ।</li>
              <li>नेपाली सांकेतिक भाषा — सुरुवाती चरण ।</li>
              <li>बङ्गाली भाषा — सुरुवाती चरण ।</li>
              <li>प्राकृत — प्रारम्भिक तहको दक्षता । </li>
              <li>याक्थुङ (लिम्बु) — सुरुवाती चरण ।</li>
              <li>चिनियाँ भाषा — सुरुवाती चरण ।</li>
            </ul> 
          </div>

          {/* Working Experiences */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">कार्यकारिणी अनुभव</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Queer Youth Group</strong> (<Link href="https://queeryouthgroup.org.np" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : प्रमुख कार्यकारी अधिकृत । <br/>
              अवधि : सन् २०२२ जुलाई — हालसम्म ।<br/>
              <br/>
              पद : कार्यकारी निर्देशक ।<br/>
              अवधि : सन् २०२० जुलाई — सन् २०२२ जुलाई ।<br/>
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>संयुक्त राष्ट्र शैक्षिक, वैज्ञानिक तथा सांस्कृतिक सङ्गठन (युनेस्को) को क्रुङ थेप (ब्याङ्कक) कार्यालय</strong> <br/>
              परियोजना : स.द्वि.पा.अ.क.+ समावेशी शैक्षिक संयन्त्रका लागि बहु-देशीय गतिविधि । <br/>
              पद : परियोजना सन्दर्भ समूह (साविकमा क्षेत्रिय प्रायोगिक सन्दर्भ समूह) को सदस्य । <br/>
              अवधि : सन् २०२२ — सन् २०२७ । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>बडी एण्ड डाटा </strong> (<Link href="https://bodyanddata.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : कार्यक्रम अधिकृत । <br/>
              अवधि : सन् २०२० फेब्रुअरी — सन् २०२० जुलाई । <br/>
              <br/>
              पद : सम्भार संयोजक ।   <br/>
              अवधि : सन् २०२० नोभेम्बर । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>सहायम् नेपाल</strong> <br/>
              पद : कार्यक्रम अधिकृत । <br/>
              अवधि : सन् २०१९ ज्यानुवरी — सन् २०१९ सेप्टेम्बर । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>राइट हियर राइट नाउ</strong> (<Link href="https://www.rutgers.international/programmes/right-here-right-now" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : सुरक्षा च्याम्पियन । <br/>
              अवधि : सन् २०१८ — सन् २०१९ । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>नील हिरा समाज (ब्लु डायमण्ड सोसाइटी)</strong> (<Link href="https://bds.org.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : सञ्चार व्यक्ति — रेडियो जोकी, समाचार संवादाता तथा लेखक, समाचार अनुवादक । <br/>
              अवधि : सन् २०१७ ज्यानुवरी — सन् २०१८ जुलाई । <br/>
              <br/>
              पद : समुदाय क्षेत्र पर्यवेक्षक । <br/>
              अवधि : सन् २०१८ अगष्ट — सन् २०१९ फेब्रुअरी । <br/>
              एशिया प्रशान्त पारलैङ्गिक सञ्जालको नेपालमा पारलैङ्गिक व्यक्तिहरूको स्वास्थ्य सेवामा पहुँच सम्बन्धी प्रमुख जनसंख्या अनुसन्धान तथा पैरवी (केपिआरए) परियोजना अन्तर्गत ।
            </p>
          </div>

          {/* Freelancing */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">स्वतन्त्र तथा अल्पकालीन कार्यकारिणी अनुभव</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              सामान्यतः मैले गरेको कार्यको संक्षेप दिनुपर्दा :-
            </p>   
            <ol className="list-decimal pl-6 text-gray-700 mt-2 mb-4 text-justify ml-8">
              <li>विभिन्न राष्ट्रिय तथा स्थानीय कार्यशाला गोष्ठीहरूमा टिपोटकर्ताको अनुभव ।</li>
              <li>लेखन, सम्पादन तथा अनुवाद सम्बन्धी विभिन्न अल्पकालीन कार्यानुभव ।</li>
            </ol>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              केही हाइलाइट :-
            </p>
            <ol className="text-gray-700 mt-2 mb-4 text-justify list-decimal ml-8 pl-6">
              <li>संयुक्त राष्ट्र संघ नेपालका लागि <em>सद्विपाअक+ महिला सम्बन्धी संयुक्त राष्ट्र संघको तथ्यपत्र (UN Fact Sheet on LGBTIQ+ Women)</em> को अनुवादको सम्पादन, सन् २०२२ । [अङ्ग्रेजीबाट खस]</li>
              <li>बडी एण्ड डाटाका लागि<em>स्वतन्त्र अभिव्यक्ति : एसियामा अनलाइन अभिव्यक्तिलाई अपराधिकरण गर्ने कानूनको अध्ययन (Unshackling Expression: A study on criminalisation of freedom of expression online in Nepal)</em> प्रतिवेदनको अनुवाद, सन् २०२२ । [अङ्ग्रेजीबाट खस]</li>
              <li>काउन्टर कल्चर नेपालका लागि क्वयेर मुद्दाहरूमा सामाजिक सञ्जालमा राख्नका लागि सामाग्री क्यूरेशन, सन् २०२१ ।</li>
              <li>ओपेन लर्निङ एक्सचेन्ज नेपाल (ओएलइ नेपाल) का लागि मीजान नामक कथाको अनुवाद, सन् २०२० नोभेम्बर । [अङ्ग्रेजीबाट खस]</li>
              <li>युनिटेर्रा, सेन्टर फर इन्टरनेशनल स्टडिज एण्ड कोअपरेशन (सेसी) सँगको सम्झौतामा नील हिरा समाजको संस्थागत वेबसाइट अनुवाद । [खसबाट अङ्ग्रेजी ]</li>
              <li><Link href="https://www.may17.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">www.may17.org</Link>का लागि क्वयेरद्वेषिता विरुद्धको अन्तर्राष्ट्रिय दिवस (मे १७) को अवशरमा एशिया प्रशान्त क्षेत्रका कार्यक्रमहरूको अनलाइन निगरानी गरेको, सन् २०१९ ।</li>
              <li>मुश्लिम समाजहरूमा यौन तथा शरीरको अधिकारका लागि गठबन्धन (सिएसबिआर) द्वारा आयोजित दक्षिण एसिया तथा दक्षिण पूर्वी एसिया क्वयेर मुश्लिम भेलामा टिपोटकर्ता, सन् २०१९, येँ (काठमाडौँ) ।</li>
            </ol>
          </div>

          {/* Affilitations */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">आबद्धता</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>राष्ट्रिय युवा परिषद् अन्तर्गत लैङ्गिक तथा यौनिक अल्पसङ्ख्यक युवा सञ्जाल</strong> (<Link href="http://nyc.gov.np/en/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : उपाध्यक्ष । <br/>
              अवधि : सन् २०२२ जून — हालसम्म । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>नेपाल गौरव यात्रा</strong> (<Link href="http://www.nepalprideparade.com/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : अयोजक समिति । <br/>
              अवधि : सन् २०१९ — हालसम्म । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>एम्नेस्टी इन्टरनेसनल नेपाल</strong> <br/>
              पद : व्यक्तिगत सदस्य । <br/>
              अवधि : सन् २०१९ सेप्टेम्बर — हालसम्म । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>युथ लीड</strong> (<Link href="https://www.youthleadap.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : नेपालबाट फोकल व्यक्ति । <br/>
              अवधि : सन् २०१७ मे — हालसम्म । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>युथ भोइसेस काउन्ट </strong> (<Link href="https://yvc-asiapacific.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : मूल कार्यकारिणी समूह सदस्य, पारलैङ्गिक प्रतिनिधि ।<br/>
              अवधि : सन् २०१९ ज्यानुवरी — हालसम्म ।<br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>दक्षिण एसिया केन्द्र, इनोभेशन फर चेन्ज</strong> (<Link href="http://innovationforchange.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : कार्यसमिति सदस्य । <br/>
              अवधि : सन् २०२० मे — सन् २०२३ मे । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>तान नेपाल (लूम)</strong> (<Link href="https://taannepal.org.np/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : मुख्य सचिव । <br/>
              अवधि : सन् २०२२ जून — सन् २०२३ एप्रिल । <br/>
              <br/>
              पद : सचिव । <br/>
              अवधि : सन् २०२१ ज्यानुवरी — सन् २०२२ जून । <br/>
              <br/>
              पद : कार्यसमिति सदस्य । <br/>
              अवधि : सन् २०१८ जुलाई — सन् २०२० डिसेम्बर । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>महिला प्रदान (विमेन डेलिभर) सम्मेलन २०१९</strong> (<Link href="https://womendeliver.org/conference/wd2019/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : युवा संलग्नता कार्यकारिणी समूहको हिस्सा । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>नेपाल आदिवासी जनजाति पत्रकार महासंघ (फोनिज)</strong> (<Link href="http://fonij.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>) <br/>
              पद : काठमाडौँ केन्द्रीय समिति सदस्य । <br/>
              अवधि : सन् २०१७ — सन् २०१९ । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>नेपाल भाषा क्लब,</strong> यल कव (ललितपुर शाखा) <br/>
              पद : सचिव । <br/>
              अवधि : सन् २०१६ एप्रिल — सन् २०१७ जुलाई । <br/>
            </p>
          </div>

          {/* Awards and Recognitions */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">पुरस्कार तथा सम्मान</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>टाईम १०० नेक्स्ट (ने.सं. ११४४ / सन् २०२४)</strong> <br/>
              TIME (<Link href="https://womendeliver.org/conference/wd2019/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>प्रेरणाको श्रोत (ने.सं. ११४४ / सन् २०२४)</strong> <br/>
              शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय (<Link href="https://cgs.moest.gov.np/home/storysingle/22" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>१०० प्रेरणादायी तथा प्रभावशाली महिला (ने.सं ११४३ / सन् २०२३)</strong>  <br/>
              बिबिसी (<Link href="https://www.bbc.co.uk/news/resources/idt-02d9060e-15dc-426c-bfe0-86a6437e5234" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>राष्ट्रिय स्वयंसेवक पुरस्कार (ने.सं ११४१ / सन् २०२०)</strong>  <br/>
              युवा तथा खेलकुद मन्त्रालय, नेपाल सरकार  (<Link href="https://www.facebook.com/UNYSAN/posts/18426399424406460" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>युवा परिवर्तनकर्ता पुरस्कार (ने.सं ११३८ / सन् २०१८)</strong>  <br/>
              संयुक्त राष्ट्र युवा तथा विद्यार्थी संघ नेपाल  (<Link href="https://www.facebook.com/UNYSAN/posts/18426399424406460" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>  
          </div>

          {/* Advocacy Experiences */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">पैरवी / वकालत अनुभव</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>पारलैङ्गिक पैरवी साता २०१८</strong> <br/>
              <Link href="https://ilga.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">अन्तर्राष्ट्रिय समयौनिक, द्वियौनिक, पारलैङ्गिक तथा अन्तरलिङ्गी संघ (इल्गा)</Link> द्वारा १९ वटा देशहरूबाट २३ जना पारलैङ्गिक तथा विविध लैङ्गिक पहिचान भएका मानव अधिकार रक्षकहरूको भेला गराई जिनिभा, स्विटजरल्याण्डमा ३८औँ मानव अधिकार परिषद् सम्मेलनमा पैरवीका लागि सहभागी गराइएको थियो । <br/>
              [<Link href="https://ilga.org/UN-Trans-Advocacy-Week-2018" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क १</Link>, <Link href="https://weareaptn.org/2018/06/29/trans-activists-advocate-for-their-rights-at-the-united-nations/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क २</Link>]
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>न्हू पुखू (रानी पोखरी) सम्पदा पुनःनिर्माण अभियान</strong> <br/>
              येँ (काठमाडौँ) मा न्हू पुखू सम्पदा पुनःनिर्माण सम्बन्धीको अभियानमा संलग्न (ने.सं. ११३७)
              समाचार : [<Link href="https://www.setopati.com/social/119121" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क १</Link>, <Link href="https://www.setopati.com/social/217421" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क २</Link>]
            </p>   
          </div>

          {/* Initiatives & Co-initiatives */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">पहल</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> क्वयेर युथ ग्रुप </strong> <br/>
              सन् २०१८ मा सह-सुरुवात गरेको । <br/>
              फुक्का सञ्जालका रूपमा सुरु भएर सन् २०२० मा गैर-मुनाफा संस्थानका रूपमा दर्ता भएको, नेपालमा क्वयेर अधिकारका लागि काम गर्दछ । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> पारलैङ्गिक अधिकार समूह (ट्रान्स राइट्स कलेक्टिभ) </strong> <br/>
              सन् २०२० सेप्टेम्बरमा सह-स्थापित । <br/>
              युवा पारलैङ्गिक महिला तथा पारलैङ्गिक पुरुषहरूको फुक्का सञ्जाल / अनौपचारिक समूह । <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> त्सि-नु-तोक् </strong> <br/>
              सन् २०१८ मा सह-सुरुवात गरेको । <br/>
              क्वयेर आन्दोलनमा विचार विमर्श सृजना गर्ने एक छलफल मञ्च, पछी क्वयेर युथ ग्रुपसँग गाभिएको । <br/>
            </p>
          </div>

          {/* Speaking Appointments */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">वाक् नियुक्ति</h2>
            <p className="text-gray-700 mt-2 text-justify">
              म विभिन्न राष्ट्रिय तथा अन्तर्राष्ट्रिय सम्मेलन एवं कार्यक्रममा बोल्दै आएको छु । साथै मैले काम गर्ने विषयवस्तुमा कार्यशाला गोष्ठी तथा सत्रहरू सञ्चालन गर्दै आएको छु । निम्नानुसार केही विशेष उपलक्षहरू उल्लेखित छन् ।
            </p>   
            <ol className="text-gray-700 mt-2 mb-4 text-justify list-decimal ml-8 pl-2 space-y-2">
              <li>
                <strong>दीगो विकासका लागि एसिया प्रशान्त फोरम, युवा फोरम, सन् २०२४ ।</strong> <br/>
                मिति : ने.सं. ११४४ सिला २९ देखि चिला १ (सन् २०२४ फेब्रुअरी १५ देखि १७) । <br/>
                सहभागिता : क्रुङ थेप (ब्याङ्कक), थाइल्याण्ड । <br/>
                प्यानल २ : सतःछेँ (सत्तलघर) को पुर्ख्यौली बसोबासबाट निष्काशन तथा विस्थापन : आदिवासी नेवाः जाति अन्तर्गतका जुगि उप-जातिको आवसीय संकट ।<br/>
                <Link href="https://weareaptn.org/2018/06/29/trans-activists-advocate-for-their-rights-at-the-united-nations/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  आयोजकको वेबसाइट
                </Link>।
              </li>
              <li>
                <strong>इल्गा एसिया सम्मेलन २०२२ । </strong> <br/>
                मिति : ने.सं. ११४३ थिंला १० देखि १४ (सन् २०२२ नोभेम्बर २८ देखि डिसेम्बर २) । <br/>
                सहभागिता : हो चि मिन् शहर, भियेतनाम । <br/>
                महिला पूर्व-सम्मेलनको सुरु सत्रमा वक्ताका रूपमा रहेको तथा महिला घोषणापत्रमा योगदान पुर्याएको ।<br/>
                <Link href="https://www.ilgaasia2022.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  आयोजकको वेबसाइट
                </Link>।
              </li>
              <li>
                <strong>१४औँ रोट्राक्ट जिल्ला सम्मेलन ।</strong> <br/>
                मिति : ने.सं. ११४२ चौला २९ (सन् २०२२ अप्रिल १६) । <br/>
                सहभागिता : येँ (काठमाडौँ), नेपाल । <br/>
                प्यानल : महिला तथा क्वयेर व्यक्तिहरू माझ अन्तरसम्बद्धताको प्रसार । <br/>
                <Link href="https://rotaract3292.org/2022/04/16/14th-rotaract-district-conference/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  आयोजकको वेबसाइट 
                </Link>।
              </li>
              <li>
                <strong>विश्व नेवाः : अगामी कोशेढुङ्गा, भर्चुअल विश्व सम्मेलन ।</strong> <br/>
                मिति : ने.सं. ११४१ प्वँहेला १२ (सन् २०२० डिसेम्बर ३०) । <br/>
                सहभागिता : अनलाइन । <br/>
                प्यानल : नेपाल भाषामा सिमान्तकृत यौन अभिमुखिकरण, लैङ्गिक पहिचान र यौन विशेषताका व्यक्ति ।<br/>
                <Link href="https://youtu.be/K1Vz-k5EhQ0" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  भिडियो
                </Link> ।
              </li>
              <li>
                <strong>प्रजनन तथा यौन स्वास्थ्य एवं अधिकारमा दशौँ एशिया प्रशान्त सम्मेलन ।</strong> <br/>
                मिति : ने.सं. ११४१ प्वँहेला ३ (सन् २०२० डिसेम्बर २१) । <br/>
                सहभागिता : अनलाइन ।<br/>
                प्यानल : एशिया प्रशान्त क्षेत्रमा यौन अभिमुखिकरण तथा लैङ्गिक पहिचान एवं यौन तथा प्रजनन स्वास्थ्य र अधिकार । <br/>
                <Link href="https://apcrshr10cambodia.org/apcrshr10-virtual-14-sexual-orientation-and-gender-identity-srhr-in-asia-pacific/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  आयोजकको वेबसाइट 
                </Link>।
              </li>
              <li>
                <strong>नालसार कानुन विश्वविद्यालय — सार्वजनिक नीति समूह । </strong> <br/>
                मिति : ने.सं. ११४० यंला १९ (सन् २०२० सेप्टेम्बर ६) । <br/>
                सहभागिता : अनलाइन । <br/>
                प्यानल : क्वयेरपना तथा कानूनमा छलफल, दक्षिण एसियाका कथाहरू । <br/>
                <Link href="https://youtu.be/DvwXmFh9NSw" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  भिडियो
                </Link>
              </li>
              <li>
                <strong> महिला प्रदान (वमेन डेलिभर) सम्मेलन २०१९ । </strong> <br/>
                मिति : ने.सं. ११३९ तछला १७ देखि २० (सन् २०१९ जून ३ देखि ६) । <br/>
                सहभागिता : भ्यानकुभर, क्यानडा । <br/>
                <ol className="list-[lower-alpha] pl-8">
                  <li>युवाहरूको पूर्व-सम्मेलन भेलामा एशिया प्रशान्त क्षेत्रीय कार्यक्रम चलाएको । </li>
                  <li>बन्द सत्रमा मनतव्य दिएको । </li>
                </ol>
                <Link href="https://youtu.be/H0yHG8wusnE" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  भिडियो
                </Link>

              </li>
              <li>
                <strong>विश्व एड्स सम्मेलन २०१८ ।</strong> <br/>
                मिति : ने.सं. ११३८ गुंला ५ देखि ९ (सन् २०१८ जुलाई २३ देखि २७) ।  <br/>
                सहभागिता : आम्स्टर्डम, नेदरल्याण्ड । <br/>
                प्यानल : <br/>
                <ol className="list-[lower-alpha] pl-8">
                  <li> टेबुलमा पारलैङ्गिक युवा : भविष्य तर्फको पुल;</li>
                  <li>अभ्यासमा संघटन : स्वास्थ्य सेवा प्रदायक तथा सेवाग्राहीबाट प्रत्यक्ष अनुभव;</li>
                  <li>पारलैङ्गिक अधिकारकर्मीहरूको स्वस्थता तथा तन्यकता सम्बन्धी कार्यशाला गोष्ठी;</li>
                  <li> पारलैङ्गिक नेतृत्वकर्ताहरूबाट सुन्ने : जुन परिवर्तन हामी देख्न चाहन्छौँ ।</li>
                </ol>
                <Link href="https://programme.aids2018.org/People/PeopleDetailStandalone/9021" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                    आधिकारिक वेबसाइट 
                </Link> ।
              </li>
              <li>
                <strong>संयुक्त राष्ट्र ३८औँ मानव अधिकार परिषद् सम्मेलन, छेउ कार्यक्रम ।</strong> <br/>
                मिति : ने.सं. ११३८ दिला १ (सन् २०१८ जून १८) । <br/>
                सहभागिता : जिनिभा, स्विटजरल्याण्ड । <br/>
                प्यानल : पारलैङ्गिक दृष्टान्तद्वारा महिलावादी तथा लैङ्गिक समानता कार्यमा लैङ्गिक पहिचान तथा अभिव्यक्तिको मूलप्रवाहिकरण । <br/>
                <Link href="https://fb.watch/fxIb6p0K83/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                    फेसबुक प्रत्यक्ष प्रसारण भिडियो
                </Link> ।
                <Link href="https://gate.ngo/trans-activists-advocate-for-their-rights-at-the-united-nations/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                    आयोजकको वेबसाइट
                </Link> ।
              </li>
              <li>
                <strong>विश्वका महिला (वाउ) काठमान्डु २०१८ । </strong> <br/>
                मिति : ने.सं. ११३८ चिला १ (सन् २०१८ फेब्रुअरी १७) । <br/>
                सहभागिता : अभियान्त्रिकी शिक्षालय (आइओइ) – पुलचोक क्याम्पस, यल (ललितपुर), नेपाल । <br/>
                प्यानल : महिला तथा यौनिकता । <br/>
                <Link href="https://www.britishcouncil.org.np/wowktm-2018-panel-discussion" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">
                  आयोजकको वेबसाइट
                </Link> ।
              </li>
            </ol>
            
          </div>

          {/* Publications */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">प्रकाशन</h2>
            <p className="text-gray-700 mt-2 text-justify">
              मैले लेखेका कृतिहरू देहायका लिङ्कहरूमा सूचिकृत छ । निम्न लिखित शीर्षकहरूमा वर्गिकृत यी लिङ्क थिच्नुभएमा सम्बन्धित प्रकाशनहरूको सूची देखिन्छ ।
            </p>
            <ul className="list-disc pl-8">
              <li><Link href="https://rukshanakapali1119.wordpress.com/myacademia/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">प्राज्ञिक</Link></li>
              <li><Link href="https://rukshanakapali1119.wordpress.com/myarticles/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">फुटकर लेख</Link>.</li>
              <li><Link href="https://rukshanakapali1119.wordpress.com/mybooks/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">पुस्तक</Link>.</li>
            </ul>
            <p className="text-gray-700 mt-2 text-justify">
              <Link href="https://archive.org/details/@user_28080" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">आरकाइभ थोप्लो अर्गमा</Link> पनि मैले लेखेका कृतिहरूको संकलन छ ।
            </p>   
          </div>

          {/* Legal Portfolio */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">कानूनी वृत्तान्त </h2>
            <p className="text-gray-700 mt-2 text-justify">
              म नेपाल संवत् ११४१ साल देखि कानूनी प्रक्रिया (लिटिगेशन) को माध्यमलाई प्रयोग गरी आफूले चासो राख्ने मुद्दाहरूमा कानूनी तथा नीतिगत परिवर्तन स्थापित गर्ने प्रयासमा छु ।  मेरो कानूनी वृतान्तको छुट्टै खण्ड <Link href="https://rukshanakapali1119.wordpress.com/legalportfolio/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">यस लिङ्कमा</Link> गएर हेर्नसक्नुहुनेछ ।
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              मैले विभिन्न विषयवस्तुमा दायर गरेका रिट निवेदनहरूको विस्तृत विवरण <Link href="https://rukshanakapali1119.wordpress.com/writ-petitions/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">यस लिङ्कमा</Link> गएर हेर्नसक्नुहुनेछ ।
            </p>   
          </div>

          {/* International Conferences */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">अन्तर्राष्ट्रिय सम्मेलन</h2>
            <p className="text-gray-700 mt-2 text-justify">
              मैले सहभागिता जनाएका अन्तर्राष्ट्रिय सम्मेलनहरू मध्ये केही यस प्रकारका छन् :-
            </p>   
            <ol className="list-decimal pl-8">
              <li>2024 Global LGBTI Funding Summit. (<Link href="https://lgbtifundingsummit.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>International Youth Conference 10th Edition (IYC10). (<Link href="https://iycforyouth.org/events/international-youth-conference-10th-edition-iyc10/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>भाषिक न्याय सम्मेलन २०२२, फाउन्डेशन फर जस्ट सोसायटी । </li>
              <li>भाषिक नीति मञ्च २०२३ । (<Link href="https://www.soas.ac.uk/about/event/language-policy-forum-2023" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>क्वयेर भाषाहरू तथा भाषाविज्ञान सम्मेलन २९ । (<Link href="https://sites.google.com/boisestate.edu/lavenderlanguagesconference29/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>हाम्रो भविष्यको पुनर्कल्कपना : पारलैङ्गिक तथा विविध लैङ्गिकताका व्यक्तिहरूको भेला, दक्षिण एसिया, सन् २०२३ । (<Link href="https://weareaptn.org/2023/01/12/reimagine-our-future-trans-and-gender-diverse-peoples-convening-south-asia/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>इल्गा एसिया सम्मेलन २०२२ । (<Link href="https://www.ilgaasia2022.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>भाषिक न्याय सम्मेलन २०२३, फाउन्डेशन फर जस्ट सोसायटी । </li>
              <li>दीगो विकासका लागि एसिया प्रशान्त फोरम, युवा फोरम, सन् २०२२ । </li>
              <li>महिला प्रदान (वमेन डेलिभर) सम्मेलन, सन् २०१९  (<Link href="https://wd2019.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>विश्व एड्स सम्मेलन, सन् २०१८ (<Link href="https://www.aids2018.org/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
              <li>प्रजनन तथा यौन स्वास्थ्य एवं अधिकारमा नवौँ एशिया प्रशान्त सम्मेलन, सन् २०१७ (<Link href="https://asiapacific.unfpa.org/en/events/9th-asia-pacific-conference-reproductive-and-sexual-health-and-rights" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)</li>
            </ol>
          </div>

          {/* Features */}
          <div className="space-y-4 text-xl"> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">विशेष चित्रित</h2>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>TIME 100 Next 2024</strong> (<Link href="https://time.com/7023612/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>बिबिसी २०२३ का १०० महिला :</strong> (<Link href="https://www.bbc.co.uk/news/resources/idt-02d9060e-15dc-426c-bfe0-86a6437e5234" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>विकिपेडिया </strong> (<Link href="https://en.wikipedia.org/wiki/Rukshana_Kapali" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Championing change, The Kathmandu Post</strong> (<Link href="https://kathmandupost.com/art-culture/2023/12/09/championing-change-1702090110" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Minchyaa Meyju by Mrigaja Bajracharya, British Council Nepal</strong> (<Link href="https://fb.watch/wfCGj4zRLH/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>मेरो जीवनका नायिकाहरू :</strong> (<Link href="https://theheroines.blogspot.com/2021/08/interview-with-rukshana-kapali.html" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>संयुक्त राष्ट्र बालिका शिक्षा पहल : तपाइँले चिन्न पर्ने ६ युवा क्वयेर अभियानकर्ताहरू</strong> (<Link href="https://medium.com/ungei-blog/6-lgbtq-young-activists-you-should-know-about-d0fcccc68fdd" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>योर्क विश्वविद्यालय : </strong> (<Link href="https://www.york.ac.uk/cahr/human-rights-defenders/protective-fellowship/past/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>जहाँ माया गैर-कानूनी छ : </strong> (<Link href="https://whereloveisillegal.com/rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>संयुक्त राष्ट्र महिला </strong>: म जहाँ उभिएको छु त्यहाँबाट अन्तरसम्बद्धताप्रति कृतज्ञताको सवालमा दुबै अभियानहरूमा चुनौती पहिचान गरेँ (<Link href="https://asiapacific.unwomen.org/en/news-and-events/stories/2019/06/fwis-rukshana-kapali" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>संयुक्त राष्ट्र सूचना केन्द्र : </strong> (<Link href="https://un.info.np/Net/NeoDocs/View/9214" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>लैङ्गिक समानताका लागि मेरो संघर्ष, सी इज द स्टोरी </strong> (<Link href="http://sheisthestory.com/my-struggle-for-gender-equality-rukshana-kapali/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>एक अर्को ‘अन्य’ होइन</strong>, स्टेलार अनलाइन : (<Link href="https://studioiridium.wixsite.com/magazine/post/rukshana-kapali-not-another-other" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>नेपालको क्वयेर आन्दोलनमा यथास्थितिलाई हल्लाउँदै </strong> , शुद्धसर (<Link href="https://shuddhashar.com/shaking-up-the-status-quo-in-nepals-queer-movement-mallika-aryal/" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">लिङ्क</Link>)
            </p>
          </div>

          {/* Miscellaneous */}
          <div> 
            <h2 className="my-8 text-2xl font-bold text-red-700 md:text-start text-center">Miscellaneous</h2>
            <ol className="list-decimal pl-8">
              <li>
                ने.सं. ११४०/४१ ताका मैले <strong><em>रुकु यु भाइन्स </em></strong> नामको नेपाल भाषामा हाँस्य भिडियो बनाएको थिएँ । <br/>
                <Link href="https://www.youtube.com/watch?v=WG8q92c3iak&feature=youtu.be" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">भिडियोहरू संकलित गरिएको लिङ्क </Link>।
              </li>
              <li>
                मैले राष्ट्रिय युवा परिषद्‌द्वारा सञ्चालित <strong><em>संघीय युवा संसदको स्थापना र अभ्यास कार्यक्रम – २०७५ </em></strong>मा सहभागिता जनाएको थिएँ ।
              </li>
              <li>
                ने.सं. ११३८ (सन् २०१८) मा म <strong><em>स्वःयात्रा – महिलाहरूको एकल यात्रा चुनौती</em></strong> मा सहभागी भई लो (मुस्ताङ) को यात्रा गरेको थिएँ । <br/>
                <Link href="https://nepaltraveller.com/sidetrack/246" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">समाचारको लिङ्क</Link>। <br/>
                <Link href="https://youtu.be/-TdPcsKbC80" className="font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500">भिडियोको लिङ्क</Link> ।
              </li>
            </ol>
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
