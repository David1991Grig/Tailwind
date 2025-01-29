import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";


const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });
        }
        return () => console.log("FarGalaxy was unmounted");
    }, [])

    return (
        <p className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[.2em]'}>
            {openingCrawl}
        </p>
    );
};

export default FarGalaxy;