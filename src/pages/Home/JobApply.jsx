import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    // console.log(linkedIn, github, resume)

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplications')
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full shadow-2xl mt-10">
      <h1 className="text-5xl font-bold text-center">Apply Your Job!</h1>
      <form onSubmit={submitJobApplication} className="card-body">
        <div className="form-control">
          <label className="label">LinkedIn URL</label>
          <input
            type="url"
            name="linkedIn"
            className="input  w-full"
            placeholder="LinkedIn URL"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">GitHub URL</label>
          <input
            type="url"
            name="github"
            className="input w-full"
            placeholder="GitHub URL"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">Resume URL</label>
          <input
            type="url"
            name="resume"
            className="input w-full"
            placeholder="Resume URL"
            required
          />
        </div>
        <button className="btn btn-lg btn-neutral mt-4">Apply</button>
      </form>
    </div>
  );
};

export default JobApply;
