import React from 'react'
import { Button } from '../ui/Button'
import { MicrophoneIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline'

function CreateBoard() {
    return (
        <div className="flex items-center justify-center gap-2 border rounded-lg h-60 bg-secondary border-primary break-inside-avoid">
            <PlusIcon className="w-8 h-8 text-primary" />
            <p className="text-primary libre-font">Create board</p>
        </div>
    )
}

export default CreateBoard