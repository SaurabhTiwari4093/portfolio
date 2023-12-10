import Navbar from "../components/navbar";
import Profile from "../components/profile";

export default function Contact() {
  return (
    <>
      <title>Contact</title>
      <main className="max-w-7xl mx-auto">
        <div className="p-4">
          <Profile />
          <Navbar />
        </div>
      </main>
    </>
  );
}
