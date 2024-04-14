// -React-
import React from "react";
import { useNavigate, useOutletContext, Form } from "react-router-dom";
// -Components-
import FormRow from "../FomRow/FormRow";
// -Utils-
import customFetch from "../../utils/customFetch";

export const action = async () => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  const data = Object.fromEntries(formData.fromEntries);
  if (file && file.size > 500000) {
    toast.error("File size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", data);
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
  const { name, email, lastName, location } = user;
  const navigate = useNavigate();

  return (
    <div>
      <Form method="post" encType="multipart/form-data">
        <div>Profile</div>
        <div>
          <label htmlFor="avatar">Select an image file (max 0.5MB)</label>
          <input type="file" name="avatar" accept="image/*" id="avatar" />
        </div>
        <div>
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
          <button type="submit">Save changes</button>
        </div>
      </Form>
    </div>
  );
};

export default ProfilePage;
