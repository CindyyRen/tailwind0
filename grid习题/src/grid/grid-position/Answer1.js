import './styles.css';

export default function Answer1() {
  return (
    <div className="grid grid-cols-4 ">
      <div className="col-start-2 col-end-4 bg-red-300 p-4">跨列 2 到 3</div>
      <div className="col-start-1 col-end-3 bg-blue-300 p-4">跨列 1 到 2</div>
      <div className="col-start-3 col-end-5 bg-green-300 p-4">跨列 3 到 4</div>
    </div>
  );
}
