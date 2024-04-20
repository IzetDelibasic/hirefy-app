// -React-
import React from "react";
import { toast } from "react-toastify";
import { useOutletContext, Form } from "react-router-dom";
// -Components-
import FormRow from "../FomRow/FormRow";
// -Utils-
import customFetch from "../../utils/customFetch";
// -Constants-
import { demoUserImage } from "../../constants/ImagesConstant";
// -Icons-
import { FaUserCircle } from "react-icons/fa";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("File size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const ProfilePage = () => {
  const { user } = useOutletContext();
  if (!user) {
    return <div>Loading user</div>;
  }
  const { name, email, lastName, location, avatar } = user;

  return (
    <div>
      <Form
        method="post"
        encType="multipart/form-data"
        onSubmit={action}
        className="max-w-md lg:max-w-xl mx-auto mt-4 font-montserrat"
      >
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <div className="text-xl font-medium mb-2 text-center">
              {name} - Profile
            </div>
            <label
              className="block text-black text-sm font-medium mb-2 text-center"
              htmlFor="avatar"
            >
              {user && avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-[10rem] h-[10rem] rounded-full mx-auto my-2"
                />
              ) : (
                <div className="flex justify-center items-center mb-2">
                  <FaUserCircle className="w-20 h-20" />
                </div>
              )}
              Select an image file (max 0.5MB)
            </label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              id="avatar"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 flex flex-col justify-center items-center">
            <FormRow label="Name" defaultValue={name} name="name" type="text" />
            <FormRow
              label="Last Name"
              defaultValue={lastName}
              name="lastName"
              type="text"
            />
            <FormRow
              label="Email"
              defaultValue={email}
              name="email"
              type="text"
            />
            <FormRow
              label="Location"
              defaultValue={location}
              name="location"
              type="text"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 ease-in-out duration-300 text-white py-2 px-4 focus:outline-none rounded-xl focus:shadow-outline lg:w-[30%] md:w-[45%] w-[60%]"
            >
              Save changes
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ProfilePage;
