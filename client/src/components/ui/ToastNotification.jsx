import React from 'react'
import toast, { Toaster, ToastBar } from 'react-hot-toast'
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid'

function ToastNotification() {

  return (
    <Toaster
      toastOptions={{
        position: 'bottom-right',
        duration: 5000,
        icon: <ExclamationCircleIcon fill='#2C5DBB' className='w-[30px] h-[30px]' />,
        style: {
          background: '#EAF2FF',
          border: '1px solid #2C5DBB',
        },
        success: {
          icon: <CheckCircleIcon fill='#61A20F' className='w-[30px] h-[30px]' />,
          style: {
            background: '#E9F8D5',
            border: '1px solid #61A20F',
            width: 'auto',
            boxShadow: 'none'
          }
        },
        error: {
          icon: <ExclamationTriangleIcon fill='#FF2C18' className='w-[30px] h-[30px]' />,
          style: {
            background: '#FFDCD9',
            border: '1px solid #FF2C18',
            width: 'auto',
            boxShadow: 'none'
          }
        }
      }}
    >
      {(t) => (
        <ToastBar toast={t} style={{}}>
          {({ icon, message }) => (
            <>
              {icon}
              <p className='text-xs font-semibold'>{message}</p>
              {t.type !== 'loading' && (
                <button onClick={() => toast.dismiss(t.id)}>
                  <XMarkIcon className='w-4 h-4' />
                </button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  )
}

export default ToastNotification