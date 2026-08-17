import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Label } from "../ui/label";

const EditProfile = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
          </DialogHeader>

          {/* Form for edit Profile */}
          <form>
            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="name">Name</Label>
              <input
                type="text"
                name="name"
                id="name"
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="email">Email</Label>
              <input
                type="text"
                name="name"
                id="name"
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="name">Name</Label>
              <input
                type="text"
                name="name"
                id="name"
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="name">Name</Label>
              <input
                type="text"
                name="name"
                id="name"
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfile;
