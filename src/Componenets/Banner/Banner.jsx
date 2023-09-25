import PropTypes from 'prop-types';

const Banner = ({ handleSearchedData }) => {
    return (
        <div className="flex flex-col justify-center text-center min-h-[30rem] items-center">
            <h1 className="text-[#0B0B0B] text-2xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            <form onSubmit={handleSearchedData} className="max-w-[29.375rem]">
                <div className="relative mt-10">
                    <input type="text" name='search' placeholder="Search here...." className="input input-bordered w-full pr-16" />
                    <button className="btn bg-[#FF444A] text-white hover:text-black absolute top-0 right-0 rounded-l-none">Search</button>
                </div>
            </form>
        </div>
    );
};

Banner.propTypes = {
    handleSearchedData: PropTypes.func
}

export default Banner;