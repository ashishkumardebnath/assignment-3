import heroImage from "../../assets/frame.png";

export default function Hero() {
  return (
    <section
      className="pb-[114px] pt-20 md:mt-[100px]"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full animate-updown"
              src={heroImage}
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div>
            <h1 className="mb-6 text-[56px]  font-bold leading-none text-[#F5BF42] lg:text-[72px]">
              Tasker
            </h1>
            <p className="text-lg my-2 opacity-60 poppins-regular">
              Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
              Your Personal Productivity Ally for Seamless Goal Achievement and
              Stress-Free Task Management.
            </p>
            <button className="bg-[#03B77F] rounded poppins-regular py-1 px-4 mt-10 text-xl font-semibold">
              <a href="#tasks"> Go Task</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
