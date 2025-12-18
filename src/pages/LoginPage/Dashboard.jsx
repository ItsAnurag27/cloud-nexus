import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchProfile, setSearchProfile] = useState("");
  const [scoreFilter, setScoreFilter] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { token, logout } = useAuth();

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URI}/applications`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          setCandidates(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching candidates:", error);
          setError("Failed to load candidates.");
          setLoading(false);
        });
    } else {
      setError("Authorization token is missing.");
      setLoading(false);
    }
  }, [token]);

  const handleLogout = () => {
    if (token) {
      axios
        .post(
          `${import.meta.env.VITE_BASE_URI}/auth/logout`,
          {},
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then(() => {
          logout();

          navigate("/login", { replace: true });

          setTimeout(() => {
            window.location.href = "/login";
          }, 100);
        })
        .catch((error) => {
          console.error("Error during logout:", error);
          setError("Failed to log out.");
        });
    } else {
      setError("No authorization token found.");
    }
  };

  const handleNavigation = (id) => {
    navigate(`/ats/${id}`);
  };

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.jobTitle.toLowerCase().includes(searchProfile.toLowerCase()) ||
      candidate.fullName.toLowerCase().includes(searchProfile.toLowerCase());
    const matchesScore =
      !scoreFilter || candidate.atsScore >= parseInt(scoreFilter);
    return matchesSearch && matchesScore;
  });

  return (
    <div className="flex bg-black">
      {/* Sidebar */}
      <aside className="w-80 bg-black shadow-md p-6 fixed top-0 left-0 h-full">
        <h2 className="text-lg font-bold !text-5xl text-white">
          ATS Dashboard
        </h2>
        <nav className="mt-6 flex flex-col gap-2">
          <button
            className={`p-3 w-full text-left rounded ${
              location.pathname === "/dashboard"
                ? "bg-white text-black font-bold"
                : "text-white bg-transparent"
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
            onClick={() => navigate("/create-job")}
          >
            ➕ Create Employment
          </button>
        </nav>
        <div className="absolute bottom-6 left-6">
          <button
            className="p-3 text-red-600 hover:bg-red-600 hover:text-white rounded transition-colors duration-200"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto ml-80">
        {/* <div className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Search job profiles or candidates..."
            className="p-2 border rounded w-full"
            value={searchProfile}
            onChange={(e) => setSearchProfile(e.target.value)}
          />
          <input
            type="number"
            placeholder="Min ATS Score..."
            className="p-2 border rounded"
            value={scoreFilter}
            onChange={(e) => setScoreFilter(e.target.value)}
          />
        </div> */}

        {loading && <p>Loading candidates...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2   gap-6">
          {filteredCandidates.map((candidate) => (
            <div
              key={candidate._id}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
              onClick={() => handleNavigation(candidate._id)}
            >
              <h3 className="text-lg font-bold !text-black">
                {candidate.fullName}
              </h3>
              <p className="text-gray-700">{candidate.jobTitle}</p>
              <div className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full w-fit mt-2">
                {candidate.atsScore}%
              </div>
              <h4 className="font-semibold mt-4 !text-gray-500">Skills</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {candidate.parsedSkills[0].technical.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
