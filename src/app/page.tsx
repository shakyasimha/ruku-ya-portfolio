import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col md:flex-row items-center mt-[-6rem] px-4">
        {/* Profile picture */}
        <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 z-10">
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
        <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-8 max-w-4xl">
          <div className="text-center md:text-left md:ml-8 md:mt-4">
            <h1 className="text-3xl font-bold">Rukshana Kapali</h1>
            <p className="text-[#333] text-xl">Lawyer, Activist, Linguist.</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Call</button>
            <button className="px-4 py-2 border border-gray-300 rounded">Message</button>
          </div>
        </div>

        
      </div>

      {/* Horizontal divider section */}
      <hr className="border-t border-gray-600 mt-6 w-full max-w-4xl" />

      {/* Content section */}
      <div className="flex flex-col md:flex-row gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="text-gray-700 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 mt-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...
          </p>
        </div>

        {/* Location, contact details */}
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-xl font-bold">Location</h2>
            <div className="flex items-center gap-2 mt-1">
              <Image 
                src="https://flagcdn.com/w80/np.png"
                width={20}
                height={20}
                alt="Nepal flag"
              />
              <p className="font-bold">Lalitpur, Nepal</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">Email</h2>
            <p>rukshana@example.com</p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Contact Number</h2>
            <p>+977-98XXXXXXX</p>
          </div>
        </div>
      </div>
    </div> 
  );
}
