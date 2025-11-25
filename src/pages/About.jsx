const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h1 className="text-4xl font-serif font-bold text-dark mb-6">Our Story</h1>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            Shash's Bakehouse started as a small kitchen experiment and grew into a passion project dedicated to bringing joy through baking.
                        </p>
                        <p>
                            We specialize in using high-quality, locally sourced ingredients to create treats that not only look beautiful but taste like home.
                            Whether it's a celebration cake or a simple loaf of sourdough, we pour our heart into every bake.
                        </p>
                        <p>
                            Our mission is simple: to make the world a little sweeter, one bite at a time.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 h-96 bg-secondary rounded-lg overflow-hidden shadow-lg">
                    {/* Placeholder for About Image */}
                    <img
                        src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop"
                        alt="Baker working"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
