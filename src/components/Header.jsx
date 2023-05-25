export default function Landing() {
  return (
    <>
      <div className="shadow bg-white">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <img src="/logo-no-background.svg" className="w-24" />

          <ul className="flex items-center gap-5">
            <li>
              <a className="hover:text-cyan-500 transition-colors" href="">
                Work
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-500 transition-colors" href="">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-cyan-500 transition-colors" href="">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
