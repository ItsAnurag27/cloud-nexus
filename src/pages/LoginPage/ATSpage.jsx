import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const ATSpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_BASE_URI}/application/${id}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          setCandidate(response.data.application);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching candidate:", error);
          setError("Failed to load candidate details.");
          setLoading(false);
        });
    } else {
      setError("Authorization token is missing.");
      setLoading(false);
    }
  }, [id, token]);

  if (loading) return <p>Loading candidate details...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  const handleLogout = () => {
    if (token) {
      axios
        .post(
          `${import.meta.env.VITE_BASE_URI}/auth/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          localStorage.removeItem("Authorization");

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
  return (
    <>
      {" "}
      {!candidate ? (
        <p className="text-gray-600 text-center">Loading candidate data...</p>
      ) : (
        <div className="flex bg-white-100 min-h-screen">
          <main className="    overflow-auto  mx-auto p-8">
            <div className="max-w-5xl mx-auto flex flex-col gap-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                  {candidate.fullName}
                </h1>
                <p className="text-lg text-black-600">
                  Application for {candidate.jobTitle}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <h2 className="text-xl font-semibold !text-gray-500">
                  Overall ATS Score
                </h2>
                <div className="flex justify-center items-center mt-4 relative">
                  <svg className="w-32 h-32" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="transparent"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="transparent"
                      stroke="#2563EB"
                      strokeWidth="8"
                      strokeDasharray={`${candidate.atsScore * 2.64}, 264`}
                      strokeLinecap="round"
                      className="-rotate-90 origin-center"
                    />
                  </svg>
                  <div className="absolute text-2xl font-bold !text-gray-500">
                    {candidate.atsScore}%
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {["Skills Match", "Experience Match", "Education Match"].map(
                  (title, index) => (
                    <div
                      key={index}
                      className="rounded-lg shadow p-6 flex items-center gap-4"
                    >
                      <span className="text-2xl !bg-white rounded-full p-3">
                        {["✓", "💼", "🎓"][index]}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {title}
                        </h3>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 transition-all"
                            style={{
                              width: `${
                                [
                                  candidate.skillsMatch,
                                  candidate.experienceMatch,
                                  candidate.educationMatch,
                                ][index]
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-black-600">
                          {
                            [
                              candidate.skillsMatch,
                              candidate.experienceMatch,
                              candidate.educationMatch,
                            ][index]
                          }
                          %
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold !text-gray-500">
                  Skills Analysis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h3 className="font-semibold !text-gray-900">
                      Technical Skills
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {candidate.parsedSkills[0].technical.map(
                        (skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold !text-gray-900">
                      Soft Skills
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {candidate?.parsedSkills[0]?.soft.length > 0 ? (
                        candidate?.parsedSkills?.soft.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))
                      ) : (
                        <p className="text-gray-500">No soft skills listed.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="text-xl font-semibold !text-gray-900">
                    ATS Summary
                  </h4>
                  <p className="text-gray-700 mt-2">{candidate.atsSummary}</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h4 className="text-xl font-semibold !text-gray-900">
                    Recommendations
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    {candidate.recommendations.map((recommendation, index) => (
                      <li key={index}>{recommendation}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default ATSpage;
