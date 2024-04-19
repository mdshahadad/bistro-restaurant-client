import SectionsTitle from "../SectionsTitle/SectionsTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-bg bg-fixed py-24 mb-16">
            <SectionsTitle subheading="Check it out" heading="From Our Menu"></SectionsTitle>
            <section className="md:flex justify-center items-center max-w-5xl mx-auto backdrop-blur-md pr-10">
                <div>
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="text-white md:ml-8">
                    <h4 className="text-2xl">March 20, 2023</h4>
                    <h4 className="text-2xl">WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum aliquid quae. Debitis laboriosam illo sapiente vel repudiandae reprehenderit facilis.</p>
                        <button className="font-semibold text-xl border-white border-b-4 rounded-xl px-8 py-2 text-white mt-8">Read More</button>
                </div>
            </section>
        </div>
    );
};

export default Featured;