import React, { useState } from 'react';
import { useCart } from '../../components/Cart/CartContext';
import OrderConfirmationModal from './OrderConfirmationModal';

const CheckoutPage = () => {
    const { cart, total } = useCart();
    const [billingDetails, setBillingDetails] = useState({
        name: '',
        email: '',
        phoneNumber: ''
    });
    const [shippingInfo, setShippingInfo] = useState({
        address: '',
        zipCode: '',
        city: '',
        country: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('e-Money');
    const [eMoneyNumber, setEMoneyNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleCheckout = () => {
        // Open the modal on checkout
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        // Close the modal and optionally reset state or navigate back to home
        setIsModalOpen(false);
        // Reset states or navigate to home
    };

    return (
        <div className="px-4 md:px-10 lg:px-40 py-10 mx-auto">
            <div className="flex justify-between">
                <div className="w-1/2 pr-4">
                    <h2 className="text-2xl mb-4 font-bold">Billing Details</h2>
                    <input
                        type="text"
                        placeholder="Name"
                        value={billingDetails.name}
                        onChange={(e) => setBillingDetails({ ...billingDetails, name: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-2"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={billingDetails.email}
                        onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-2"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={billingDetails.phoneNumber}
                        onChange={(e) => setBillingDetails({ ...billingDetails, phoneNumber: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-4"
                    />
                    <h2 className="text-2xl mb-4 font-bold">Shipping Info</h2>
                    <input
                        type="text"
                        placeholder="Address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        placeholder="ZIP Code"
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-2"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={shippingInfo.country}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-4"
                    />
                    <h2 className="text-2xl mb-4 font-bold">Payment Details</h2>
                    <div className="flex items-center mb-4">
                        <input
                            type="radio"
                            id="eMoney"
                            name="paymentMethod"
                            value="e-Money"
                            checked={paymentMethod === 'e-Money'}
                            onChange={() => handlePaymentMethodChange('e-Money')}
                            className="mr-2"
                        />
                        <label htmlFor="eMoney">e-Money</label>
                    </div>
                    {paymentMethod === 'e-Money' && (
                        <input
                            type="text"
                            placeholder="e-Money Number"
                            value={eMoneyNumber}
                            onChange={(e) => setEMoneyNumber(e.target.value)}
                            className="w-full border rounded-md px-3 py-2 mb-4"
                        />
                    )}
                </div>
                <div className="w-1/2 pl-4 border-l border-gray-300">
                    <h2 className="text-2xl mb-4 font-bold">Order Summary</h2>
                    <ul className="mb-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center py-2 border-b">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                                <div className="flex-1 ml-4">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p>${item.price}</p>
                                    <p>Quantity: {item.quantities}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center py-2 border-t">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t">
                        <span className="text-lg">Shipping Cost</span>
                        <span className="text-lg">$0.00</span> {/* Placeholder for shipping cost */}
                    </div>
                    <div className="flex justify-between items-center py-2 border-t">
                        <span className="text-2xl font-bold">Grand Total</span>
                        <span className="text-2xl">${total.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className="w-full bg-cta text-white py-4 mt-4 hover:bg-lightCta"
                    >
                        Continue & Pay
                    </button>
                </div>
            </div>
            <OrderConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} total={total} />
        </div>
    );
};

export default CheckoutPage;
