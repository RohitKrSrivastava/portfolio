import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rohit Kumar Srivastava | Engineering Lead (Full Stack)",
  description:
    "Engineering Lead specializing in Full Stack development, AI & Cloud, .NET Core, Angular, React. Based in Singapore with 10+ years of experience.",
  keywords: [
    "Rohit Kumar Srivastava",
    "Engineering Lead",
    "Full Stack Developer",
    "Singapore",
    ".NET Core",
    "GenAI",
    "AWS",
    "Azure",
  ],
  openGraph: {
    title: "Rohit Kumar Srivastava | Engineering Lead",
    description:
      "Full Stack Engineering Lead | AI & Cloud | .NET Core | Angular, React | Singapore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
