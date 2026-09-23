import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EVCOMPASS — India's EV Charging Compass",
  description:
    "Find EV chargers, plan smarter routes and discover the charging network across India.",
  keywords: ["EV charging", "EV chargers India", "EV route planner", "EVCOMPASS"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}