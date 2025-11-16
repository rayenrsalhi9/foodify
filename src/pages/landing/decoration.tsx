import bgIcon1 from '/decoration/bg-icon-1.webp'
import bgIcon2 from '/decoration/bg-icon-2.webp'
import { createOptimizedPicture } from "@/lib/image-utils"

const Decoration = () => {
    
    const imageData1 = createOptimizedPicture(bgIcon1, "Background Icon 1", "object-cover", "lazy")
    const imageData2 = createOptimizedPicture(bgIcon2, "Background Icon 2", "object-cover", "lazy")
    
    return (
        <>
            <div className="absolute bottom-[-40%] left-[-15%] pointer-events-none opacity-90 w-160 h-160 hidden md:block transition-opacity duration-500">
                <picture>
                    {imageData1.webpSrc && <source srcSet={imageData1.webpSrc} type="image/webp" />}
                    <img 
                        src={imageData1.originalSrc} 
                        alt={imageData1.alt} 
                        className={imageData1.className}
                        loading={imageData1.loading}
                    />
                </picture>
            </div>
            <div className="absolute bottom-[-40%] right-[-15%] pointer-events-none opacity-90 w-120 h-120 hidden md:block transition-opacity duration-500">
                <picture>
                    {imageData2.webpSrc && <source srcSet={imageData2.webpSrc} type="image/webp" />}
                    <img 
                        src={imageData2.originalSrc} 
                        alt={imageData2.alt} 
                        className={imageData2.className}
                        loading={imageData2.loading}
                    />
                </picture>
            </div>
        </>
    )
}

export default Decoration