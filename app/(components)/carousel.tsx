import Image from 'next/image'
import { useState, useRef, TouchEvent } from "react"

export interface CarouselImage {
    src:string;
    alt:string;
    id:string|number;
}

interface CarouselProps {
    images: CarouselImage[];
}

export default function Carousel({ images }:CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isSwiping, setIsSwiping] = useState<boolean>(false);
    const [touchStartX, setTouchStartX] = useState<number>(0);
    const touchStartTime = useRef<number>(0);

    const handleNextSlide = () => {
        setCurrentSlide((prev) =>
            prev == images.length - 1 ? 0 : prev+1
        );
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) =>
            prev == 0 ? images.length - 1 : prev - 1
        );
    };
    
    const handleTouchStart = (e:TouchEvent<HTMLDivElement>) => {
        setIsSwiping(true);
        setTouchStartX(e.touches[0].clientX);
        touchStartTime.current = Date.now();
    }

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if(!isSwiping) return;
        const touchCurrentX = e.touches[0].clientX;
        const deltaX = touchCurrentX - touchStartX;
    }

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if(!isSwiping) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        const deltaTime = Date.now() - touchStartTime.current;

        const velocity = Math.abs(deltaX)/deltaTime;

        const minSwipeDistance = 50;
        const mineSwipeVelocity = 0.3;

        if (Math.abs(deltaX)>minSwipeDistance || velocity > mineSwipeVelocity) {
            if (deltaX<0) { handleNextSlide(); } else { handlePrevSlide() };
        }

        setIsSwiping(false);

    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleMouseDown = (e: React.DragEvent<HTMLDivElement>) => {
        setIsSwiping(true);
        setTouchStartX(e.clientX);
        touchStartTime.current = Date.now();
    }

    const handleMouseUp = (e: React.DragEvent<HTMLDivElement>) => {
        if(!isSwiping) return;

        const mouseEndX = e.clientX;
        const deltaX = mouseEndX - touchStartX;
        const deltaTime = Date.now() - touchStartTime.current;
    }

    return (
        <div className="relative select-none">
            <button onClick={handlePrevSlide} className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20 hover:text-gray-600 transition-colors"
            aria-label="<"/>

            <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
                <div
                    className="relative w-full h-full z-10"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    
                >

                </div>
            </div>

            <button onClick={handleNextSlide} className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20 hover:text-gray-600 transition-colors"
            aria-label="<"/>
        </div>
    )
    

} 