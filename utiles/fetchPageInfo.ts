import {PageInfo} from 'typings';
import { sanityClient } from "sanity";

export const fetchPageInfo =async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    
    //console.log("fetching", projects);

    return pageInfo;
}

/*
So you will be fetching like this

const res = await sanityClient.fetch(query)

const experiences: Experience [ ] = result

return experiences 
*/