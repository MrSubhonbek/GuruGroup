import { Ubuntu } from "next/font/google";
import "./globals.scss";

const ubuntu = Ubuntu({
  weight: "400",
});
export const metadata = {
  title: "GuruGroup",
  description: "Created by Subhonbek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ubuntu.className}>
      <body>{children}</body>
    </html>
  );
}
