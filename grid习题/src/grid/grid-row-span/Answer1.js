import './styles.css';

export default function Answer1() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      <div className="row-span-2 bg-red-300">占据 2 行</div>
      <div className="bg-blue-300">项 2</div>
      <div className="bg-green-300">项 3</div>
      <div className="bg-green-300">项 3</div>
      <div className="bg-green-300">项 3</div>
      <div className="bg-green-300">项 3</div>
    </div>
  );
}
