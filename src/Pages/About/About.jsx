
const About = () => {
    return (
        <div className="container mx-auto px-5 min-h-screen gap-6 md:gap-10 grid grid-cols-1 lg:grid-cols-2 items-center">
           <div>
            <img className="h-[90vh] w-full object-cover rounded-xl" src="https://static-01.daraz.com.bd/p/c7848f8b648843d17d903866506e238f.jpg_750x750.jpg_.webp" alt="Loading image" />
           </div>
           <div>
            <h1 className="md:text-4xl text-2xl font-semibold text-primary-color dark:text-white">Dream Watch</h1>
           <p className="text-gray-800 md:text-lg w-3/4 text-justify mt-5  dark:text-gray-400">Discover elegance in every tick with our timeless watches. Meticulously crafted, seamlessly blending classic aesthetics and cutting-edge technology. Elevate your style, embrace precision.</p>
           <button className="primary-btn px-5 text-white mt-5">Explore More</button>
           </div>
        </div>
    );
};

export default About;