import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center">
        <div className="container mx-auto ">
          <div className="flex justify-center items-center">
            <h1 className="text-[60px] md:text-[120px] text-subColor text-center font-extraBold font-Montserrat"> Oops! it's 404😕</h1>
          </div>
          <div className="flex flex-col justify-around items-start bg-subColor p-8 rounded-3xl my-[75px] mx-[20px]">
            <h1 className="text-md md:text-5xl text-white mb-4 font-Montserrat font-bold">
              Lost your way? 😕
            </h1>
            <h2 className="text-white mb-4 text-md1 font-Montserrat font-bold">
              Sorry, We can't find that page, you will find loads to explore on
              the home page.
            </h2>
            <Link
              href={"/"}
              className="text-subColor mb-4 bg-white px-[30px] py-[15px] rounded-full hover:bg-borderColor text-sm2 hover:text-subColor font-Montserrat font-bold"
            >
              Back to Home
            </Link>
            <h3 className="text-white mb-4 font-Montserrat font-bold">Error code: 404  </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
