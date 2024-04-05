import cn from 'mxcn'
import { Check } from 'phosphor-react'
import React, { useState } from 'react'


function ThemeToggle() {

    const [activeTheme, setActiveTheme] = useState('default')

    const themes = [{
        value: 'default',
        outline: 'outline-[#2C5DBB]',
        bg: 'bg-[#9CB1DA]',
    }, {
        value: 'green',
        outline: 'outline-[#5ABD2B]',
        bg: 'bg-[#B0D99C]',
    }, {
        value: 'teal',
        outline: 'outline-[#2BBDB4]',
        bg: 'bg-[#9CD9D5]',
    }, {
        value: 'dark',
        outline: 'outline-[#292929]',
        bg: 'bg-[#BEBEBE]',
    }, {
        value: 'red',
        outline: 'outline-[#BB2C2C]',
        bg: 'bg-[#D99C9C]',
    }]

    const changeTheme = (value) => {
        setActiveTheme(value)
    }

    return (
        <div className='flex gap-4 px-1'>
            {themes.map((theme) => (
                <button
                    key={theme.value}
                    onClick={() => changeTheme(theme.value)}
                    className={cn('w-4 text-white h-4 p-[1px] rounded-full outline-offset-2 outline',
                        theme.outline, theme.bg
                    )}
                >

                    {activeTheme === theme.value && (
                        <Check className='w-full h-full' />
                    )}

                </button>
            ))}
        </div>
    )
}

export default ThemeToggle