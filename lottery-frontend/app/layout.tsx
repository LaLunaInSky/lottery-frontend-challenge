import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ProviderContextOfSelectionLottery from "./contexts/providers/context_of_selection_lottery.provider";


const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Resultado das Loterias",
  description: "Lottery Frontend Challenge WebSite",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${montserrat.className} antialiased bg-(--color_07) 
        `}
      >
        <ProviderContextOfSelectionLottery>
          { children }
        </ProviderContextOfSelectionLottery>
      </body>
    </html>
  );
};

export default RootLayout;