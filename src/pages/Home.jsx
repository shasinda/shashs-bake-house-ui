import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center bg-secondary overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                {/* Placeholder for Hero Image - ideally this would be a real image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg"
                    >
                        Artisan Baking with Love
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/90 mb-8 font-light"
                    >
                        Handcrafted pastries, cakes, and breads made fresh daily.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            to="/portfolio"
                            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-lg"
                        >
                            View Our Creations
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-6">Welcome to Shash's Bakehouse</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We believe in the magic of simple ingredients coming together to create something extraordinary.
                    From flaky croissants to rich chocolate cakes, every item is baked with passion and precision.
                </p>
            </section>
        </div>
    );
};

export default Home;
