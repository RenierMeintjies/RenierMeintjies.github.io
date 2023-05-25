export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center w-full border fixed bottom-0 bg-white">{`Copyright © Renier Meintjies ${year}`}</footer>
  );
}
