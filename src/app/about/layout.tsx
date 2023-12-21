export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="fixed right-0 top-15 z-10 h-screen w-60 bg-gray-800">
        <ul className="text-white px-5 py-5">
          <li className="mr-3 cursor-pointer">Home</li>
          <li className="mr-3 cursor-pointer">About</li>
          <li className="mr-3 cursor-pointer">Profile</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
