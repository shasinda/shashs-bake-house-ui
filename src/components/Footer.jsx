const Footer = () => {
    return (
        <footer className="bg-secondary py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-dark font-serif">© {new Date().getFullYear()} Shash's Bakehouse. All rights reserved.</p>
                <div className="mt-4 space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61560090504828" className="text-dark hover:text-primary transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
