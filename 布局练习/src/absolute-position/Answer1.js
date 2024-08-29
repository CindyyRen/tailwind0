import './styles.css';

export default function Answer1() {
  return (
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            This is a description for the card component. It should provide some
            brief information.
          </p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            Action
          </button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            This is a description for the card component. It should provide some
            brief information.
          </p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            Action
          </button>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-bold mb-2">Card Title</h2>
          <p class="text-gray-700 mb-4">
            This is a description for the card component. It should provide some
            brief information.
          </p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            Action
          </button>
        </div>
      </div>
    </div>
  );
}
