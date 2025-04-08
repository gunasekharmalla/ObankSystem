import React, { useState } from "react";

const organsDB = [
  {
    id: 1,
    organ: "Kidney",
    bloodGroup: "A+",
    location: "Hyderabad",
    donorName: "Rahul Kumar",
    hospital: "Apollo Hospitals"
  },
  {
    id: 2,
    organ: "Liver",
    bloodGroup: "B+",
    location: "Chennai",
    donorName: "Divya Sharma",
    hospital: "Global Hospital"
  },
  {
    id: 3,
    organ: "Heart",
    bloodGroup: "O+",
    location: "Hyderabad",
    donorName: "Neha Singh",
    hospital: "Yashoda Hospitals"
  }
  // Add more mock data or fetch from API
];

const RecipientRecommendations = () => {
  const [formData, setFormData] = useState({
    bloodGroup: "",
    organ: "",
    location: ""
  });

  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = organsDB.filter(
      (item) =>
        (formData.bloodGroup === "" || item.bloodGroup === formData.bloodGroup) &&
        (formData.organ === "" || item.organ === formData.organ) &&
        (formData.location === "" || item.location === formData.location)
    );
    setRecommendations(filtered);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Find Recommended Organs</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group (e.g., A+)"
          value={formData.bloodGroup}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <br/>
        <input
          type="text"
          name="organ"
          placeholder="Organ Needed (e.g., Kidney)"
          value={formData.organ}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <br/>
        <input style={{width: "50px",padding:'10px'}}
          type="text"
          name="location"
          placeholder="Location (e.g., Hyderabad)"
          value={formData.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <br/>
        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Get Recommendations
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-3">Matching Donors:</h3>
        {recommendations.length === 0 ? (
          <p>No matching donors found.</p>
        ) : (
          <ul className="space-y-4">
            {recommendations.map((item) => (
              <li
                key={item.id}
                className="p-4 border rounded shadow-sm bg-gray-50"
              >
                <strong>{item.organ}</strong> available in{" "}
                <strong>{item.location}</strong> from donor{" "}
                <strong>{item.donorName}</strong> at{" "}
                <strong>{item.hospital}</strong> (Blood Group:{" "}
                <strong>{item.bloodGroup}</strong>)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipientRecommendations;
