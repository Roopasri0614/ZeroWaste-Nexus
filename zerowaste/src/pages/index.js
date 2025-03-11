import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
        <h1 className="text-4xl font-bold text-green-800">Welcome to ZeroWaste</h1>
      </main>
    </div>
  );
}
