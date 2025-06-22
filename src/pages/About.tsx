import React from "react";

export default function About() {
  return (
    <section className="max-w-3xl mx-auto mt-10 text-center">
      <img
        src="/profile.jpg"
        alt="Your profile"
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-3xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-700 mb-6">
        I'm a passionate developer focused on building clean, efficient, and user-friendly web apps. I specialize in React, JavaScript, and full-stack development.
      </p>
      <div className="space-y-2 text-gray-600">
        <p><strong>Email:</strong> you@example.com</p>
        <p><strong>GitHub:</strong> github.com/yourusername</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/yourusername</p>
      </div>
    </section>
  );
}