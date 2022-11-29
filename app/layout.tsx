import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/bootstrap-dark.css";
import "../styles/fontawesome-free-6.2.1-web/css/fontawesome.min.css";
import "../styles/fontawesome-free-6.2.1-web/css/solid.min.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@forevolve/bootstrap-dark@2.0.0/dist/css/bootstrap-dark-prefers-light.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css" integrity="sha512-q3eWabyZPc1XTCmF+8/LuE1ozpg5xxn7iO89yfSOd5/oKvyqLngoNGsx8jq92Y8eXJ/IRxQbEC+FGSYxtk2oiw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      </head>
      <body className="container">
        <Navbar />
        {children}
      </body>
    </html>
  );
}