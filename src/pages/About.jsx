const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h1 className="text-4xl font-serif font-bold text-dark mb-6">Shash Samarakoon: My Baking Journey</h1>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                            My journey into baking began with a simple curiosity in my own kitchen, quickly escalating into Shash's Bakehouse—a passion-driven endeavor dedicated to the pure joy of creating.
                        </p>
                        <p>
                            I focus intently on custom cakes and specialty treats. I believe the secret is in the ingredients: using only high-quality, locally sourced materials to ensure every cake not only achieves a beautiful presentation but delivers that deep, comforting taste of home. Every layer, every buttercream flourish, is executed with care.
                        </p>
                        <p>
                            My mission is personal: to deliver a little slice of sweetness that makes your celebration truly memorable.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 h-108 bg-secondary rounded-lg overflow-hidden shadow-lg">
                    {/* Placeholder for About Image */}
                    <img
                        src="/shash.jpg"
                        alt="Baker working"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
