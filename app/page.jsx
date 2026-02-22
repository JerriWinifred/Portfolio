"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6">

      <section className="h-screen flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-16">

  <div>
    <p className="text-red-600 tracking-widest mb-4">AI & DATA SCIENCE</p>

    <h1 className="text-6xl font-extrabold mb-6">
      Jerri Winifred<span className="text-red-600">.</span>
    </h1>

    <p className="text-gray-400 max-w-xl mb-8">
      Artificial Intelligence & Data Science undergraduate passionate about
      machine learning, data analysis, and real-world problem solving.
    </p>

    <div className="flex gap-4">
      <a href="#projects" className="bg-red-600 px-6 py-3 rounded-xl">
        View Projects
      </a>
      <a href="#contact" className="border border-red-600 px-6 py-3 rounded-xl">
        Contact Me
      </a>
    </div>
  </div>

  <img
    src="/jerri.jpg"
    alt="Jerri Winifred"
    className="w-64 h-64 rounded-full object-cover border-4 border-red-600 shadow-lg shadow-red-600/40"
  />

</section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto py-24">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Programming", "Python, R, SQL"],
            ["AI & ML", "ML Algorithms, CNN, NLP"],
            ["Data Science", "EDA, Visualization"],
            ["Tools", "TensorFlow, Scikit-learn, Power BI"]
          ].map(([title, items], i) => (
            <div key={i} className="border border-red-900 p-6 rounded-2xl">
              <h3 className="text-red-600 mb-2 font-semibold">{title}</h3>
              <p className="text-gray-400 text-sm">{items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto py-24">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="space-y-8">
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-semibold">Character Recognition System</h3>
            <p className="text-gray-400">
              CNN-based OCR using MNIST and custom font datasets.
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-semibold">Password Strength Checker</h3>
            <p className="text-gray-400">
              Python program validating password security parameters.
            </p>
          </div>

          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-semibold">Expense Tracker</h3>
            <p className="text-gray-400">
              Python expense tracking & visualization tool.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-6xl mx-auto py-24">
        <h2 className="text-4xl font-bold mb-6">
          Contact <span className="text-red-600">Me</span>
        </h2>

        <p className="text-gray-400 mb-4">
          📧 jerriwinifred10@gmail.com
        </p>

        <div className="flex gap-6">
          <a className="text-red-600" href="https://www.linkedin.com/in/jerri-winifred-307003279/" target="_blank">
            LinkedIn
          </a>
          <a className="text-red-600" href="https://github.com/JerriWinifred" target="_blank">
            GitHub
          </a>
          <a className="text-red-600" href="/Resume_Jerri_Winifred.pdf" target="_blank">
            Resume
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-500 py-6 border-t border-red-900">
        © 2026 Jerri Winifred
      </footer>

    </main>
  );
}
