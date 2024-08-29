import React from 'react';

const Answer2 = () => {
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="row-start-1 row-end-3 bg-red-300 p-4">跨行 1 到 2</div>
        <div className="row-start-2 row-end-4 bg-blue-300 p-4">跨行 2 到 3</div>
        <div className="row-start-1 row-end-2 bg-green-300 p-4">跨行 1</div>
      </div>
    </div>
  );
};

export default Answer2;
