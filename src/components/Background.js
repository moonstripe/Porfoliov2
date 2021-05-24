import React, {useRef, useState, useEffect} from 'react';

function drawStars(ctx, windowSize) {

    const starMap = [
        {
            'size': 0.3,
            'color': '#bfbfbf'
        },
        {
            'size': 0.5,
            'color': '#ccc'
        },
        {
            'size': 0.7,
            'color': '#d9d9d9'
        },
        {
            'size': 1,
            'color': '#f2f2f2'
        }
    ]

    const starSettings = starMap[Math.floor(Math.random() * starMap.length)]

    console.log(starSettings)

    ctx.beginPath();
    ctx.fillStyle = starSettings.color;
    ctx.arc(Math.floor(Math.random() * windowSize.width), Math.floor(Math.random() * (windowSize.height - 200)), starSettings.size, 0, 2 * Math.PI);
    ctx.fill();
}

export function Background() {

    const canvasRef = useRef(null)

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        setWindowSize({
            width: window.width,
            height: window.height
        })

        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')


        const min = Math.ceil(60);
        const max = Math.floor(80);
        const starNum = Math.floor(Math.random() * (max - min) + min);


        // ctx.beginPath();
        // ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();

        for (let i = 0; i < starNum; i++) {
            drawStars(ctx, windowSize)
        }


        console.log(windowSize.width, windowSize.height);


        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);

    }, [windowSize.width])

    return <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight * 2} className={'background'} />
}