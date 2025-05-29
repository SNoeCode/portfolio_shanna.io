import React from "react";

const ComingSoonModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl w-80 text-center">
        <h3 className="text-xl font-bold mb-4">Coming Soon!</h3>
        <p className="mb-6">This project will be deployed shortly. Stay tuned!</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ComingSoonModal;