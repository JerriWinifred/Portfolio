import "./globals.css";

export const metadata = {
  title: "Jerri Winifred | AI & Data Science",
  description: "AI & Data Science Portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
