import './styles.css';
import Answer from './Answer';

export default function App() {
  const codeSnippet = `
<div className="grid  gap-2 m-4">
  <div className="min-h-14 bg-red-300"></div>
  <div className="min-h-14 bg-green-300"></div>
  <div className="min-h-14 bg-purple-300"></div>
</div>
    `;
  return (
    // 大中屏幕，左2，中8，右2.小屏幕只显示中间div
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
      <p>以下是效果</p>
      <Answer />
    </div>
  );
}
