import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ menuData }) => {
  console.log('Card-->', menuData);

  
  const isLoading = !menuData || Object.keys(menuData).length === 0;

  
  const allItems = menuData || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 animate-spin"></div>
        <style jsx>{`
          .loader {
            border-top-color: #F2C94C;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {allItems.map((item) => (
        <motion.div
          key={`${item.category}-${item.id}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 h-auto md:h-48 hover:scale-[1.02] mb-4"
        >
          <div className="w-full md:w-1/3 h-48 md:h-auto">
            <img
              src={item.photo || 'default-image.jpg'}
              alt={item.name}
              className="object-cover w-full h-full md:rounded-l-xl"
            />
          </div>

          <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-accent mb-1">{item.description}</p>
              <p className="text-xs text-gray-400 italic mb-2">{item.category}</p>

              {/* Price Rendering */}
              {item.prices ? (
                <div className="text-sm text-accent space-y-1 pb-4">
                  {item.prices.small && (
                    <p>
                      <span className="font-medium">Small:</span> ৳{item.prices.small}
                    </p>
                  )}
                  {item.prices.medium && (
                    <p>
                      <span className="font-medium">Medium:</span> ৳{item.prices.medium}
                    </p>
                  )}
                  {item.prices.large && (
                    <p>
                      <span className="font-medium">Large:</span> ৳{item.prices.large}
                    </p>
                  )}
                  {item.prices.single && (
                    <p>
                      <span className="font-medium">Price:</span> ৳{item.prices.single}
                    </p>
                  )}
                </div>
              ) : (
                <p>
                  <span className="font-medium">Price:</span> ৳{item.price}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Card;
