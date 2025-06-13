import { alegreyaSans, alegreyaSC, roboto } from "@/ui/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { nepalSambat, nepalSambatLatin } from "@/lib/fetchYear";

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
            <h2 className={`${alegreyaSans.className} text-2xl font-bold text-red-700`}>About Me</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Demographics</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Academic Qualification</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Fellowships</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Institutes</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>MOOCs</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Language Proficiency</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Working Experiences</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Freelancing</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Affilitations</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Awards and Recognitions</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Advocacy Experiences</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Initiatives & Co-initiatives</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Speaking Appointments</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Publications</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Legal Portfolio</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>International Conferences</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Features</h2>
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
            <h2 className={`${alegreyaSans.className} mt-4 text-2xl font-bold text-red-700`}>Miscellaneous</h2>
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
