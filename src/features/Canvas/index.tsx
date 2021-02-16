import React, { useRef, useEffect } from 'react';
import cvImage from '../../assets/CV.png'

interface ICanvasProps {
    imageUrl?: string;
    height?: string;
    width?: string;


}

const Canvas = (props: any) => {

    const canvasRef = useRef(null)

    const draw = (ctx: any, frameCount?: any) => {

        var image = new Image();
        image.src = cvImage;
        image.onload = () => {
            ctx.drawImage(image, 0, 0, image.width / 2 - 50, image.height / 2 - 70)
        }

    }

    useEffect(() => {
        const canvas: any = canvasRef.current;
        const context: any = canvas.getContext('2d');
        // let frameCount = 0;
        // let animationFrameId: any;
        // //Our first draw
        // const render = () => {
        //     frameCount++;
        //     draw(context, frameCount)
        //     animationFrameId = window.requestAnimationFrame(render)
        // }
        // render();
        // return () => {
        //     window.cancelAnimationFrame(animationFrameId)
        // }
        draw(context)
    }, [draw])

    return <canvas ref={canvasRef} {...props} width='2000rem' height='1000%' />
}

export default Canvas