import {starWarsInfo} from "../utils/constants.js";

const StarWars = () => {
    return (
        <div className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[.2em]'}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;