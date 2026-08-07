import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Navbar from "../components_lite/Navbar";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Register = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    file: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changefileHandler = (e) => {
    setInput({ ...input, file: e.target.file?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if(input.file){
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData , {
        headers:{
          "Content-Type": "multipart/form-data",
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center max-w-5xl mx-auto">
        <form
          onSubmit={submitHandler}
          action=""
          className="w-1/2 border border-gray-400 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Register</h1>
          <div className="my-4">
            <Label className="mb-2">Name</Label>
            <Input
              type="text"
              placeholder="John Doe"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              className="border border-gray-400"
            ></Input>
          </div>
          <div className="my-4">
            <Label className="mb-2">Email</Label>
            <Input
              type="email"
              placeholder="John@gmail.com"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="border border-gray-400"
            ></Input>
          </div>
          <div className="my-4">
            <Label className="mb-2">Password</Label>
            <Input
              type="password"
              placeholder="********"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="border border-gray-400"
            ></Input>
          </div>
          <div className="my-4">
            <Label className="mb-2">Phone Number</Label>
            <Input
              type="tel"
              placeholder="+1234567890"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              className="border border-gray-400"
            ></Input>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                ></Input>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center my-4">
            <Label>Profile Photo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={changefileHandler}
              className="cursor-pointer border border-gray-400"
            ></Input>
          </div>

            {loading ? (
            <div className="flex items-center justify-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
            type="submit"
            className=" block w-full py-3 my-3 text-white bg-green-500 hover:bg-green-600 rounded-md"
          >
            Register
          </button>
          )}

          <p className="flex text-gray-600 text-md my-2 justify-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-700 mx-2 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
