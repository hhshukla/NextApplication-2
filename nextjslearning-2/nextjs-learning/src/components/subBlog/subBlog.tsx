import React from "react";

export const getStaticProps = async () => {
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
    map(
      arg0: (currentElem: { id: React.Key | null | undefined ,title:string ,description:string }, i: any) => void
    ): unknown;
    id: number;
    title: string;
    description: string;
  };
}

const subBlogs = ({ data }: dataProps) => {
  return (
    <div>
      <>
        {data?.map(
          (currentElem) => {
            return (
              <div>
                <div key={currentElem.id}>
                  <h2 className="">{currentElem.title}</h2>
                  <h3 className="">{currentElem.description}</h3>
                </div>
                ;
              </div>
            );
          }
        )}
      </>
    </div>
  );
};

export default subBlogs;
