import Logo from "./Logo"
import Menu from "./Menu"

const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="container text-xl font-bold mx-auto px-4 flex justify-between">
        <Logo />
        <Menu />
      </nav>
    </header>
  )
}

export default Navbar
