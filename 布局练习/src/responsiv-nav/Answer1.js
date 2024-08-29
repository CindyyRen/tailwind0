import './styles.css';

export default function Answer1() {
  return (
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-xl">Logo</div>
        <div class="hidden md:flex space-x-4">
          <a href="#" class="text-white">
            Home
          </a>
          <a href="#" class="text-white">
            About
          </a>
          <a href="#" class="text-white">
            Contact
          </a>
        </div>
        <div class="hidden md:block">
          <button class="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
        <div class="md:hidden">
          <button class="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
}
