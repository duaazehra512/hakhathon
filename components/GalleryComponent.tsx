import Image from 'next/image';

const ChairGallery = () => {
  const chairImages = [
    { src: "/chair3.png", alt: "Main Chair", main: true },
    { src: "/chair4.png", alt: "Chair 2", main: false },
    { src: "/chair.png", alt: "Chair 3", main: false },
    { src: "/card.png", alt: "Chair 4", main: false },
    { src: "/chair2.png", alt: "Chair 5", main: false }
  ];

  return (
    <div className="mt-12 flex items-center relative">
      {/* Rotated Text Section - Perfect Alignment */}
      <div className="absolute top-1/2  -translate-y-1/2 -left-32 rotate-90 origin-center">
        <p className="text-sm md:text-lg text-gray-700 font-semibold tracking-wide whitespace-nowrap">
          EXPLORE NEW AND POPULAR STYLES
        </p>
      </div>

   



      <div className="flex flex-col md:flex-row items-center ml-10">
        {/* Left Section - Main Chair */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={chairImages[0].src}
            alt={chairImages[0].alt}
            width={400}
            height={400}
            className="object-contain max-w-full max-h-[400px]"
            priority
          />
        </div>

        {/* Right Section - Gallery Images */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4 ml-4">
          {chairImages.slice(1).map((chair, index) => (
            <Image
              key={index}
              src={chair.src}
              alt={chair.alt}
              width={200}
              height={200}
              className="object-cover w-full h-full rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChairGallery;

