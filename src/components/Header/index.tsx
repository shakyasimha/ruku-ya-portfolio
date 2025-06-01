import Image from 'next/image';

interface HeaderProps {
    headerInfo: {
        name: string, 
        subtitle: string, 
        call: string, 
        message: string
    }
};

export default function Page({ headerInfo }: HeaderProps) {
    return(
        <div className="flex flex-col">
            {/* Cover photo */}
            <div className="w-full h-64 relative">
                <Image 
                    src="/cover-image-1.jpg"
                    alt="generic cover image"
                    fill
                    className="object-cover"
                />
            </div>
        
            {/* Profile picture, title, etc. */}
            <div className="flex flex-col md:flex-row items-center mt-[-4rem] px-4 w-full max-w-4xl mx-auto">
                {/* Profile picture */}
                <div className="relative flex-shrink-0 w-60 h-60 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 z-10">
                    <Image
                    src="/rukshana-1-copy.jpg"
                    alt="rukshana profile picture"
                    fill
                    className="object-cover"
                    />
                </div>
        
                {/* Client name, client description and contact buttons */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-8">
                    <div className="text-center md:text-left md:ml-8 md:mt-4">
                        <h1 className="text-3xl font-bold">{headerInfo.name}</h1>
                        <p className="text-[#333] text-xl">{headerInfo.subtitle}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-4 md:mt-0 justify-center md:justify-end">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded">{headerInfo.call}</button>
                        <button className="px-4 py-2 border border-gray-300 rounded">{headerInfo.message}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}