
const Banner = () => {
    return (
        <div className="md:h-screen h-[60vh] bg-[url('https://monawatch.com/wp-content/uploads/2022/09/offer-banner-50off.jpg')] bg-top bg-cover bg-no-repeat">
            <div className="bg-black/40 md:h-screen h-[60vh]">
            <div className="container mx-auto flex px-5 md:px-10 items-center  h-full">
                <div className="">
                <p className="text-white text-2xl ">TIMELESS & ELEGANT</p>
                <h1 className=" font-semibold pt-5 pb-2 text-white text-5xl md:text-7xl"> BEST SELLER</h1>
                <p className="text-white text-lg font-medium ">Complete your everyday look with a classic leather strap watch.</p>
                <div className="mt-10">
                <button className="primary-btn  text-white w-32">Shop now</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;