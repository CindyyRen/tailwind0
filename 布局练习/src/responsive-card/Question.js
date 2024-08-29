import './styles.css';
import Answer1 from './Answer1';

export default function App() {
  const codeSnippet = `
    <div class="max-w-xs rounded-lg shadow-lg overflow-hidden bg-white">
      <img class="w-full h-48 object-cover" src={food} alt="商品图片" />
      <div class=" bg-gray-950 bg-opacity-50 text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
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
    `;
  return (
    // 改为小屏幕为 1 列，大屏幕为 2 列
    <div className="min-w-[320px]">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-6xl mx-auto">
        <h1>这里是源码</h1>
        <pre className="bg-gray-100 p-4 rounded-3xl text-xs sm:text-base">
          <code>{codeSnippet}</code>
        </pre>
      </div>
      {/* <p>如果有图，放这儿</p> */}
      <p>以下是效果</p>
      <p className="text-sm text-gray-500">
        把sold out按钮设置成绝对定位，位置在右上角。
      </p>
      <Answer1 />
    </div>
  );
}
