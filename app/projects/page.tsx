import Head from "next/head";

function Projects() {
  return (
    <>
      <Head>
        <title>Saurabh Tiwari | Projects</title>
      </Head>
      <main className="bg-gradient-to-b from-white to-gray-100 rounded shadow border p-4 mb-4">
        <div className="text-3xl font-black text-gray-600 text-center mb-4">
          Projects
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-500">
          <div className="col-span-1 rounded shadow p-4 bg-gradient-to-b from-white to-gray-100">
            Project 1 coming soon...
          </div>
          <div className="col-span-1 rounded shadow p-4 bg-gradient-to-b from-white to-gray-100">
            Project 2 coming soon...
          </div>
          <div className="col-span-1 rounded shadow p-4 bg-gradient-to-b from-white to-gray-100">
            Project 3 coming soon...
          </div>
          <div className="col-span-1 rounded shadow p-4 bg-gradient-to-b from-white to-gray-100">
            Project 4 coming soon...
          </div>
        </div>
      </main>
    </>
  );
}

export default Projects;
