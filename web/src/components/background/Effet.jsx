const Effet = () => {
    return (
        <>
            {/* Effet en bas à gauche */}
            <div
                className="absolute bottom-6 left-4 sm:left-8 md:left-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full opacity-40 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)'
                }}
            ></div>

            {/* Effet au milieu */}
            <div
                className="absolute bottom-32 sm:bottom-40 md:bottom-50 left-1/2 sm:left-2/3 md:left-3/4 w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full opacity-10 blur-3xl transform -translate-x-1/2"
                style={{
                    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.9) 0%, transparent 70%)'
                }}
            ></div>

            {/* Effet en haut à droite */}
            <div
                className="absolute top-16 sm:top-20 md:top-24 right-4 sm:right-8 md:right-20 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full opacity-40 blur-3xl"
                style={{
                    background: 'radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)'
                }}
            ></div>
        </>
    )
}

export default Effet