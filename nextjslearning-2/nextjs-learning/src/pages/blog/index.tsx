import { Head } from "next/document";
import Blog from "../../components/Blog/blog";
import { BlogData } from "../../components/Blog/blog.mock";
import Link from "next/link";
import React, { Key, useState } from "react";

// export const getStaticProps = async () => {
//   const res = await fetch("https://retoolapi.dev/CNwZfe/data");
//   const blogData = await res.json();

//   return {
//     props: {
//       data: blogData,
//     },
//   };
// };

export const getServerSideProps = async () => {
  const res = await fetch("https://retoolapi.dev/CNwZfe/data");
  const blogData = await res.json();
  return {
    props: {
      data: blogData,
    },
  };
};

interface dataProps {
  data: {
    length: number;
    slice(arg0: number, arg1: number): unknown;
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
  }[];
}

const blog = ({ data }: dataProps) => {
  const [Query, setQuery] = useState("");
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const searchFilter = (array: any[]) => {
    return array.filter((el) => el.title.toLowerCase().includes(Query));
  };
  
  const filtered = searchFilter(visibleData);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Blog {...BlogData} />

      <div className="bg-subColor py-8 ">
        <div className="container mx-auto">
          <div className="w-full ">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Search..."
              className="w-full rounded-md p-4 m-4"
            />
          </div>

          {filtered.map((currentElem) => (
            <div
              key={currentElem.id}
              className="flex justify-start items-center p-4 my-4 bg-white rounded-md mx-8"
            >
              <h2 className="text-2xl text-subColor mr-4 font-bold">
                {currentElem.id}
              </h2>
              <Link href={`/blog/${currentElem.id}`}>
                <h2 className="text-xl text-subColor font-bold">
                  {currentElem.title}
                </h2>
              </Link>
            </div>
          ))}
          {totalPages > 1 && (
            <div className="flex justify-between mt-4 mx-8">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="text-subColor text-xl bg-white p-2 rounded-md mr-2 w-1/2"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="text-subColor text-xl p-2 rounded-md bg-white w-1/2"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default blog;
