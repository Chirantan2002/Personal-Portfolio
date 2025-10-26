import React, { useState } from "react";
import MemojiSmile from "@/assets/images/memoji-smile.png";
import { motion } from "framer-motion";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import emailjs from "emailjs-com";
import { TapeAnimationComponent } from "@/components/TapeAnimation";
import OrbitSystem from "./OrbitSystem";

const SERVICE_ID = "service_g6reot7";
const TEMPLATE_ID = "template_asen425";
const PUBLIC_KEY = "ql3gkIjNulyTMrJDw";

const MainContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 5000); // <-- Reset after 5 seconds
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const words = ["Contact Now", "Contact Now", "Contact Now"];

  return (
    <div className="container mx-auto w-full">
      <div className="md:px-12">
        <div className="flex md:flex-row flex-col items-center justify-center rounded-2xl overflow-clip">
          {/* <div className="text-black absolute text-5xl font-black uppercase">Hello</div> */}
          <div className="hidden md:block">
            {/* <motion.img
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.3}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              src={MemojiSmile.src}
              alt="Memoji"
              className="w-full max-w-[500px] h-auto drop-shadow-2xl drop-shadow-indigo-500/50 cursor:grab"
            /> */}
            <OrbitSystem />
            <div className="overflow-clip">
              <div className="w-[700px]">
                <TapeAnimationComponent words={words} />
              </div>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="w-full text-slate-500 rounded-2xl p-6 md:p-10 backdrop-blur-md border-2 border-pink-400/20 inset-1 bg-gradient-to-tr from-emerald-500 to-sky-500 shadow-lg md:mr-0">
              <h2 className="text-2xl font-serif mb-6 text-center text-gray-900">
                Get in Touch
              </h2>
              {submitted ? (
                <div className="text-center text-emerald-700 font-semibold py-10">
                  Thank you for reaching out!
                  <br />I will get back to you soon.
                </div>
              ) : (
                <form
                  className="flex flex-col gap-5 text-left"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-slate-900"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-slate-900"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 text-sm font-medium text-slate-900"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition min-h-[120px] resize-y"
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-black hover:bg-black/80 text-white  font-semibold text-lg shadow-md cursor-pointer flex items-center justify-center transition duration-500 ease-in-out"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <ArrowUpRightIcon className="inline-block ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContactSection;
