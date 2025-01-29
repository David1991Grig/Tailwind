import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);

    async function fillPlanets(url) {
        const response = await fetch(url);
        const data = await response.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets'));
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`);
        }
    }, [])

    return (
        <form className="@container mx-auto p-5 bg-gray-100 rounded-lg" onSubmit={e => {
            e.preventDefault();
        }}>
            <label className={"block w-full text-red-700/50"}>First Name
                <input className={"w-full p-3 border border-gray-300 rounded-md mt-1 mb-4 box-border"} type="text" name="firstname" placeholder="Your name.."/>
            </label>
            <label className={"block w-full text-red-700/50"}>Last Name
                <input className={"w-full p-3 border border-gray-300 rounded-md mt-1 mb-4 box-border"} type="text" name="lastname" placeholder="Your last name.."/>
            </label>
            <label className={"block w-full text-red-700/50"}>Planet
                <select name="planet" className={"w-full p-3 border border-gray-300 rounded-md mt-1 mb-4 box-border"}>
                    {planets.map(item => <option value={item} key={item}>{item}</option>)}
                </select>
            </label>

            <label className={"block w-full text-red-700/50"}>Subject
                <textarea className={"w-full p-3 border border-gray-300 rounded-md mt-1 mb-4 resize-y h-48"} name="subject" placeholder="Write something.."></textarea>
            </label>
            <button className={"bg-green-600 text-white py-3 px-5 rounded-md hover:bg-green-700"} type="submit">Submit</button>
        </form>
    )
};

export default Contact;