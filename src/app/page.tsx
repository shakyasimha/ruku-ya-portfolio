import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cover image */}
      <div className="w-full h-64 relative">
        <Image 
          src="/cover-image-1.jpg"
          alt="generic cover image"
          fill
          className="object-cover"
        />
      </div>

      {/* Profile header section */}
      <div className="flex flex-col md:flex-row items-center mt-[-4rem] px-4">
        {/* Profile picture */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 z-10">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/rukshana-1-copy.jpg"
              alt="rukshana profile picture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Client name, client description and contact buttons */}
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h1 className="text-2xl font-bold">Rukshana Kapali</h1>
          <p className="text-[#333]">Lawyer, Activist, Linguist.</p>
        </div>
      </div>
    </div> 
  );
}
