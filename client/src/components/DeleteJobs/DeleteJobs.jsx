// -React-
import { redirect } from "react-router-dom";
// -Utils-
import customFetch from "../../utils/customFetch";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
    return redirect("/dashboard/jobs-page");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/jobs-page");
  }
};
