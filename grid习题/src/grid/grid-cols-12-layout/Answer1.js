import './styles.css';

export default function Answer1() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-6 min-h-14 bg-red-300">6列宽</div>
      <div className="col-span-6 min-h-14 bg-green-300">6列宽</div>
    </div>
  );
}
