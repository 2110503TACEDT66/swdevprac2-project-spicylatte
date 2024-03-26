import React from 'react'
import Image from 'next/image'

export default function HospitalInfoPage({params}: {params: {cid:string}}) {

    const  mockCardRepo = new Map()
     mockCardRepo.set("001", {name:"Van-Camp", image :"/img/van.jpeg"})
     mockCardRepo.set("002", {name:"Mountain", image :"/img/mountain.jpeg"})
     mockCardRepo.set("003", {name:"River-site", image :"/img/river.jpeg"})
  return (
    <main>
        <div className='flex-row flex mt-20 ml-10'>
            <Image src ={(mockCardRepo.get(params.cid)).image}
            alt='CampLocation'
            width={0} height={0} sizes="100vw"
            className = 'rounded-lg w-[30%] bg-black '/>
            <div className='text-md mx-5 text-lg'>{(mockCardRepo.get(params.cid)).name}</div>
        </div>
    </main>
  )
}
