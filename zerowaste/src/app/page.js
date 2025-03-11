export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Navbar */}
      <nav className="bg-green-700 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">ZeroWaste</h1>
        <div className="space-x-4 text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Donate</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8">
        <h2 className="text-xl font-semibold">Welcome to ZeroWaste</h2>
        <p>Join us in reducing food waste and making a greener planet!</p>
      </main>
    </div>
  );
}
