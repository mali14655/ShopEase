export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="./logo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full bg-white"
          />
          <h1 className="text-xl font-bold">ShopEase</h1>
        </div>

        {/* (Optional) Right Section for future nav or buttons */}
        <nav>
          {/* Example placeholder for navigation or profile */}
        </nav>
      </div>
    </header>
  );
}
