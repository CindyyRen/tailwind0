import './styles.css';
import Answer1 from './Answer1';
import Answer2 from './Answer2';

export default function App() {
  const codeSnippet1 = `
<div className=" ">
  <div className=" ">跨列 2 到 3</div>
  <div className=" ">跨列 1 到 2</div>
  <div className=" ">跨列 3 到 4</div>
</div>
    `;
  const codeSnippet2 = `
<div className=" ">
  <div className="  bg-red-300 p-4">跨 2 列和 2 行</div>
  <div className="  bg-blue-300 p-4">跨 1 列和 3 行</div>
  <div className="  bg-green-300 p-4">跨 3 列和 1 行</div>
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
        <h1>这里题目1是源码</h1>
        <pre className="bg-gray-100 p-4 rounded-3xl text-xs sm:text-base">
          <code>{codeSnippet1}</code>
        </pre>
      </div>
      {/* <p>如果有图，放这儿</p> */}
      <p>题目1描述</p>
      <p className="text-sm text-gray-500">
        grid-cols-4: 创建一个四列的网格布局。
      </p>{' '}
      <p className="text-sm text-gray-500">
        col-start-2 col-end-4: 第一个网格项从第 2 列开始，到第 4 列结束，跨越了
        2 列。
      </p>{' '}
      <p className="text-sm text-gray-500">
        col-start-1 col-end-3: 第二个网格项从第 1 列开始，到第 3 列结束，跨越了
        2 列。{' '}
      </p>
      <p className="text-sm text-gray-500">
        col-start-3 col-end-5: 第三个网格项从第 3 列开始，到第 5 列结束，跨越了
        2 列
      </p>
      <p>以下是效果</p>
      <Answer1 />
      <div className="max-w-6xl mx-auto">
        <h1>这里题目2是源码</h1>
        <pre className="bg-gray-100 p-4 rounded-3xl text-xs sm:text-base">
          <code>{codeSnippet2}</code>
        </pre>
      </div>
      <p>题目描述2</p>
      <p className="text-sm text-gray-500">
        grid-cols-3 grid-rows-3: 创建一个三列三行的网格布局。
      </p>{' '}
      <p className="text-sm text-gray-500">
        row-start-1 row-end-3: 第一个网格项从第 1 行开始，到第 3 行结束，跨越了
        2 行。
      </p>{' '}
      <p className="text-sm text-gray-500">
        row-start-2 row-end-4: 第二个网格项从第 2 行开始，到第 4 行结束，跨越了
        2 行。
      </p>
      <p className="text-sm text-gray-500">
        row-start-1 row-end-2: 第三个网格项只占据了第 1 行。
      </p>
      <p>以下是效果</p>
      <Answer2 />
    </div>
  );
}
