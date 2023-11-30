/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "way-image":
          "url('https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=600')",
        "sharks-image":
          "url('https://media.istockphoto.com/id/1415862623/photo/outdoor-adventures-in-norway-hammock-relax-in-nature.jpg?s=2048x2048&w=is&k=20&c=hOfoQzfgHa2ZZNtspv-XSo7GwmfaZu7XqhmQd1gIjOU=')",
      },
    },
  },
  plugins: [],
};
