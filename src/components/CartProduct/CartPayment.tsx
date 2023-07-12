import { StateProps, StoreProduct } from "@/type";
import React, { useEffect, useState } from "react";
import { SiMediamarkt } from "react-icons/si";
import { useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

const CartPayment = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProduct) => {
      return (amt += +item.price * +item.quantity);
    });
    setTotalPrice(amt);
  }, [productData]);

  // stripe payment

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: productData, email: session?.user?.email }),
    });

    const checkoutSession = await response.json();

    // redirecting customer to payment checkout

    const result: any = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
    if (result.error) {
      alert(result?.error?.message);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-400 rounded-full p-1 h-6 w-6 text-sm flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order, qualifies for FREE Shipping by choosing this option at
          checkout. See details...
        </p>
      </div>

      <p className="flex items-center justify-between px-2 font-semibold">
        Total : <span className="font-bold text-xl">${totalPrice}</span>
      </p>
      <div className="flex flex-col items-center">
        <button
          disabled={userInfo?.name ? false : true}
          onClick={handleCheckout}
          className={`w-full h-10 text-sm font-semibold bg-amazon_blue ${
            userInfo?.name
              ? "hover:bg-amazon_yellow hover:text-amazon_blue"
              : "bg-opacity-50 cursor-not-allowed"
          }  text-white rounded-lg transition-all duration-300 ease-in-out`}
        >
          Procees to Buy
        </button>
        {!session && (
          <p
            onClick={() => signIn()}
            className="text-sm cursor-pointer text-red-500 font-semibold animate-bounce mt-3"
          >
            Please login to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default CartPayment;
