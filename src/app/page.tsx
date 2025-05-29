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
      <div className="flex flex-col md:flex-row">
        {/* Profile picture */}
        <div className="relative w-96 h-96 rounded-full overflow-hidden border-1 border-black p-1">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/rukshana-1-copy.jpg"
              alt="rukshana profile picture"
              fill
              className="object-cover"
            />
          </div>

          
        </div>
      </div>  
    </div>
  );
}
