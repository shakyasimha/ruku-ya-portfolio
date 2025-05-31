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
        <div className="mt-4 md:mt-32 md:ml-8 text-center md:text-left">
          <h1 className="text-3xl font-bold">Rukshana Kapali</h1>
          <p className="text-[#333] text-xl">Lawyer, Activist, Linguist.</p>

          {/* Button for calls */}
          <div className="flex gap-2 mt-2 justify-center sm:justify-start">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Call</button>
            <button className="px-4 py-2 border border-gray-300 rounded">Message</button>
          </div>
        </div>

        <hr className="border-t border-gray-600 mt-4" />
      </div>

      {/* Content section */}
      <div className="flex md:flex-row sm:flex-col gap-6 p-4 max-w-4xl mx-auto mt-8">
        {/* About Me section */}
        <div>
          <h2 className="text-xl font-semibold">
            About Me
          </h2>

          <p className="text-gray-700 justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-gray-700 justify-center">
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        {/* Location, contact details */}
        <div>
          <div>
            <h2 className="text-xl font-bold">Location</h2>
            <Image 
              src="https://flagcdn.com/w80/us.png"
              width={8}
              height={8}
              alt="nepal flag"
            />
            <p className="text-xl font-bold">Lalitpur, Nepal</p>
          </div>

          <div>
            Email
          </div>

          <div>
            Contact Number
          </div>

          <div> 

          </div>
        </div>
      </div>
    </div> 
  );
}
