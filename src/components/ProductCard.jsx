import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
        >
            <div className="h-64 overflow-hidden">
                <img
                    src={product.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-6">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</span>
                <h3 className="mt-2 text-xl font-serif font-semibold text-dark">{product.title}</h3>
                <p className="mt-2 text-gray-600 text-sm line-clamp-2">{product.description}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
