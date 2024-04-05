import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Dialog, DialogContent, DialogTrigger } from './ui/Dialog'
import OTPInput from 'react-otp-input'

function UpdateEmail() {

    const [otp, setOtp] = useState('')

    return (
        <Dialog>
            <DialogTrigger>
                <Button
                    variant={'ghost'}
                    className='p-0 text-xs text-gray-400 underline underline-offset-4'
                >
                    Update email
                </Button>
            </DialogTrigger>

            <DialogContent>
                <p>The OTP for updating email has been sent to nainabajaj11a.rosary@gmail.com</p>

                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    containerStyle={{
                        display: 'flex',
                        gap: '12px',
                    }}
                    inputType='text'
                    inputStyle={{
                        width: '40px',
                        height: '40px',
                        borderBottom: '2px solid #B8CBED',
                        background: '#EAF2FF',
                        display: 'flex',
                        justifyContent: 'center',
                        outline: 'none',
                    }}
                    renderInput={(props) => (
                        <input {...props} />
                    )}
                />
            </DialogContent>

        </Dialog>
    )
}

export default UpdateEmail