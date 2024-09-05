import React from 'react'

function WhoWeAre() {
return (
    <div className="w-full h-auto flex items-center justify-center px-4 py-16">
        <div className="text-center text-white relative" style={{ width: '63%', height: '90%' }}>
            {/* Title with lines */}
            <div className="relative flex items-center justify-center mb-8">
                <div className="flex-grow border-t-4 border-white " style={{ position: 'relative', top: '1.4em' }}></div>
                <span className="mx-10 text-4xl lg:text-7xl font-bold tracking-widest font-ppSupplyMono"> WHO ARE WE? </span>
                <div className="flex-grow border-t-4 border-white" style={{ position: 'relative', top: '1.4em' }}></div>
            </div>

            {/* Opaque Background and Text */}
            <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full h-full text-4xl carroisGothic">
                <p className="leading-relaxed lg:leading-loose mb-4">
                    BostonHacks brings together over 100 students for an exhilarating 36 hours to build awesome projects. In our past events, students had meaningful interactions with mentors, peers, and sponsors.
                </p>
                <br></br>
                <p className="leading-relaxed lg:leading-loose mb-4">
                    A hackathon would be incomplete without new technology, advice, and ideas our sponsors offer, and we'd be eager to have you join us this coming fall!
                </p>
                <br></br>
                <p className="leading-relaxed lg:leading-loose mb-4">
                    BostonHacks Fall 2022 will run in-person November 12-13 2022. Now sponsors will have the opportunity to connect with talented hackers all across the world. At BostonHacks, we thrive to provide a comprehensive recruiting and branding experience to our sponsors.
                </p>
                <br></br>
                <p className="leading-relaxed lg:leading-loose">
                    Here's what your company can do at our event.
                </p>
            </div>
        </div>
    </div>

)
}

export default WhoWeAre