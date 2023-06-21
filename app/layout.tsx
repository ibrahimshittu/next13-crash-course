import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Next.js Crash Course",
    description: "A crash course on Next.js",
    keywords: "nextjs, crash course",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="container">{children}</main>
            </body>
        </html>
    );
}
