import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 38,
    height: 21,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 3.5,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#FB5870',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 14,
        height: 14,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

const checkboxStyle = {
    color: red['A200'],
    '&.Mui-checked': {
        color: red['A200'],
    },
}

const messagesFrom = ['All users', 'Verified users', 'Users with reviews',
    'Users over 18 years old', 'Users over 50 years old', 'Users who are also celebrities']

const CelSettingsPrivacy = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='privacy'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Privacy</h1>

            <div className="flex flex-col gap-y-[25px]">
                <div className='flex flex-col gap-y-[25px]'>
                    <div>
                        <span className='font-[600]'>
                            Would you like to receive messages? <strong className="font-[400]">(Recommended)</strong>
                        </span>

                        <div className="flex flex-row items-center mt-1">
                            <span>Allow fans and businesses to send me messages</span>

                            <div className='ml-auto'>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                    label={<div className='hidden'></div>}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className='font-[600]'>
                            Would you like to receive messages from:
                        </span>

                        <div className="flex flex-col gap-y-[0px] relative right-[10px] mt-2">
                            {messagesFrom.map((from, index) =>
                                <label className="flex flex-row items-center gap-x-[5px] font-[400]" key={index}>
                                    <Checkbox sx={checkboxStyle} />
                                    <span>{from}</span>
                                </label>
                            )}
                        </div>
                    </div>

                    <div>
                        <span className='font-[600]'>
                            Would you like to receive applications for your experiences? <strong className="font-[400]">(Recommended)</strong>
                        </span>

                        <div className="flex flex-row items-center mt-1">
                            <span>Allow fans and businesses to send me applications for experiences</span>

                            <div className='ml-auto'>
                                <FormControlLabel
                                    control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                    label={<div className='hidden'></div>}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <span className='font-[600]'>
                                Would you like to receive applications for your experiences from:
                            </span>

                            <div className="flex flex-col gap-y-[0px] relative right-[10px] mt-2">
                                {messagesFrom.map((from, index) =>
                                    <label className="flex flex-row items-center gap-x-[5px] font-[400]" key={index}>
                                        <Checkbox sx={checkboxStyle} />
                                        <span>{from}</span>
                                    </label>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CelSettingsPrivacy