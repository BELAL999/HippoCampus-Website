## this color code for the background i need to consider it with the dark mode #262626
and also this color for border #2E2E2E




<div className="bg-white rounded-lg shadow-md overflow-hidden">
        <button
          onClick={() => setIsOpen2(!isOpen2)}>
          2. Spring Animation {isOpen2 ? '▲' : '▼'}
        </button>
        
        <AnimatePresence>
          {isOpen2 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 24
              }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  <!-- Here will be the answer -->
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
</div>