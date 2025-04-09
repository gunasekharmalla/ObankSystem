import React, { useState } from "react";
import "./Prescription.css";

const AddPrescription = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    symptoms: "",
    medicines: "",
    dosage: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prescription Submitted:", formData);
    alert("Prescription submitted successfully!");
    setFormData({
      patientName: "",
      symptoms: "",
      medicines: "",
      dosage: "",
      notes: "",
    });
  };

  return (
    <div className="prescription-container">
      <h2 className="prescription-heading">Add Prescription</h2>
      <form className="prescription-form fade-in" onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Symptoms:
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
          ></textarea>
        </label>

        <label>
          Medicines:
          <input
            type="text"
            name="medicines"
            value={formData.medicines}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Dosage:
          <input
            type="text"
            name="dosage"
            value={formData.dosage}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Additional Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit" className="submit-btn">Submit Prescription</button>
      </form>
    </div>
  );
};

export default AddPrescription;
