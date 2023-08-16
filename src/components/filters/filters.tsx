import 'flowbite'
import { FilterProps } from '../browse-sections/main-browse'
import AvailabilityAcc from './availability'
import PriceAcc from './price'
import AgeGroupAcc from './age-group'
import LanguageGroup from './language'
import GenderAcc from './gender'
import InterestAcc from './interest'
import OpportunitiesAcc from './opportunities'

const Filters: React.FC<FilterProps> = (props) => {
    const { selectedFilters, setSelectedFilters } = props

    return (
        <div className='grid grid-cols-1 lg:w-[300px] lg:flex lg:flex-col akatab text-[#1f1f1f] border-b h-fit mb-[45px] lg:mb-0'>
            <div className='hidden lg:flex text-2xl font-[600] p-5 border border-b-0 lg:rounded-t-2xl'>
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
                        <PriceAcc setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
                        <AvailabilityAcc setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
                        <AgeGroupAcc setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
                        <LanguageGroup setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
                        <GenderAcc setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
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
                    <div className="px-5 pb-5 border border-b-0 border-gray-200 border-t-0">
                        <InterestAcc setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
                    </div>
                </div>
            </div>

            <div id="accordion-collapse" data-accordion="collapse" data-inactive-classes='text-black' data-active-classes='text-black'>
                <h2 id="accordion-collapse-heading-8">
                    <button type="button" className="flex items-center justify-between w-full p-5   
                    text-left border border-b-0 border-gray-200 hover:bg-gray-100 font-[600]"
                    data-accordion-target="#accordion-collapse-body-8" aria-controls="accordion-collapse-body-1">
                        <span>Business Oportunities</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </button>
                </h2>
                <div id="accordion-collapse-body-8" className="hidden" aria-labelledby="accordion-collapse-heading-8">
                    <div className="px-5 pb-5 border border-gray-200 border-y-0">
                        <OpportunitiesAcc setSelectedFilters={setSelectedFilters} selectedFilters={selectedFilters} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters