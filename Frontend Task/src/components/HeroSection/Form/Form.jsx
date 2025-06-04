import React from "react";
import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    language: [],
    email: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const languages = ["English", "Hindi", "Marathi"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "language") {
      setFormData((prev) => ({
        ...prev,
        language: checked
          ? [...prev.language, value]
          : prev.language.filter((lang) => lang !== value),
      }));
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.gender) newErrors.gender = "Gender required";
    if (formData.language.length === 0)
      newErrors.language = "Select at least one language";
    if (!formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.agree) newErrors.agree = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onFormSubmit({ ...formData });

      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        language: [],
        email: "",
        agree: false,
      });
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg font-roboto">
      <h2 className="text-xl font-bold mb-1">Get Started Today!</h2>
      <p className="mb-4 text-sm text-gray-600">
        Fill in your details and take control of your tasks.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="flex gap-2">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              className={`w-full border rounded px-3 py-2 ${
                errors.firstName ? "border-red-500 bg-red-50" : "bg-pink-50"
              }`}
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              className={`w-full border rounded px-3 py-2 ${
                errors.lastName ? "border-red-500 bg-red-50" : "bg-pink-50"
              }`}
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <div className="flex gap-4">
            {["Male", "Female"].map((g) => (
              <label key={g} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                  className="accent-rose-500"
                />
                {g}
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Language</label>
          <div className="space-y-1">
            {languages.map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="language"
                  value={lang}
                  checked={formData.language.includes(lang)}
                  onChange={handleChange}
                  className="accent-rose-500"
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.language && (
            <p className="text-red-500 text-xs mt-1">{errors.language}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            className={`w-full border rounded px-3 py-2 ${
              errors.email ? "border-red-500 bg-red-50" : "bg-pink-50"
            }`}
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="accent-rose-500"
          />
          <span className="text-sm">
            I agree to the{" "}
            <span className="text-rose-500 font-medium">
              terms and conditions
            </span>
          </span>
        </div>
        {errors.agree && (
          <p className="text-red-500 text-xs mt-1">{errors.agree}</p>
        )}

        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded mt-2"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default Form;
