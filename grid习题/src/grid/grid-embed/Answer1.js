import './styles.css';

export default function Answer1() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-red-300 p-5">
        <div className="grid grid-cols-2">
          <div className="bg-yellow-300">内网格项 1</div>
          <div className="bg-green-300">内网格项 2</div>
        </div>
      </div>
      <div className="bg-blue-300">外网格项 2</div>
    </div>
  );
}
