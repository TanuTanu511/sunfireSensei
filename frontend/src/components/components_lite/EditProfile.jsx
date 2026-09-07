import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const EditProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.join(", ") || "",
    file: user?.profile?.resume,
  });

  const ChangeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        },
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
    console.log(input);
  };

  const FileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file: file });
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={"text-center font-bold"}>
              Edit Profile
            </DialogTitle>
          </DialogHeader>

          {/* Form for edit Profile */}
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="name">Name</Label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={input.fullname}
                onChange={ChangeEventHandler}
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="email">Email</Label>
              <input
                type="text"
                name="email"
                id="email"
                value={input.email}
                onChange={ChangeEventHandler}
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="phone">Phone</Label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={input.phoneNumber}
                onChange={ChangeEventHandler}
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="bio">Bio</Label>
              <input
                type="text"
                name="bio"
                id="bio"
                value={input.bio}
                onChange={ChangeEventHandler}
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="skills">Skills</Label>
              <input
                type="text"
                name="skills"
                id="skills"
                value={input.skills}
                onChange={ChangeEventHandler}
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4 py-4">
              <Label htmlFor="file">Resume</Label>
              <input
                type="file"
                name="file"
                id="file"
                accept="application/pdf"
                onChange={FileChangeHandler}
                className="col-span-3 border border-gray-400 rounded-md p-3"
              />
            </div>

            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 my-3 text-white flex items-center justify-center max-w-7xl mx-auto  bg-black hover:bg-gray-800 rounded-md"
                >
                  Save
                </button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditProfile;
