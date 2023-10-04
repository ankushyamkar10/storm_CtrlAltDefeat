import React, { useState } from "react";

const ReportWebsite = () => {
  const [url, setUrl] = useState("");
  const [reason, setReason] = useState("");
  const [categories, setCategories] = useState([]);
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleCategoriesChange = (event) => {
    const selectedCategories = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setCategories(selectedCategories);
  };

  const handleSubmit = () => {
    // Do something with the submitted data
    console.log("URL:", url);
    console.log("Reason:", reason);
    console.log("Categories:", categories);
    console.log("Additional Notes:", additionalNotes);
    // You can add your logic to send this data wherever it needs to go
    setAdditionalNotes("");
    setUrl("");
    setReason("");
    setCategories([]);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 my-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">
        Report Malicious/Phishing Website
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="url"
        >
          Website URL
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="reason"
        >
          Why is it being flagged?
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="categories"
        >
          Categories
        </label>
        <select
          multiple
          className="block w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="categories"
          onChange={handleCategoriesChange}
        >
          <option value="phishing">Phishing</option>
          <option value="malware">Malware</option>
          <option value="fraud">Fraud</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="additionalNotes"
        >
          Additional Notes
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="additionalNotes"
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />
      </div>

      <button
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ReportWebsite;
