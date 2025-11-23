const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-50">
      <div className="flex flex-col items-center gap-12 px-8">
        
        <div className="relative">
          <div className="absolute inset-0 bg-orange-100 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <svg
              className="w-full h-full animate-spin"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-orange-100"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="70.7 282.8"
                className="text-orange-500"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-linear-to-r from-orange-900 via-orange-600 to-orange-50 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
                Foodify
              </span>
            </h1>
            <div className="h-1 w-16 bg-linear-to-r from-orange-500 to-orange-300 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-3">
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase animate-pulse">
              Preparing your experience
            </p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading