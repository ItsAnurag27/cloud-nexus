import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CreateJob = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path
  const [formData, setFormData] = useState({
    position: "",
    location: "",
    experience: "",
    salary: "",
    deadline: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const positions = [
    "Software Engineer",
    "Web Developer",
    "Data Scientist",
    "DevOps Engineer",
    "Product Manager",
    "UI/UX Designer",
    "Marketing Manager",
    "Sales Representative",
    "HR Manager",
  ];

  const locations = ["Bengaluru", "Bhopal"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URI}/create-job`,
        formData
      );

      if (response.status === 201) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("Failed to create job. Please try again.");
      console.error("Error creating job application:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-black">
      {/* Sidebar - Fixed on the Left */}
      <aside className="w-80 bg-black shadow-md p-6 fixed top-0 left-0 h-full">
        <h2 className="text-lg font-bold !text-5xl text-white">
          ATS Dashboard
        </h2>
        <nav className="mt-6 flex flex-col gap-2">
          <button
            className={`p-3 w-full text-left rounded text-white ${
              location.pathname === "/dashboard"
                ? "bg-gray-800"
                : "bg-transparent"
            }`}
            onClick={() => navigate("/dashboard")}
          >
            👥 Candidates
          </button>
          <button
            className={`p-3 w-full text-left rounded ${
              location.pathname === "/create-job"
                ? "bg-white text-black font-bold"
                : "text-white bg-transparent"
            }`}
          >
            ➕ Create Employment
          </button>
        </nav>
        <div className="absolute bottom-6 left-6">
          <button className="p-3 text-red-600">🚪 Logout</button>
        </div>
      </aside>

      {/* Main Content - Job Form */}
      <main className="flex-1 p-8 overflow-auto ml-80">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-lg !text-black">Post a New Job</h2>
          {error && <p className="text-red-600">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Position Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Position
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a position</option>
                {positions.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Location Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Job Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Required Experience (years)
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                min="0"
                step="1"
              />
            </div>

            {/* Salary */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="e.g., 2,50,000 "
              />
            </div>

            {/* Deadline */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                placeholder="Enter detailed job description..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              disabled={loading}
            >
              {loading ? "Posting Job..." : "Post Job"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateJob;
