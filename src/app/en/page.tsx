import { alegreyaSans, alegreyaSC, roboto } from "@/ui/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nepalSambat, nepalSambatLatin } from "@/lib/fetchYear";
import Link from "next/link";

// Metadata
export const metadata = {
    title: 'My Introduction - Rukshana Kapali'
};

// Main component
export default function Home() {
  const year = 'N.S. ' + nepalSambatLatin(nepalSambat());

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Rukshana Kapali"/>

      {/* Horizontal divider section */}
      <hr className="mx-auto w-1/2 border-t border-gray-300 mt-8" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className={`${roboto.className} flex-1 md:mr-4 mx-4`}>
          {/* About Me */}
          <div>
            <h2 className={`${alegreyaSans.className} mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>About Me</h2>
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

          {/* Demographics */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Demographics</h2>
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

          {/* Academic Qualification */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Academic Qualification</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Bachelor of Arts – Bachelor of Legislative Law (BA LLB). </strong> <br/>
              Fourth Year Running. <br/>
              Studying in the institution of <Link href="https://chbea.com/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Chakrabarti Habi Education Academy College of Law.</Link> <br/>
              Affiliated to <Link href="https://www.pusc.edu.np/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Purbanchal University.</Link> <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Bachelor in Arts (BA) with Majors in Linguistics and Sociology. </strong> <br/>
              Graduated in the year N.S. 1143 / 2023 C.E. / 2080 B.S. <br/>
              Studied in the institution of <Link href="https://trichandracampus.edu.np/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Tri-Chandra Multiple Campus.</Link> <br/>
              Affiliated to <Link href="http://www.tribhuvan-university.edu.np/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Tribhuvan University.</Link> <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> +2, Grade 12 board. </strong> <br/>
              Passed in the year N.S. 1137 / 2017 C.E. / 2074 B.S. <br/>
              Studied in the institution of <Link href="https://www.google.com/maps/place/Aims+Academy/@27.668229,85.3223819,15z/data=!4m5!3m4!1s0x0:0x6bf9108eeb04e274!8m2!3d27.668229!4d85.3223819?shorturl=1" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >AIMS Academy.</Link> <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> School Leaving Certificate (SLC), Grade 10 board. </strong> <br/>
              Passed in the year N.S. 1134 / 2014 C.E. / 2071 B.S. <br/>
            </p>     
          </div>

          {/* Fellowships */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Fellowships</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Amplifying Trans Advocacy Fellowship. </strong> <br/>
              Organized by: Asia Pacific Transgender Network. (<Link href="https://www.google.com/maps/place/Aims+Academy/@27.668229,85.3223819,15z/data=!4m5!3m4!1s0x0:0x6bf9108eeb04e274!8m2!3d27.668229!4d85.3223819?shorturl=1" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              In the year N.S. 1140 (Sept 2020 to Oct 2020). <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Protective Fellowship Scheme for Human Rights Defenders at Risk. </strong> <br/>
              Organized by: University of York, York, England. (<Link href="https://www.york.ac.uk/cahr/human-rights-defenders/protective-fellowship/past/rukshana-kapali/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              In the year N.S. 1139 – 1140 (Sept to Dec 2019). <br/>
            </p> 
          </div>

          {/* Institutes */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Institutes</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Lavender Languages Institute (LLI) 2023. </strong> <br/>
              Organized by: Florida Atlantic University, Florida, United States of America. (<Link href="https://www.fau.edu/artsandletters/lavender-languages/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              In the year N.S. 1143 (June 2023). <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Inclusive Global Leadership Initiative’s Summer Institute (IGLI) 2022. </strong> <br/>
              Organized by: Josef Korbel School of International Studies, University of Denver, Denver, Colorado, United States of America. (<Link href="https://korbel.du.edu/sie/engagement-initiatives/inclusive-global-leadership-initiative/summer-institute" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              In the year N.S. 1142 (August 2022). <br/>
            </p>    
          </div>

          {/* MOOCs */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>MOOCs</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Language Revival: Securing the Future of Endangered Languages (Lang101x). </strong> <br/>
              Year: N.S. 1142 (2022). <br/>
              Course by: The University of Adelaide. <br/>
              Platform: Edx (<Link href="https://www.edx.org/course/language-revival-securing-the-future-of-endangered" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Reconciliation Through Indigenous Education (IndEdu200x). </strong> <br/>
              Year: N.S. 1139 (2018). <br/>
              Course by: The University of British Columbia. <br/>
              Platform: Edx (<Link href="https://www.edx.org/course/reconciliation-through-indigenous-education" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
            </p>  
          </div>

          {/* Language Proficiency */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Language Proficiency</h2>
            <ul className="text-gray-700 mt-2 mb-4 text-justify list-disc ml-8">
              <li> Nepala Bhasa — Native Language, Fluent. </li>
              <li> Eastern Khas Bhasha (Nepali) — Fluent. </li>
              <li> English — Fluent </li>
              <li> Hindi — Advanced. </li>
              <li> Urdu — Intermediate </li>
              <li> Tamang — Intermediate. </li>
              <li> Nepali Sign Language — Beginner. </li>
              <li> Bengali — Beginner. </li>
              <li> Prakrit — Beginner. </li>
              <li> Yakthung (Limbu) — Beginner. </li>
              <li> Chinese — Beginner. </li>
            </ul> 
          </div>

          {/* Working Experiences */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Working Experiences</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Queer Youth Group</strong> (<Link href="https://queeryouthgroup.org.np" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Chief Executive Officer. <br/>
              Duration: 2022 July — Present. <br/>
              <br/>
              Position: Executive Director. <br/>
              Duration: 2020 July — 2022 July. <br/>
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>United Nations Educational, Scientific and Cultural Organization (UNESCO) <br/> in Krung Thep (Bangkok)</strong> <br/>
              Project: Multi-country Activity on LGBTIQ+ Inclusive Education Settings. <br/>
              Position: Project Reference Group (previously called Regional Pilot Reference Group) member. <br/>
              Duration: 2022 — 2027. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Body and Data</strong> (<Link href="https://bodyanddata.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Program Officer. <br/>
              Duration: 2020 Feb — 2020 July. <br/>
              <br/>
              Position: Logistics Co-Ordinator. <br/>
              Duration: 2020 November. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Sahaayam Nepal</strong> <br/>
              Position: Program Officer. <br/>
              Duration: 2019 Jan — 2019 Sept. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Right Here Right Now Nepal</strong> (<Link href="https://www.rutgers.international/programmes/right-here-right-now" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Safety and Security Champion.. <br/>
              Duration: 2018 — 2019. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Blue Diamond Society</strong> (<Link href="https://bds.org.np/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Media Person — Radio Jockey, News Reporter & Writer, News Translator. <br/>
              Duration: 2017 Jan — 2018 July. <br/>
              <br/>
              Position: Community Field Supervisor. <br/>
              Duration: 2018 Aug — 2019 Feb. <br/>
              Under the project of Asia Pacific Transgender Network’s Key Population Research and Advocacy (KPRA) on transgender people’s health access in Nepal.
            </p>
          </div>

          {/* Freelancing */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Freelancing Work and Short Term contracts</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              In general:-
            </p>   
            <ol className="list-decimal pl-6 text-gray-700 mt-2 mb-4 text-justify ml-8">
              <li>Rapporteur experiences at several national and local workshops.</li>
              <li>Several short-term contracts for writing, proof-reading, editing and translation.</li>
            </ol>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              Selected highlights:-
            </p>
            <ol className="text-gray-700 mt-2 mb-4 text-justify list-decimal ml-8 pl-6">
              <li>Proof-reading of the transition of <em>UN Fact Sheet on LGBTIQ+ Women</em>, for United Nations Nepal, 2022. [English to Khas]</li>
              <li>Translation of <em>Unshackling Expression: A study on criminalisation of freedom of expression online in Nepal</em> for Body & Data, 2022. [English to Khas]</li>
              <li>Content curation of social media posts on LGBTIQ+ issues for Counter Culture Nepal, 2021.</li>
              <li>Translation of a story Meezan for Open Learning Exchange Nepal (OLE Nepal), Nov 2020. [English to Khas]</li>
              <li>Translation of organizational website for Blue Diamond Society in agreement with Uniterra, Centre for International Studies and Cooperation (CECI), 2020. [Khas to English]</li>
              <li>Online monitoring of IDAHOT events around Asia Pacific, for the <Link href="https://www.may17.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >www.may17.org</Link> website, 2019.</li>
              <li>Rapporteur at South Asia and South East Asia Queer Muslim Gathering by Coalition for Sexual and Bodily Rights in Muslim Societies, 2019, Yen (Kathmandu).</li>
            </ol>
          </div>

          {/* Affilitations */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Affilitations</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Nepal APFSD Youth Alliance (NAYA)</strong> (<Link href="https://x.com/NepalAPFSD" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Member. <br/>
              Duration: 2024 — Present. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Gender and Sexual Minorities Youth Network of National Youth Council</strong> (<Link href="http://nyc.gov.np/en/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Vice President. <br/>
              Duration: 2022 June — Present. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Nepal Pride Parade</strong> (<Link href="http://www.nepalprideparade.com/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Organizing Committee. <br/>
              Duration: 2019 — Present. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Amnesty International Nepal</strong> <br/>
              Position: Individual Member. <br/>
              Duration: 2019 Sept — Present. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Youth LEAD</strong> (<Link href="https://www.youthleadap.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Core Working Group Member, Trans Representative. <br/>
              Duration: 2019 Jan — Present. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>South Asia Hub, Innovation For Change</strong> (<Link href="http://innovationforchange.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Board Member. <br/>
              Duration: 2020 May — 2023 May. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>LOOM Nepal</strong> (<Link href="https://taannepal.org.np/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Chief Secretary. <br/>
              Duration: 2022 June — 2023 April. <br/>
              <br/>
              Position: Secretary. <br/>
              Duration: 2021 Jan — 2022 June. <br/>
              <br/>
              Position: Board Member. <br/>
              Duration: 2018 July — 2020 Dec. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Women Deliver Conference 2019</strong> (<Link href="https://womendeliver.org/conference/wd2019/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Position: Part of Youth Engagement Working Group. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Federation of Nepalese Indigenous Journalists</strong> (<Link href="http://fonij.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} > Link </Link>) <br/>
              Position: Kathmandu Central Committee Member. <br/>
              Duration: 2017 — 2019. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Nepala Bhasa Club,</strong> Yala Kawa (Lalitpur Branch) <br/>
              Position: Secretary. <br/>
              Duration: 2016 April — 2017 July. <br/>
            </p>
          </div>

          {/* Awards and Recognitions */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Awards and Recognitions</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>TIME 100 Next (N.S. 1144 / 2024 C.E.)</strong> <br/>
              TIME (<Link href="https://womendeliver.org/conference/wd2019/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p> 
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Source of Inspiration (N.S. 1144 / 2024 C.E.)</strong> <br/>
              Ministry of Education, Science and Technology (<Link href="https://cgs.moest.gov.np/home/storysingle/22" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>100 inspiring and influential women (N.S. 1143 / 2023 C.E.)</strong>  <br/>
              British Broadcasting Corporation (BBC) (<Link href="https://www.bbc.co.uk/news/resources/idt-02d9060e-15dc-426c-bfe0-86a6437e5234" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>National Volunteering Award (N.S. 1141 / 2020 C.E.)</strong>  <br/>
              Ministry of Youth and Sports, Government of Nepal (<Link href="https://www.facebook.com/UNYSAN/posts/18426399424406460" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Youth Change Maker Award (N.S. 1138 / 2018 C.E.)</strong>  <br/>
              United Nations Youth & Student Association Nepal (<Link href="https://www.facebook.com/UNYSAN/posts/18426399424406460" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>  
          </div>

          {/* Advocacy Experiences */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Advocacy Experiences</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Trans Advocacy Week 2018</strong> <br/>
              Organized by <Link href="https://ilga.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >International LGBTI Association</Link> (ILGA) gathered together 23 trans and gender diverse human rights defenders from 19 countries for the 38th Session of the Human Rights Council in Geneva. <br/>
              [<Link href="https://ilga.org/UN-Trans-Advocacy-Week-2018" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link 1</Link>, <Link href="https://weareaptn.org/2018/06/29/trans-activists-advocate-for-their-rights-at-the-united-nations/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link 2</Link>]
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong>Nhoo Pukhoo (Rani Pokhari) heritage reconstruction activism</strong> <br/>
              Involved in activism around re-construction of Nhoo Pukhoo heritage in Yen (Kathmandu) (N.S. 1137) <br/>
              News Coverage: [<Link href="https://www.setopati.com/social/119121" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link 1</Link>, <Link href="https://www.setopati.com/social/217421" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link 2</Link>]
            </p>   
          </div>

          {/* Initiatives & Co-initiatives */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Initiatives & Co-initiatives</h2>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> <em>Thа̄e Bа̄e Yа̄ Lwа̄pu</em> (The Fight for Residence) </strong> <br/>
              Initiated in N.S. 1143 (2022).
            </p>   
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Queer Youth Group </strong> <br/>
              Co-initiated in Dec 2018. <br/>
              Started as a loose network, registered as not for profit in 2020, QYG is a group led by young queer folks advocating for queer rights in Nepal. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Trans Rights Collective </strong> <br/>
              Co-initiated in Sept 2020. <br/>
              A loose network / informal group of young trans men & women. <br/>
            </p>
            <p className="text-gray-700 mt-2 mb-4 text-justify">
              <strong> Tsi-Nu-Tok </strong> <br/>
              Initiated in 2018. <br/>
              A discussion platform to create discourse in the LGBTIQ+ movement, later merged with Queer Youth Group. <br/>
            </p>
          </div>

          {/* Speaking Appointments */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Speaking Appointments</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I have been speaking around national and international conferences and events, running workshop and sessions around the issue I work with. Here is a list of some highlighted speaking appointments.
            </p>   
            <ol className="text-gray-700 mt-2 mb-4 text-justify list-decimal ml-8 pl-2 space-y-2">
              <li>
                <strong>Asia-Pacific Forum on Sustainable Development (APFSD), Youth Forum 2024.</strong> <br/>
                Date: N.S. 1144 Sila 29 to Chila 1 (15 to 17 Feb 2024). <br/>
                Attendance: Krung Thep (Bangkok), Thailand. <br/>
                Panel 2 : Forced eviction and displacement from the ancestral residence of Satachhen : Housing Crisis in Jugi Community of the Newa indigenous nationality. <br/>
                <Link href="https://weareaptn.org/2018/06/29/trans-activists-advocate-for-their-rights-at-the-united-nations/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link to organizer&apos;s website.
                </Link>
              </li>
              <li>
                <strong>ILGA Asia Conference 2022.</strong> <br/>
                Date: N.S. 1143 Thinla 10 to 14 (28 Nov to 2 Dec 2022). <br/>
                Attendance: Ho Chi Minh, Vietnam. <br/>
                Speaker at the opening panel in Women’s Pre-Conference and contributor in the Women’s Manifesto. <br/>
                <Link href="https://www.ilgaasia2022.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link to organizer&apos;s website.
                </Link>
              </li>
              <li>
                <strong>14th Rotaract District Conference.</strong> <br/>
                Date: N.S. 1142 Chaula 29 (16 April 2022). <br/>
                Attendance: Kathmandu, Nepal. <br/>
                Panel: Disseminating intersectionality among women and queer people. <br/>
                <Link href="https://rotaract3292.org/2022/04/16/14th-rotaract-district-conference/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link to organizer&apos;s website.
                </Link>
              </li>
              <li>
                <strong>Global Newah: The Next Milestone, Virtual World Conference.</strong> <br/>
                Date: N.S. 1141 Pwanhela 12 (30 Dec 2020) <br/>
                Attendance: Online. <br/>
                Panel: People of marginalized sexual orientation, gender identity & sex characteristics in Nepal Bhasa. <br/>
                <Link href="https://youtu.be/K1Vz-k5EhQ0" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link to YouTube video.
                </Link>
              </li>
              <li>
                <strong>10th Asia Pacific Conference on Reproductive and Sexual Health and Rights.</strong> <br/>
                Date: N.S. 1141 Ponhela 3 (21 December 2020). <br/>
                Attendance: Online <br/>
                Panel: Sexual orientation and gender identity & SRHR in Asia Pacific. <br/>
                <Link href="https://apcrshr10cambodia.org/apcrshr10-virtual-14-sexual-orientation-and-gender-identity-srhr-in-asia-pacific/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link of the session.
                </Link>
              </li>
              <li>
                <strong>NALSAR University of Law — Public Policy Group.</strong> <br/>
                Date: N.S. 1140 Yanla 19 (6 Sept 2020). <br/>
                Attendance: Online. <br/>
                Panel: Discussing Queerness and Law, Stories from South Asia. <br/>
                <Link href="https://youtu.be/DvwXmFh9NSw" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link to the video recording.
                </Link>
              </li>
              <li>
                <strong>Women Deliver Conference 2019.</strong> <br/>
                Date: N.S. 1139 Tachhala 17 to 20 (3 to 6 June 2019). <br/>
                Attendance: Vancouver, Canada. <br/>
                <ol className="list-[lower-alpha] pl-8">
                  <li>Led an Asia Pacific regional breakout of the Youth Pre-conference.</li>
                  <li>Gave remarks at the closing plenary.</li>
                </ol>
                <Link href="https://youtu.be/H0yHG8wusnE" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                  Link of closing plenary.
                </Link>

              </li>
              <li>
                <strong>World AIDS Conference 2018.</strong> <br/>
                Date: N.S. 1138 Gunla 5 to 9 (23 to 27 July 2018). <br/>
                Attendance: Amsterdam, Netherlands. <br/>
                Panels: <br/>
                <ol className="list-[lower-alpha] pl-8">
                  <li>Trans youth at the Table: A bridge to future;</li>
                  <li>Integration in Practice: First Hand Accounts from clients and health providers;</li>
                  <li>Workshop on wellbeing and resilience of trans activists;</li>
                  <li>Hearing from Trans Leaders: The change we want to see.</li>
                </ol>
                <Link href="https://programme.aids2018.org/People/PeopleDetailStandalone/9021" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                    Link to official website&apos;s person grid.
                </Link>
              </li>
              <li>
                <strong>United Nations 38th Human Rights Council, Side Event.</strong> <br/>
                Date: N.S. 1138 Dila 1 (18 June 2018). <br/>
                Attendance: Geneva, Switzerland. <br/>
                Panel: Mainstreaming gender identity and expression in feminist and gender equality work from a transgender perspective. <br/>
                <Link href="https://fb.watch/fxIb6p0K83/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                    Facebook Live Video.
                </Link>
                <Link href="https://gate.ngo/trans-activists-advocate-for-their-rights-at-the-united-nations/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                    Link to  organizer&apos;s website.
                </Link>
              </li>
              <li>
                <strong>Women of the World (WoW) Kathmandu 2018.</strong> <br/>
                Date: N.S. 1138 Chila 1 (17 Feb 2018). <br/>
                Attendance: IOE – Pulchowk Campus, Lalitpur, Nepal. <br/>
                Panel: Women and sexuality. <br/>
                <Link href="https://www.britishcouncil.org.np/wowktm-2018-panel-discussion" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >
                </Link>
              </li>
            </ol>
            
          </div>

          {/* Publications */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Publications</h2>
            <p className="text-gray-700 mt-2 text-justify">
              I have created a separate portfolio of my publications. It can be accessed in the following link : <Link href="https://rukshanakapalipublications.wordpress.com/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >https://rukshanakapalipublications.wordpress.com/</Link>.
            </p>   
          </div>

          {/* Legal Portfolio */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Legal Portfolio</h2>
            <p className="text-gray-700 mt-2 text-justify">
              Since the year N.S. 1141 (2020), I have been using litigation as a medium to establish legal and policy changes. I have created a separate portfolio of my legal work. It can be accessed in the following link : <Link href="https://rukshanakapalilitigations.wordpress.com/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >https://rukshanakapalilitigations.wordpress.com/</Link>.
            </p>   
          </div>

          {/* International Conferences */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>International Conferences</h2>
            <p className="text-gray-700 mt-2 text-justify">
              These are some of the international conferences that I’ve attended or participated.
            </p>   
            <ol className="list-decimal pl-8">
              <li>2024 Global LGBTI Funding Summit. (<Link href="https://lgbtifundingsummit.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>International Youth Conference 10th Edition (IYC10). (<Link href="https://iycforyouth.org/events/international-youth-conference-10th-edition-iyc10/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>Language Justice Convenings 2023, Foundation for A Just Society. </li>
              <li>Language Policy Forum 2023. (<Link href="https://www.soas.ac.uk/about/event/language-policy-forum-2023" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>Lavender Languages and Linguistics Conference 29. (<Link href="https://sites.google.com/boisestate.edu/lavenderlanguagesconference29/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} ></Link>)</li>
              <li>Reimagine Our Future: Trans and Gender Diverse Peoples Convening, South Asia, 2023. (<Link href="https://weareaptn.org/2023/01/12/reimagine-our-future-trans-and-gender-diverse-peoples-convening-south-asia/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>ILGA Asia Conference 2022. (<Link href="https://www.ilgaasia2022.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>Language Justice Convenings 2022, Foundation for A Just Society. </li>
              <li>Asia-Pacific Forum on Sustainable Development 2022, Youth Forum. </li>
              <li>Women Deliver Conference 2019. (<Link href="https://wd2019.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>World AIDS Conference 2018. (<Link href="https://www.aids2018.org/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
              <li>9th Asia Pacific Conference on Reproductive and Sexual Health and Rights 2017. (<Link href="https://asiapacific.unfpa.org/en/events/9th-asia-pacific-conference-reproductive-and-sexual-health-and-rights" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)</li>
            </ol>
          </div>

          {/* Features */}
          <div className="space-y-4 text-xl"> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Features</h2>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>TIME 100 Next 2024</strong> (<Link href="https://time.com/7023612/rukshana-kapali/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>BBC 100 Women 2023: Who is on the list this year?</strong> (<Link href="https://www.bbc.co.uk/news/resources/idt-02d9060e-15dc-426c-bfe0-86a6437e5234" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Wikipedia</strong> (<Link href="https://en.wikipedia.org/wiki/Rukshana_Kapali" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Championing change, The Kathmandu Post</strong> (<Link href="https://kathmandupost.com/art-culture/2023/12/09/championing-change-1702090110" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Minchyaa Meyju by Mrigaja Bajracharya, British Council Nepal</strong> (<Link href="https://fb.watch/wfCGj4zRLH/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>The Heroines of My Life</strong> (<Link href="https://theheroines.blogspot.com/2021/08/interview-with-rukshana-kapali.html" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>UN Girls’ Education Initiative: 6 LGBTQ+ young activists you should know about</strong> (<Link href="https://medium.com/ungei-blog/6-lgbtq-young-activists-you-should-know-about-d0fcccc68fdd" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>University of York </strong> (<Link href="https://www.york.ac.uk/cahr/human-rights-defenders/protective-fellowship/past/rukshana-kapali/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Where Love is Illegal </strong> (<Link href="https://whereloveisillegal.com/rukshana-kapali/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>UN Women : From where I stand: “I identified challenges in both activisms, in terms of acknowledging intersectionality”</strong> (<Link href="https://asiapacific.unwomen.org/en/news-and-events/stories/2019/06/fwis-rukshana-kapali" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>United Nations Information Center </strong> (<Link href="https://un.info.np/Net/NeoDocs/View/9214" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>My struggle for Gender Equality, She is the Story</strong> (<Link href="http://sheisthestory.com/my-struggle-for-gender-equality-rukshana-kapali/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Not Another “Other”, Stellar Online</strong> (<Link href="https://studioiridium.wixsite.com/magazine/post/rukshana-kapali-not-another-other" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
            <p className="text-gray-700 mt-2 text-justify">
              <strong>Shaking up the status quo in Nepal’s queer movement, Suddhashar</strong> (<Link href="https://shuddhashar.com/shaking-up-the-status-quo-in-nepals-queer-movement-mallika-aryal/" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link</Link>)
            </p>
          </div>

          {/* Miscellaneous */}
          <div> 
            <h2 className={`${alegreyaSans.className} mt-8 mb-4 text-2xl font-bold text-red-700 md:text-start text-center`}>Miscellaneous</h2>
            <ol className="list-decimal pl-8">
              <li>
                I made some short funny videos in Nepala Bhasa that was named as <strong><em>Ruku Yu Vines</em></strong>, in the years N.S. 1140/41s. <br/>
                <Link href="https://www.youtube.com/watch?v=WG8q92c3iak&feature=youtu.be" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link to the video compilation</Link>.
              </li>
              <li>
                I participated in <strong><em>Federal Mock Youth Parliament 2018</em></strong> (<em>संघीय युवा संसदको स्थापना र अभ्यास कार्यक्रम – २०७५</em>) organized by National Youth Council.
              </li>
              <li>
                I took the <strong><em>Swo Yatra – Solo Women Travel Challenge</em></strong> in N.S. 1138 (2018), and made a fortnight trip to Mustang. <br/>
                <Link href="https://nepaltraveller.com/sidetrack/246" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link to the news</Link>. <br/>
                <Link href="https://youtu.be/-TdPcsKbC80" className={`${alegreyaSans.className} font-bold text-[#195f2b] hover:opacity-70 hover:transition hover:duration-500`} >Link to the final video</Link>.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <Footer 
        info={{
          headerClassName: alegreyaSC.className,
          className: alegreyaSans.className,
          name: "Rukshana Kapali", 
          profileLink: "", 
          litigationLink: "", 
          publicationLink: "",
          locationHeader: "Location", 
          location: "Lalitpur, Nepal", 
          emailHeader: "Email", 
          email: "rukshanakapali1144@gmail.com", 
          phoneHeader: "Phone", 
          phone: "+977-9808262699",
          year: year
        }}
      />
    </div> 
  );
}
