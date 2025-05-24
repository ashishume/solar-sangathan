import UserIcon from "../assets/icons/step1";
import DollarIcon from "../assets/icons/step2";
import ChartIcon from "../assets/icons/step3";

const StepsToSuccess = () => {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      <div className="bg-[#be3a3a] rounded-3xl shadow-2xl py-14 px-6 md:px-16 text-white text-center relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full z-0"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full z-0"></div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10">
          3 Steps to Success
        </h2>
        <p className="text-lg md:text-xl font-semibold mb-10 relative z-10">
          Join Solar Sangathan as a member and witness the power of association
          in action.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 relative z-10">
          <div>
            <div className="flex flex-col items-center mb-2">
              <UserIcon className="mb-2" />
              {/* <div className="text-3xl font-bold">1</div> */}
            </div>
            <div className="text-xl font-extrabold">Become Member</div>
          </div>
          <div>
            <div className="flex flex-col items-center mb-2">
              <DollarIcon className="mb-2" />
              {/* <div className="text-3xl font-bold">2</div> */}
            </div>
            <div className="text-xl font-extrabold">Get Premium Support</div>
          </div>
          <div>
            <div className="flex flex-col items-center mb-2">
              <ChartIcon className="mb-2" />
              {/* <div className="text-3xl font-bold">3</div> */}
            </div>
            <div className="text-xl font-extrabold">Expand With us</div>
          </div>
        </div>
        <div className="flex justify-center relative z-10">
          <button className="bg-white text-[#be3a3a] font-bold text-2xl px-10 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300">
            Get Invited
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsToSuccess;
