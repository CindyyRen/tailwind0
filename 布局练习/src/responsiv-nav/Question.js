import './styles.css';
import Answer1 from './Answer1';

export default function App() {
  const codeSnippet = `
      <nav class="bg-gray-800 p-3">
        <div class="">
          <div class="text-white text-xl">Logo</div>
          <div class="">
            <a href="/" class="text-white">
              Home
            </a>
            <a href="/" class="text-white">
              About
            </a>
            <a href="/" class="text-white">
              Contact
            </a>
          </div>
          <div class="">
            <button class="bg-blue-500 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
          <div class="">
            <button class="text-white">☰</button>
          </div>
        </div>
      </nav>
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
      <p className="text-sm text-gray-500"> 设置响应式的nav</p>
      <p className="text-sm text-gray-500">
        {' '}
        使用 Tailwind CSS 的内置类实现布局和样式
      </p>
      <p className="text-sm text-gray-500">
        {' '}
        使用 Tailwind CSS 的响应式断点类控制视图。
      </p>
      <p className="text-sm text-gray-500"> 不要使用任何外部库或自定义 CSS</p>
      <Answer1 />
    </div>
  );
}
