import React, { useState, useEffect } from 'react';
import { useCart } from '../../components/Cart/CartContext';
import OrderConfirmationModal from './OrderConfirmationModal';
import '../../custom.css';

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
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!billingDetails.name && isFormValid) newErrors.name = 'Name is required';
        if (!billingDetails.email && isFormValid) {
            newErrors.email = 'Email is required';
        }
        if (!billingDetails.phoneNumber && isFormValid) newErrors.phoneNumber = 'Phone number is required';

        if (!shippingInfo.address && isFormValid) newErrors.address = 'Address is required';
        if (!shippingInfo.zipCode && isFormValid) newErrors.zipCode = 'ZIP code is required';
        if (!shippingInfo.city && isFormValid) newErrors.city = 'City is required';
        if (!shippingInfo.country && isFormValid) newErrors.country = 'Country is required';

        if (paymentMethod === 'e-Money' && eMoneyNumber) {

        }

        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };


    useEffect(() => {
        validateForm();
    }, [billingDetails, paymentMethod, eMoneyNumber]);

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    const handleCheckout = () => {
        if (isFormValid) {
            setIsModalOpen(true);
        } else {
            validateForm();
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="px-4 md:px-20 lg:px-40 py-4 mx-auto bg-darkWhite">
            <div className="flex justify-start items-center py-8">
                <button
                    onClick={() => navigate(-3)}
                    className="text-black text-sm py-2 border-none hover:underline"
                >
                    Go Back
                </button>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-x-8">
                <div className="lg:w-2/3 lg:pr-4 bg-white p-8 rounded-xl">
                    <h2 className="text-l text-cta mb-4 font-normal">BILLING DETAILS</h2>

                    <div className="flex flex-col md:flex-row lg:flex-row md:space-x-4 lg:space-x-4 mb-4">
                        <div className="flex-1 w-full">
                            <label htmlFor="name" className="block mb-1 text-sm">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                value={billingDetails.name}
                                onChange={(e) => setBillingDetails({ ...billingDetails, name: e.target.value })}
                                className="w-full border rounded-md px-3 py-2 mb-2"
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                        </div>
                        <div className="flex-1">
                            <label htmlFor="email" className="block mb-1 text-sm">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                value={billingDetails.email}
                                onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
                                className="w-full border rounded-md px-3 py-2 mb-2"
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </div>
                    </div>

                    <label htmlFor="phoneNumber" className="block mb-1 text-sm">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        placeholder="Phone Number"
                        value={billingDetails.phoneNumber}
                        onChange={(e) => setBillingDetails({ ...billingDetails, phoneNumber: e.target.value })}
                        className="w-1/2 border rounded-md px-3 py-2 mb-4"
                    />
                    {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}

                    <h2 className="text-l text-cta mb-4 font-normal text-sm">SHIPPING INFO</h2>

                    <input
                        type="text"
                        id="address"
                        placeholder="Address"
                        value={shippingInfo.address}
                        onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                        className="w-full border rounded-md px-3 py-2 mb-2"
                    />
                    {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}

                    <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
                        <div className="flex-1">
                            <label htmlFor="zipCode" className="block mb-1 text-sm">ZIP Code</label>
                            <input
                                type="text"
                                id="zipCode"
                                placeholder="ZIP Code"
                                value={shippingInfo.zipCode}
                                onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                                className="w-full border rounded-md px-3 py-2 mb-2"
                            />
                            {errors.zipCode && <span className="text-red-500 text-sm">{errors.zipCode}</span>}
                        </div>
                        <div className="flex-1">
                            <label htmlFor="city" className="block mb-1 text-sm">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="City"
                                value={shippingInfo.city}
                                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                                className="w-full border rounded-md px-3 py-2 mb-2"
                            />
                            {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:space-x-4 mb-4">
                        <div className="flex-1">
                            <label htmlFor="country" className="block mb-1 text-sm">Country</label>
                            <input
                                type="text"
                                id="country"
                                placeholder="Country"
                                value={shippingInfo.country}
                                onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                                className="w-1/2 border rounded-md px-3 py-2 mb-2"
                            />
                            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
                        </div>
                    </div>

                    <h2 className="text-l text-cta mb-4 font-normal">PAYMENT DETAILS</h2>
                    <div className="flex items-center mb-4 gap-2">
                        <input
                            type="radio"
                            id="eMoney"
                            name="paymentMethod"
                            value="e-Money"
                            checked={paymentMethod === 'e-Money'}
                            onChange={() => handlePaymentMethodChange('e-Money')}
                            className=""
                        />
                        <label htmlFor="eMoney" className="pr-4">e-Money</label>
                        <input
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="Cash On Delivery"
                            checked={paymentMethod === 'Cash On Delivery'}
                            onChange={() => handlePaymentMethodChange('Cash On Delivery')}
                            className=""
                        />
                        <label htmlFor="cash">Cash On Delivery</label>
                    </div>
                    {paymentMethod === 'e-Money' && (
                        <>
                            <input
                                type="text"
                                placeholder="e-Money Number"
                                value={eMoneyNumber}
                                onChange={(e) => setEMoneyNumber(e.target.value)}
                                className="w-full border rounded-md px-3 py-2 mb-4"
                            />
                            {errors.eMoneyNumber && <span className="text-red-500 text-sm">{errors.eMoneyNumber}</span>}
                        </>
                    )}
                </div>
                <div className="lg:w-2/5 lg:pl-4 mt-8 h-fit lg:mt-0 bg-white p-8 rounded-xl">
                    <h2 className="text-xl mb-4 font-semibold">SUMMARY</h2>
                    <ul className="mb-4">
                        {cart.map(item => (
                            <li key={item.id} className="flex justify-between items-center py-4">
                                <div className="bg-darkWhite p-2 rounded">
                                    <img src={item.image} alt={item.title} className="w-10 h-10 object-cover"/>
                                </div>
                                <div className="flex-1 ml-4">
                                    <h3 className="font-normal">{item.title}</h3>
                                    <p className="text-footerText">${item.price}</p>
                                </div>
                                <div>
                                    <p className="text-footerText">x{item.quantities}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-footerText font-normal">TOTAL</span>
                        <span className="text-sm text-footerText">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-footerText">SHIPPING</span>
                        <span className="text-sm text-footerText">$0.00</span> {/* Placeholder for shipping cost */}
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-l text-footerText font-semibold">GRAND TOTAL</span>
                        <span className="text-l text-footerText">${total.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className={`w-full py-2 mt-4 ${isFormValid ? 'bg-cta text-white hover:bg-lightCta' : 'bg-gray-300 text-gray-600 cursor-not-allowed'}`}
                    >
                        Continue & Pay
                    </button>
                </div>
            </div>
            <OrderConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} total={total}/>
        </div>
    );
};

export default CheckoutPage;
