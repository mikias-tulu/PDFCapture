export default function Footer() {
    return (
      <footer className="bg-gray-200 py-4 px-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} PDF Converter. All rights reserved.
        </div>
      </footer>
    );
  }
  