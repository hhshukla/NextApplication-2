// export const getStaticPaths = async () => {
//   const res = await fetch("https://retoolapi.dev/CNwZfe/data");
//   const blogData = await res.json();

import Link from "next/link";

//   const paths = blogData.map((currentEle: { id: any }) => {
//     return {
//       params: { pageNo: currentEle.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };



// export const getStaticProps = async (context: { params: { pageNo: any } }) => {
//   const id = context.params.pageNo;
//   const res = await fetch(`https://retoolapi.dev/CNwZfe/data/${id}`);
//   const blogData = await res.json();

//   return {
//     props: {
//       data: blogData,
//     },
//   };
// };

export const getServerSideProps = async (context: { params: { pageNo: any } })  =>{
    const id = context.params.pageNo;

  const res = await fetch(`https://retoolapi.dev/CNwZfe/data/${id}`);
  const blogData = await res.json();
  return {
    props: {
      data: blogData,
    },
  };


}

interface dataProps {
  data: {
    map(
      arg0: (
        currentElem: {
          id: React.Key | null | undefined;
          title: string;
          description: string;
        },
        i: any
      ) => void
    ): unknown;
    id: number;
    title: string;
    description: string;
  };
}


const BlogData = ({ data }: dataProps) => {
  return (
    <>
      <div className="bg-subColor py-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-1/2  p-4 my-4 bg-white rounded-md">
              <h2 className="text-2xl text-subColor mr-4 font-bold">
                {data.id}
              </h2>
              <h2 className="text-xl text-subColor font-bold">{data.title}</h2>
              <h2 className="text-xl text-subColor font-bold">
                {data.description}
              </h2>
              <div className="w-full  bg-mainBg mt-4 flex  justify-center rounded-md hover:bg-subColor text-black hover:text-white ">
              <Link href={"/"} className=" text-md1 p-1  font-bold ">Back</Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogData;
