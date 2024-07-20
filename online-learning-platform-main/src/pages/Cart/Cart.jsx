import React from 'react';

const Cart = () => {
    const items = [1000, 2000, 3000];
    const clearCart = () => {
        // Implement the clearCart function here
    };

    return (
        <>

            <div className="bg-white rounded-lg shadow-lg p-4">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

                {items.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty.</p>
                ) : (
                    <div className="flex items-center space-x-2">
                        {/* Render items in the cart here */}
                    </div>
                )}

                {items.length > 0 && (
                    <div className="mt-4">
                        <p className="text-lg font-semibold">Total: $100</p>
                        <button
                            onClick={clearCart}
                            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
