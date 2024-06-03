import React, { useState, useEffect } from 'react';

const Product = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const offerEndTime = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48 hours from now
        const difference = offerEndTime - now;

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [offerEndTime] = useState(new Date(new Date().getTime() + 48 * 60 * 60 * 1000));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(() => {
                const now = new Date();
                const difference = offerEndTime - now;

                let timeLeft = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                };

                if (difference > 0) {
                    timeLeft = {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / (1000 * 60)) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                    };
                }

                return timeLeft;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [offerEndTime]);

    const { days, hours, minutes, seconds } = timeLeft;

    return (
        <div>
            <h2>Product Offer Ends In:</h2>
            <div className="flex py-3">
                <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-1">
                    {days < 10 ? `0${days}` : days}
                </p>
                <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-3">
                    {hours < 10 ? `0${hours}` : hours}
                </p>
                <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-3">
                    {minutes < 10 ? `0${minutes}` : minutes}
                </p>
                <p className="w-[60px] h-[60px] bg-[#F3F5F7] text-[34px] font-semibold text-center mx-3">
                    {seconds < 10 ? `0${seconds}` : seconds}
                </p>
            </div>
        </div>
    );
};

export default Product;
