// -React-
import React from "react";
import { useNavigate, useOutletContext, Form } from "react-router-dom";
// -Components-
import FormRow from "../FomRow/FormRow";

const ProfilePage = () => {
  const { user } = useOutletContext;
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
        </div>
        <button type="submit">Save changes</button>
      </Form>
    </div>
  );
};

export default ProfilePage;
