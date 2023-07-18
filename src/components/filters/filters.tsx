import 'flowbite'
import AvailabilityAcc from './availability'

const Filters: React.FC = () => {
    return (
        <div className='w-[250px] flex flex-col akatab'>
            <div className='text-2xl font-[600] p-5 border border-b-0 rounded-t-2xl'>
                Filters
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-1" aria-controls="accordion-collapse-body-1">
                        <span>Location</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-2">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-2" aria-controls="accordion-collapse-body-2">
                        <span>Price</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-3">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-3" aria-controls="accordion-collapse-body-3">
                        <span>Availability</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                    <div className="p-5 border border-b-0 border-gray-200">
                        <AvailabilityAcc />
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-4">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-4" aria-controls="accordion-collapse-body-4">
                        <span>Age Group</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-5">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-5" aria-controls="accordion-collapse-body-5">
                        <span>Language</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-6">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-6" aria-controls="accordion-collapse-body-6">
                        <span>Gender</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-7">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-7" aria-controls="accordion-collapse-body-7">
                        <span>Interest Spectrum</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-7" className="hidden" aria-labelledby="accordion-collapse-heading-7">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-8">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-8" aria-controls="accordion-collapse-body-1">
                        <span>Business Oportunities</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
                    <div className="p-5 border border-b-0 border-gray-200">
                        {/* content */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters