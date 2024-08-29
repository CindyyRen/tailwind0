import './styles.css';

export default function Answer() {
  return (
    <div className="grid sm:grid-cols-12 gap-2 m-4">
      <div className="hidden sm:block sm:col-span-2 min-h-14 bg-red-300"></div>
      <div className="col-span-12 sm:col-span-8 min-h-14 bg-green-300"></div>
      <div className="hidden sm:block sm:col-span-2 min-h-14 bg-purple-300"></div>
    </div>
  );
}
