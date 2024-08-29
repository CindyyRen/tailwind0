import './styles.css';
import food from '../assets/Variety-fruits-vegetables.jpg';

export default function Answer1() {
  return (
    <div class="relative max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
      <img class="w-full h-48 object-cover" src={food} alt="商品图片" />
      <div class="absolute top-0 right-0 bg-gray-950 bg-opacity-50 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
        Sold Out
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">商品名称</h3>
        <p class="text-gray-600 text-sm mb-4">
          这是商品的简短描述。它描述了商品的主要特点和优点。
        </p>
        <p class="text-xl font-bold text-gray-900">$39.99</p>
      </div>
    </div>
  );
}
