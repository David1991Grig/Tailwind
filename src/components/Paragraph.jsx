const Paragraph = ({text}) => {
    return (
        <div>
            <p className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-[.2em]'}>{text}</p>
        </div>
    );
};

export default Paragraph;