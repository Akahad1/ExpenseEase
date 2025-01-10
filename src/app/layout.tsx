import { Providers } from "@/component/GobalRedux/Providers/Providers";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {" "}
          <div className="background-gradient">
            {children} <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
}
