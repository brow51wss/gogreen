import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GGPEP Co. — Go Green PH Environmental",
  description:
    "GGPEP Co. engineers, imports and deploys heavy wastewater treatment, drinking water and thermal waste systems across the Philippines — then guarantees they pass DENR inspection.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className={`${archivo.className} min-h-full overflow-x-hidden bg-ink text-fg`}>
        {children}
      </body>
    </html>
  );
}
