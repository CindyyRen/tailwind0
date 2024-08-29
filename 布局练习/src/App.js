import './styles.css';
import Question from './responsive-card/Question';
import food from './assets/Variety-fruits-vegetables.jpg';

export default function App() {
  return (
    <div class="">
      {/* 这里是开始位置  初始源码见网页*/}
      <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
          <h2 class="text-xl font-semibold mb-4">模态框标题</h2>
          <p class="text-gray-600 mb-4">
            这是模态框的内容。你可以在这里添加任何你想要的内容，包括文本、图片、表单等。
          </p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            关闭
          </button>
        </div>
      </div>
      {/* 这里是源码结束位置 */}
      <Question />
    </div>
  );
}
