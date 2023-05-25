export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 text-center w-full border">{`Copyright © Renier Meintjies ${year}`}</footer>
  );
}
