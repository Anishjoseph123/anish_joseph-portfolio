import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.service) newErrors.service = "Select a service";

    if (!formData.message) newErrors.message = "Message required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully 🚀");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        timeline: "",
        message: "",
      });
      setErrors({});
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact Me</h1>
          <p className="text-gray-400">
            Let’s build something amazing together
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all duration-300"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all duration-300"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number*"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all duration-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Service */}
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-black border-b border-gray-600 focus:border-white outline-none py-2 transition-all duration-300"
            >
              <option value="">Service Of Interest*</option>
              <option>Web Design</option>
              <option>App Design</option>
              <option>Branding</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service}</p>
            )}
          </div>

          {/* Timeline */}
          <div>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="Timeline"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all duration-300"
            />
          </div>

          {/* Message (full width) */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
              rows="4"
              className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none py-2 transition-all duration-300 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div>
            <p className="text-xs">Fields marked with a * are to be filled mandatorily.</p>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="cursor-pointer px-6 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              Send →
            </button>
          </div>
        </form>
      </div>

      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
}
