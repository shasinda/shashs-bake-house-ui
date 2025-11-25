import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Shash's Bakehouse Logo" className="h-10 w-auto" />
                        <Link to="/" className="text-2xl font-serif font-bold text-primary">
                            Shash's Bakehouse
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-dark hover:text-primary transition-colors">Home</Link>
                        <Link to="/about" className="text-dark hover:text-primary transition-colors">About</Link>
                        <Link to="/portfolio" className="text-dark hover:text-primary transition-colors">Portfolio</Link>
                        <Link to="/contact" className="text-dark hover:text-primary transition-colors">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-dark hover:text-primary focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-dark hover:text-primary">Home</Link>
                        <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 text-dark hover:text-primary">About</Link>
                        <Link to="/portfolio" onClick={toggleMenu} className="block px-3 py-2 text-dark hover:text-primary">Portfolio</Link>
                        <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 text-dark hover:text-primary">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
