export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 text-xs lg:text-sm">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Film Database. All rights reserved.</p>
      </div>
    </footer>
  );
}