import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";

const defaultInfo = {
  name: "Rukshana Kapali",
  subtitle: "Lawyer, Linguist, Activist.",
  call: "Call",
  message: "Message"
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        headerInfo={defaultInfo}
      />

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
