import './styles.css';
import Answer1 from './Answer1';

export default function App() {
  const codeSnippet = `
      <div class=" ">
        <div class=" ">
          <div class="">
            <h2 class="">Card Title</h2>
            <p class="">
              This is a description for the card component. It should provide
              some brief information.
            </p>
            <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Action
            </button>
          </div>
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
        {' '}
        在小屏幕上（如移动设备），卡片应占据全宽度并且每行显示一个卡片。
      </p>
      <p className="text-sm text-gray-500">
        {' '}
        在中等屏幕（如平板）上，每行显示两个卡片
      </p>
      <p className="text-sm text-gray-500"> 在大屏幕上，每行显示三个卡片</p>
      <Answer1 />
    </div>
  );
}
