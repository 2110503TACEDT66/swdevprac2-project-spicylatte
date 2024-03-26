'use client'
import Image from "next/image";
import Card from "./card";
import { Link} from "@mui/material";
import camplocation from "@/app/(campinfo)/camplocation/page"

export default function Cardpanel() {
    const  mockCardRepo =[{ cid :"001", name:"Van-Camp", image :"/img/van.jpeg"},{ cid :"002", name:"Mountain",image :"/img/mountain"},{ cid :"003", name:"River-site",image :"/img/river.jpeg"}]
    return(

        <div>
<div style={{margin:"20px"}} className='w-full  rounded-t-lg flex justify-around flex-row flex-wrap content-around '>
    {
    mockCardRepo.map((campitem)=>(
        <Link href={`/camplocation/${campitem.cid}`} className="w-1/5">
        <Card CampName={campitem.name} imgSrc={campitem.image}/>
        </Link>
    ))
    }

</div>
</div>

    );
}

