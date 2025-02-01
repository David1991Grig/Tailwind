import {starWarsInfo} from "../utils/constants.js";
import Paragraph from "./Paragraph.jsx";

const StarWars = () => {
    return (
        <Paragraph text={starWarsInfo}/>
    );
};

export default StarWars;