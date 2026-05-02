import "./globals.css";

export const metadata = {
  title: "MyLoanPreview | Loan Calculator",
  description: "Preview your loan before you commit."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
