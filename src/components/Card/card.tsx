import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({ CampName, imgSrc}  : {CampName: string , imgSrc: string}) {



  return (
      <InteractiveCard contentName={CampName}>
      <div className='w-dull h-[70%] relative round-t-lg  bg-white '>
        <Image
          src={imgSrc}
          alt="Vaccine picture"
          fill={true}
          className='object-cover rounded-t-lg'
          
        />
      </div>
      <div className='w-full h-[30%] p-[10px]'>{CampName}</div>
      </InteractiveCard>
    
  );
}
