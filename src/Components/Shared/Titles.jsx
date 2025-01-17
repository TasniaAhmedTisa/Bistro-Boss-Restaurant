
const Titles = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md: w-4/12 my-4">
            <p className="text-yellow-500 mb-2 text-lg italic">---  {subHeading}  ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
            
        </div>
    );
};

export default Titles;