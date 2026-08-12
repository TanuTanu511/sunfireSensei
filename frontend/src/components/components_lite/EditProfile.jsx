import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Label } from '../ui/label'

const EditProfile = ({open , setOpen}) => {
  return (
    <div className='bg-white'>
      <Dialog open={open}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>

            {/* Form for edit Profile */}
            <form>
                <div className='grid gap-4 py-4'>
                    <Label htmlFor="name">Name</Label>
                    <input type='text' name='name' id='name' className='w-full border border-gray-400 rounded-md p-3'/>
                </div>
            </form>

        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditProfile
