import Navbar from "./components/navbar";
import Profile from "./components/profile";

export default function Home() {
  return (
    <>
      <title>Home</title>
      <main className="max-w-7xl mx-auto">
        <div className="p-4">
          <Profile />
          <Navbar />
        </div>
      </main>
    </>
  );
}
