import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser"; // Import EmailJS
import {
  Terminal as TerminalIcon,
  Send,
  Mail,
  Linkedin,
  FileText,
} from "lucide-react";

export const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vt44d9o", // Replace with your EmailJS Service ID
        "template_2quitmu", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "JCnvbRJvlY27NSdDr" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent!", response);
          setFormStatus({
            submitted: true,
            success: true,
            message: "Message sent successfully! I'll get back to you soon.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email", error);
          setFormStatus({
            submitted: true,
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-400 inline-block border-b-2 border-amber-600 pb-2">
            <TerminalIcon className="inline-block mr-2" size={24} />
            ./contact.sh
          </h2>
        </div>

        <div
          ref={ref}
          className="flex flex-col md:flex-row gap-8 transition-all duration-1000"
          style={{
            transform: inView ? "translateY(0)" : "translateY(50px)",
            opacity: inView ? 1 : 0,
          }}
        >
          {/* Contact Form */}
          <div className="md:w-2/3 bg-gray-900 border-2 border-amber-600 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <TerminalIcon className="text-amber-400 mr-2" size={20} />
              <h3 className="text-amber-400 text-xl font-bold">message.sh</h3>
            </div>

            {formStatus.submitted ? (
              <div className="text-center py-8">
                <p
                  className={`text-xl font-bold mb-4 ${
                    formStatus.success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {formStatus.success
                    ? "Message Sent Successfully!"
                    : "Error Sending Message"}
                </p>
                <p className="text-amber-300 mb-6">{formStatus.message}</p>
                <button
                  onClick={() =>
                    setFormStatus({
                      submitted: false,
                      success: false,
                      message: "",
                    })
                  }
                  className="bg-amber-600 text-black px-6 py-2 rounded-md hover:bg-amber-500 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "subject"].map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block text-amber-400 mb-1 capitalize"
                    >
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-amber-600 rounded-md px-4 py-2 text-amber-300 focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-amber-400 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-800 border border-amber-600 rounded-md px-4 py-2 text-amber-300 focus:ring-2 focus:ring-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 text-black px-6 py-2 rounded-md hover:bg-amber-500 transition flex items-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="md:w-1/3 bg-gray-900 border-2 border-amber-600 rounded-lg p-6 shadow-lg">
            <h3 className="text-amber-400 text-xl font-bold mb-4">
              Contact Info
            </h3>
            <p className="text-amber-300 mb-4">
              I'm available for freelance work and full-time roles. Let's talk!
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:deepanshukhorwal7@gmail.com"
                className="flex items-center text-amber-300 hover:text-amber-400"
              >
                <Mail size={18} className="mr-2" />
                deepanshukhorwal7@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/deepanshu-khorwal-3205a130a/"
                target="_blank"
                className="flex items-center text-amber-300 hover:text-amber-400"
              >
                <Linkedin size={18} className="mr-2" />
                LinkedIn Profile
              </a>

              <a
                href="https://drive.google.com/file/d/1l5ldV42BzVcoCvhbmCpZI6BIwtx1W0Kk/view?usp=drivesdk"
                download
                className="flex items-center text-amber-300 hover:text-amber-400"
              >
                <FileText size={18} className="mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
