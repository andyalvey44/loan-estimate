import logo from "@/assets/hero.png";

export function LogoBar() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto flex items-center gap-2 px-6 py-4">
        <img src={logo} alt="" className="h-6 w-6" />
        <span className="text-lg font-semibold">Loan Estimate</span>
      </div>
    </header>
  );
}
