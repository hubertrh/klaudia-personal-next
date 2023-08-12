export const metadata = {
  title: 'Klaudia CMS Dashboard',
  description: 'Sanity admin dashboard - Klaudia Rogala-Haracz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
