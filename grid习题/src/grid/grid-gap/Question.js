import './styles.css';
import Answer1 from './Answer1';
import Answer2 from './Answer2';

export default function App() {
  const codeSnippet = `
    <div className="grid grid-cols-3">
      <div className="bg-red-300">项 1</div>
      <div className="bg-blue-300">项 2</div>
      <div className="bg-green-300">项 3</div>
      <div className="bg-red-300">项 1</div>
      <div className="bg-blue-300">项 2</div>
      <div className="bg-green-300">项 3</div>
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
      <p className="text-sm text-gray-500"> 设置gap</p>
      <Answer1 />
      <p className="mt-10">分别设置x轴gap为8和y轴gap为2</p>
      <Answer2 />
    </div>
  );
}
