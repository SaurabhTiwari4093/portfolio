import OneProject from "../components/project";

function Projects() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4 mb-4">
      <div className="text-3xl font-black text-gray-600 text-center mb-4">
        Projects
      </div>
      <div className="grid grid-cols-2 gap-4 text-gray-500">
        <OneProject label="Project 1 coming soon..." />
        <OneProject label="Project 2 coming soon..." />
        <OneProject label="Project 3 coming soon..." />
        <OneProject label="Project 4 coming soon..." />
      </div>
    </main>
  );
}

export default Projects;
