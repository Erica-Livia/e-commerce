import React, { useState } from 'react';
import { useCart } from '../../components/Cart/CartContext.jsx';

const CheckoutPage = () => {
    const { cart, total } = useCart(); // Assuming you have total and cart details available from CartContext
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

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleCheckout = () => {
        // For demo purposes, alerting the user with order details
        alert(`Thank you for your order!\nTotal: $${total.toFixed(2)}`);
        // Reset state or navigate back to home
    };

    return (
        <div className="px-4 md:px-10 lg:px-40 py-10 mx-auto">
            <div className="flex justify-between">
                {/* Billing Details Section */}
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
                    {/* Shipping Info Section */}
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
                    {/* Payment Details Section */}
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
                {/* Order Summary Section */}
                <div className="w-1/2 pl-4 border-l border-gray-300">
                    <h2 className="text-2xl mb-4 font-bold">Order Summary</h2>
                    <ul className="mb-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center py-2 border-b">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                                <div className="flex-1 ml-4">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p>${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
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
        </div>
    );
};

export default CheckoutPage;
