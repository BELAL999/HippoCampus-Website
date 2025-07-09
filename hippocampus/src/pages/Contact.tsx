import { useState } from "react";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="container pt-28">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black dark:text-p4 mb-4">Get in Touch</h1>
        <p className="text-lg text-p3 dark:text-[#94ABC7]">
          We're here to help. If you have any questions, please don't hesitate to reach out.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Column 1: Form */}
        <div className="bg-p4 dark:bg-[#21262B] p-8 rounded-2xl shadow-lg border-2 border-[#DBE0E5] dark:border-dark-Cs">
          <h2 className="text-2xl font-bold dark:text-p4 mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2">Your Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-p4" placeholder="e.g., John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-p4" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2">Subject</label>
              <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-p4" placeholder="e.g., Course Inquiry" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-p3 dark:text-[#94ABC7] mb-2">Message</label>
              <textarea name="message" id="message" value={formData.message} onChange={handleChange} required rows={5} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-p4" placeholder="Your message here..."></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full justify-center rounded-md bg-p1 px-3 py-3 text-sm font-semibold leading-6 text-p2 shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Column 2: Contact Info */}
        <div className="bg-p4 dark:bg-[#21262B] p-8 rounded-2xl shadow-lg border-2 border-[#DBE0E5] dark:border-dark-Cs">
          <h2 className="text-2xl font-bold dark:text-p4 mb-6">Contact Information</h2>
          <div className="flex flex-col gap-6 text-p3 dark:text-[#94ABC7]">
            <div className="flex items-center gap-4">
              <MdOutlineEmail className="text-2xl text-p1" />
              <div>
                <h4 className="font-semibold text-p2 dark:text-p4">Email</h4>
                <a href="mailto:support@hippocampus.com" className="hover:underline">support@hippocampus.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlinePhone className="text-2xl text-p1" />
              <div>
                <h4 className="font-semibold text-p2 dark:text-p4">Phone</h4>
                <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineLocationOn className="text-2xl text-p1" />
              <div>
                <h4 className="font-semibold text-p2 dark:text-p4">Address</h4>
                <p>123 Academy Lane, Medville, MD 54321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
