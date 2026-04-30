import { motion } from "framer-motion";
import {
  FaCcMastercard,
  FaGlobe,
  FaRegBuilding,
  FaRegFilePdf,
  FaRegUser,
  FaUserTie,
  FaWeight,
} from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";

export default function PortfolioGrid() {
  const projects = [
    {
      id: 1,
      title: "Sanar Constructions",
      description:
        "A modern, responsive real estate platform showcasing Sanar Constructions’ projects, services, and company profile with a clean and intuitive user interface. Built with performance and scalability in mind, it enhances user engagement through optimized loading, seamless navigation, and clear presentation of property details.",
      tech: ["Vite", "React JS", "Tailwind CSS", "Python", "Docker"],
      // image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
      icon: <FaRegBuilding />,
    },
    {
      id: 2,
      title: "Murba Solutions Website",
      description:
        "Redesigned the company website for Murba Solutions Pvt. Ltd., Dubai, UAE, with a focus on modern UI/UX and improved usability. Enhanced performance, responsiveness, and content structure to deliver a seamless user experience across devices while effectively showcasing the company’s services and products.",
      tech: ["React JS", "Bootstrap", "CSS", "Python"],
      // image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb",
      icon: <FaGlobe />,
    },
    {
      id: 3,
      title: "Global 1 Card",
      description:
        "A pre-loaded wallet card designed to manage everyday expenses for students, employees, NRIs, and business professionals. It offers three tiers—Silver, Gold, and Platinum—each providing distinct benefits, rewards, and usage options. Developed by Murba Solutions Pvt. Ltd., the product is implemented for users globally.",
      tech: ["React JS", "Tailwind CSS", "Python"],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <FaCcMastercard />,
    },
    {
      id: 4,
      title: "Global 1 Card Agent Portal",
      description:
        "A web application for agents to manage and maintain records of cardholders (users) efficiently. It includes features for onboarding, KYC verification, and tracking user activity, enabling agents to handle operations smoothly. Built with a focus on usability and data accuracy, it streamlines the overall card management workflow.",
      tech: ["React JS", "Material UI", "CSS", "Python"],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <FaRegUser />,
    },
    {
      id: 5,
      title: "Global 1 Card Supervisor Portal",
      description:
        "A web application designed for supervisors to manage and maintain records of agents involved in the distribution and issuance of Global1Card. The system includes two roles—Agent Supervisor and Lead Supervisor—where Agent Supervisors handle agent records, and Lead Supervisors manage incoming leads and assign them to agents for seamless user onboarding.",
      tech: ["React JS", "Material UI", "CSS", "Python"],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <FaUserTie />,
    },
    {
      id: 6,
      title: "Relieving Letter",
      description:
        "A web application that generates relieving letters for employees who have exited the organization, with document authenticity secured through blockchain verification. It ensures tamper-proof records and instant validation, reducing the risk of fraud. Designed for efficiency, the system streamlines document issuance and provides easy access for both organizations and employees.",
      tech: [
        "React JS",
        "Material UI",
        "CSS",
        "Node JS",
        "AWS",
        "Graph QL",
        "Blokchain",
      ],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <IoDocument />,
    },
    {
      id: 7,
      title: "RadioONE",
      description:
        "A web application for streaming across multiple radio channels, allowing users to explore and enjoy music based on their preferences. It offers a smooth and responsive listening experience with easy navigation between channels. Built with performance in mind, it ensures uninterrupted playback and quick access to a wide variety of stations.",
      tech: ["React JS", "Material UI", "CSS", "Node JS", "AWS", "Graph QL"],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <FaRadio />,
    },
    {
      id: 8,
      title: "Surecreds BMS",
      description:
        "An admin web application to manage and maintain records of users and organizations registered in the Relieving Letter portal, along with handling credit issuance. It provides centralized control with features for user management, verification, and activity tracking. Designed for efficiency and accuracy, it streamlines administrative workflows and ensures smooth operation of the platform.",
      tech: ["React JS", "Material UI", "CSS", "Node JS", "AWS", "Graph QL"],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <FaRegFilePdf />,
    },
    {
      id: 9,
      title: "Weighsoft",
      description:
        "A desktop application designed to record the weight of trucks both with and without load and store the data in a centralized database. Developed for KLNS Enterprises, Bangalore, it supports ERP-related operations by ensuring accurate tracking, reporting, and efficient management of weighing activities.",
      tech: ["React JS", "Material UI", "CSS", "Python"],
      // image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      icon: <FaWeight />,
    },
  ];
  return (
    <div className="bg-black text-white py-20 px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-lg"
          >
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-start gap-4">
                <div className="text-3xl text-white/70 bg-white/10 p-3 rounded-xl">
                  {project.icon}
                </div>

                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
              </div>
              <p className="text-sm text-white/70 mt-2">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
// import { useState } from "react";

// export default function FileUploader() {
//   const [file, setFile] = useState(null);
//   const [fileURL, setFileURL] = useState("");

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];

//     if (selectedFile) {
//       setFile(selectedFile);

//       // Create preview URL
//       const url = URL.createObjectURL(selectedFile);
//       setFileURL(url);
//     }
//   };

//   const openFile = () => {
//     if (fileURL) {
//       window.open(fileURL, "_blank");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
//       <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-gray-900 p-6 rounded-xl shadow-lg">

//         {/* Title */}
//         <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
//           Upload Your File
//         </h2>

//         {/* Upload Box */}
//         <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-white transition">
//           <span className="text-gray-400">Click to upload</span>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </label>

//         {/* File Preview */}
//         {file && (
//           <div className="mt-4 p-3 bg-gray-800 rounded-lg flex items-center justify-between">
//             <button
//               onClick={openFile}
//               className="text-blue-400 hover:underline truncate max-w-[80%]"
//             >
//               {file.name}
//             </button>

//             <span className="text-sm text-gray-400">
//               {(file.size / 1024).toFixed(1)} KB
//             </span>
//           </div>
//         )}

//         {/* Image Preview (optional) */}
//         {file && file.type.startsWith("image/") && (
//           <img
//             src={fileURL}
//             alt="preview"
//             className="mt-4 rounded-lg max-h-60 w-full object-cover"
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// onDragOver={(e) => e.preventDefault()}
// onDrop={(e) => {
//   e.preventDefault();
//   handleFileChange({ target: { files: e.dataTransfer.files } });
// }}
{
  /* <button onClick={() => setFile(null)}>❌</button> */
}
