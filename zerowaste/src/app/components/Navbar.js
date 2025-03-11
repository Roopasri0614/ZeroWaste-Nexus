export default function Navbar() {
    return (
      <nav className="bg-green-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-white">Navbar is rendering!</p>
          <div className="space-x-6">
            <a href="/" className="text-white hover:underline">Home</a>
            <a href="/about" className="text-white hover:underline">About</a>
            <a href="/donate" className="text-white hover:underline">Donate</a>
            <a href="/contact" className="text-white hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  