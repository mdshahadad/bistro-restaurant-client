

const SectionsTitle = ({ heading, subheading }) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mb-8">
            <p className="mb-2 text-yellow-600">--- {subheading} ---</p>
            <h3 className="text-3xl uppercase border-y-2 py-2">{heading}</h3>
        </div>
    );
};

export default SectionsTitle;