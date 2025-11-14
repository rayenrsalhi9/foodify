import bgIcon1 from '/food/bg-icon-1.png'
import bgIcon2 from '/food/bg-icon-2.png'

const Decoration = () => {
    return (
        <>
            <div className="absolute bottom-[-40%] left-[-15%] pointer-events-none opacity-90 w-160 h-160 hidden md:block transition-opacity duration-500">
                <img 
                    src={bgIcon1} 
                    alt="Background Icon 1" 
                    className="object-cover"
                    loading="lazy"
                />
            </div>
            <div className="absolute bottom-[-40%] right-[-15%] pointer-events-none opacity-90 w-120 h-120 hidden md:block transition-opacity duration-500">
            <img 
                src={bgIcon2} 
                alt="Background Icon 2" 
                className="object-cover"
                loading="lazy"
            />
            </div>
        </>
    )
}

export default Decoration