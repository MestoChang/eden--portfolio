import React from 'react';

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {sub == undefined ? (
        ''
      ) : (
        <p className="w-fit rounded-full bg-gray-950/80 px-4 py-2 text-sm text-nowrap md:text-base">
          {sub}
        </p>
      )}

      <div className="text-center text-2xl font-semibold md:text-4xl">{title}</div>
    </div>
  );
};

export default TitleHeader;
