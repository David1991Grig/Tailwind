const Footer = () => {
    return (
        <footer className={'clear-both bg-grey-color h-20 rounded-b-2xl grid grid-cols-7 items-center'}>
            <div className={'col-start-3 bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer text-center hover:bg-red-500 hover:text-white'}>Send me an <span
                className={'text-black uppercase'}>email</span></div>
        </footer>
    );
};

export default Footer;