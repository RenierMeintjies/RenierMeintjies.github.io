export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center border-t bg-white p-1">{`Copyright © Renier Meintjies ${year}`}</footer>
  );
}
