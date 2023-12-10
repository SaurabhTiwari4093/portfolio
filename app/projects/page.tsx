import Navbar from "../components/navbar";
import Profile from "../components/profile";

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <main className="max-w-7xl mx-auto">
        <div className="p-4">
          <Profile />
          <Navbar />
        </div>
      </main>
    </>
  );
}
