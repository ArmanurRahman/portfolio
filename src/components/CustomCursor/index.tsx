import { useEffect, useRef } from "react";
import "./style.scss";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cursorRef) {
            document.addEventListener("mousemove", mouseMoveHandler);
        }
        return () =>
            document.removeEventListener("mousemove", mouseMoveHandler);
    }, []);

    const mouseMoveHandler = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        if (cursorRef.current) {
            const positionX = clientX - cursorRef.current?.clientWidth / 2;
            const positionY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate(${positionX}px, ${positionY}px)`;
        }
    };
    return <div className='custom-cursor' ref={cursorRef}></div>;
};

export default CustomCursor;
