import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      console.log("File submitted:", file);
      // Handle upload logic here
    }
  };

  return (
    <div className="bg-[#1A1233] min-h-screen text-white p-6">
      <h2 className="text-lg font-semibold mb-4">File Upload</h2>

      <div className="bg-[#3E2B5B] rounded-lg border border-white/30 overflow-hidden">
        <div className="p-4 text-sm font-medium border-b border-white/20 flex justify-between items-center">
          Upload your resume or a video introducing yourself.
          <span className="text-xl">⌄</span>
        </div>

        <div
          className="p-10 flex flex-col justify-center items-center border border-dashed border-white/30 m-10 rounded-lg text-center"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <FiUploadCloud size={48} className="text-white/70 mb-4" />
          <p className="text-sm font-semibold text-white/90">
            Drag & drop files or{" "}
            <label htmlFor="fileInput" className="underline cursor-pointer">
              browse
            </label>
          </p>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".jpeg,.png,.gif,.mp4,.pdf,.psd,.ai,.doc,.docx,.ppt,.pptx"
          />
          <p className="text-[10px] mt-2 text-white/60">
            <span className="text-red-500">*</span> Supported files: JPEG, PNG,
            GIF, MP4, PDF, PSD, AI, Word, PPT
          </p>
        </div>

        <div className="flex justify-center pb-10">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
