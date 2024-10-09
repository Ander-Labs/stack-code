const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center py-6 border-t">
        <p className="text-sm font-bold">
          &copy; {Year} Stack Code. All rights reserved.
        </p>
      </footer>
    </>
  );
}
