// pages/index.js
import Layout from '@components/Layout';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Function to handle window resizing
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 765);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout title="Home — SecuFlow" description="Welcome to SecuFlow.">
      {/* Hero Section */}

      {/* Main Content */}
      <div className="z-0 grid grid-cols-12 gap-4 min-h-[1000px]">
        {/* Search and Filters */}
        <aside className="col-span-12 xl:col-span-3 bg-gray-100 p-4">
          <h2 className="font-bold">Search / Filters</h2>
          <input
            type="text"
            placeholder="Filter by keyword"
            className="w-full mt-2 p-2 border border-gray-300 rounded"
          />
        </aside>

        {/* Visualizers Container */}
        <section className="col-span-12 xl:col-span-6 p-4 flex flex-col items-start h-full">
          {/* Text Input Field */}
          <input
            type="text"
            placeholder="Enter your text here"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button className="bg-red-600 text-white py-2 px-4 rounded-md mb-4 w-full">
            Generate Report
          </button>
          
          {/* Visualizers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full flex-grow">
            <div className="bg-white shadow rounded-lg p-6 h-full">
              <h2 className="font-bold mb-4">Visualizer 1</h2>
              <div className="text-center">[Graph Visualization 1]</div>
            </div>
            <div className="bg-white shadow rounded-lg p-6 h-full">
              <h2 className="font-bold mb-4">Visualizer 2</h2>
              <div className="text-center">[Graph Visualization 2]</div>
            </div>
          </div>

          {/* Bar Graph Placeholder */}
          <div className="bg-gray-200 w-full h-16 mt-4 rounded-lg">
            {/* Placeholder for Bar Graph */}
            <div className="h-full flex justify-center items-center">
              <span>Bar Graph (0 - 1)</span>
              {/* You can replace this with an actual bar graph component */}
            </div>
          </div>
        </section>

        {/* Historical Data */}
        <div className="col-span-12 xl:col-span-3 bg-gray-100 p-4 mt-4 h-full">
          <h3 className="text-lg font-semibold mb-4">Historical Data</h3>
          <div className="bg-white shadow rounded-lg p-6 h-full">
            <div className="flex-grow">
              <div>[Graph goes here]</div>
              {/* You can use libraries like Chart.js or D3.js to render graphs */}
            </div>
          </div>
        </div>

        {/* Metrics & Interactions */}
        <aside className="col-span-12 xl:col-span-3 bg-gray-100 p-4 space-y-6">
          <h2 className="font-bold">Security Analyst's Metrics</h2>
          {/* Placeholder for metrics like graphs */}
          <div className="bg-white shadow rounded-lg p-6">
            <div>[Metric 1]</div>
            <div>[Metric 2]</div>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold">User Info (click for updates)</h3>
            <p>[User details]</p>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold">Key Interactions</h3>
            <ul>
              <li>Interaction 1</li>
              <li>Interaction 2</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Task Timelines / Logs</h3>
          <ul>
            <li>Task 1: Completed</li>
            <li>Task 2: Pending</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
