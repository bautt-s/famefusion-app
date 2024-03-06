import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

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

const SettingsNotifications: React.FC = () => {
    return (
        <div className="flex flex-col py-[40px] px-[60px] akatab
        shadow-[0px_0px_9px_3px_rgba(0,0,0,0.1)] rounded-2xl" id='notifications'>
            <h1 className="outfit font-[600] text-2xl mb-[25px]">Notifications</h1>

            <div className="flex flex-col gap-y-[10px]">
                <div className="flex flex-row items-center">
                    <span>Announcements</span>

                    <div className='ml-auto'>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label={<div className='hidden'></div>}
                        />
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <span>FameFusion Newsletter</span>

                    <div className='ml-auto'>
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label={<div className='hidden'></div>}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsNotifications