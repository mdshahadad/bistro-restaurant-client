const Cover = ({ img, title }) => {
    return (
        <div className="hero h-[750px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas veritatis maiores tempora soluta laudantium sint totam, aliquid eum deleniti eos quia rerum dolorum cumque minima earum ad, quibusdam voluptates voluptatem.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Cover;