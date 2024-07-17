// "use client"
// import ContextProvider from "./context/Context";
import ContextProvider from "./context/Context";
import "./globals.css";

export const metadata = {
  title: "Gemini-AI",
  description: "Gemini-AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
        </body>
    </html>
  );
}
