import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import { useState, ChangeEvent } from 'react'

const minDistance = 0;

const PriceSlider = styled(Slider)({
    '& .MuiSlider-valueLabel': {
        height: 23,
        width: 50,
        backgroundColor: 'white',
        color: 'black',
        fontWeight: '400',
        borderRadius: '3px',
        border: '1px solid lightgray',
        '&:before': {
            borderBottom: '1px solid lightgray',
            borderRight: '1px solid lightgray',
            width: 15,
            height: 15,
            borderRadius: '200px 0 75px 0',
        }
    },
    '& .MuiSlider-thumb': {
        '&:hover': {
            boxShadow: '0 0 0 8px rgba(251, 88, 112, 0.16)'
        },
        '&:focus, &:active': {
            boxShadow: '0 0 0 12px rgba(251, 88, 112, 0.16)'
        },
    }
})

const PriceAcc: React.FC = () => {
    const [value, setValue] = useState<any[]>([20, 37]);

    const handleChange1 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) return;

        if (activeThumb === 0) setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        else setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    const inputChange = (order: 'max' | 'min', e: ChangeEvent<HTMLInputElement>) => {
        if (order === 'min') {
            if (!Number.isNaN(parseInt(e.target.value))) setValue([parseInt(e.target.value), value[1]])
            else setValue(['', value[1]])
        }
        else if (order === 'max') {
            if (!Number.isNaN(parseInt(e.target.value))) setValue([value[0], parseInt(e.target.value)])
            else setValue([value[0], ''])
        }
    }

    return (
        <div className='flex flex-col'>
            <span>Select range</span>

            <div className='price-slider mt-[45px]'>
                <PriceSlider
                    value={value}
                    onChange={handleChange1}
                    valueLabelDisplay="on"
                    valueLabelFormat={(value) => `€${value}`}
                    
                    sx={{ color: '#FB5870' }}
                />
            </div>

            <div className='flex flex-row gap-[20px] akatab'>
                <div className='flex flex-col'>
                    <span className='text-sm'>Min.</span>
                    <div className="input-group">
                        <input type="number" value={value[0]} onChange={(e) => inputChange('min', e)}
                            className='w-full border border-[#a1a1a1] rounded-lg pr-[15px] h-[30px] outline-[#a1a1a1]' />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='text-sm'>Max.</span>
                    <div className="input-group">
                        <input type="number" value={value[1]} onChange={(e) => inputChange('max', e)}
                            className='w-full border border-[#a1a1a1] rounded-lg pr-[15px] h-[30px] outline-[#a1a1a1]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceAcc