import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {

const {user} = useAuth()
const navigate = useNavigate()

   const handleAddJob = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const initialDAta = Object.fromEntries(formData.entries())
    console.log(initialDAta)
    const {min, max, currency, ...newJob} = initialDAta
    newJob.salaryRange = { min, max, currency }
    newJob.requirements = newJob.requirements.split('\n')
    newJob.responsibilities = newJob.responsibilities.split('\n')
    console.log(newJob)

    fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Job has been added",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/myPostedJobs')
            }
          })

   }


  return (
    <div>
      <h2 className="text-2xl">Post a New Job</h2>
      <form onSubmit={handleAddJob} className="card-body">
        {/* job title */}
        <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input w-full"
            required
          />
        </div>
        {/* job location */}
        <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input w-full"
            required
          />
        </div>
        {/* job type  */}
        <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select  name="job_type" defaultValue="Pick a Job" className="select select-ghost">
            <option >Pick a Job Type</option>
            <option>Intern</option>
            <option>Part-time</option>
            <option>Full-time</option>
          </select>
        </div>
        {/* job category  */}
        <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select name="category" defaultValue="Pick a font" className="select select-ghost">
            <option >Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary range */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 items-end">
          <div className=" flex flex-col">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input w-full"
              required
            />
          </div>
          <div className=" flex flex-col">
            
            <input
              type="text"
              name="max"
              placeholder="Max"
              className="input w-full"
              required
            />
          </div>
          <div className=" flex flex-col">
           
            <select name="currency" defaultValue="Pick a font" className="select select-ghost">
              <option>Pick a Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
         {/* job Description */}
        <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Job Description" required></textarea>
        </div>
        {/* company name */}
          <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input w-full"
            required
          />
        </div>
        {/* requirements */}
           <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder="put each requirement in a new line" required></textarea>
        </div>
        {/* responsibilities */}
           <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder="write each responsibility in a new line" required></textarea>
        </div>

 {/* HR name */}
          <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            className="input w-full"
            required
          />
        </div>
         {/* HR email */}
          <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
          defaultValue={user?.email}
            type="email"
            name="hr_email"
            placeholder="HR Email"
            className="input w-full"
            required
          />
        </div>
         {/* application deadline */}
          <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Application Deadline"
            className="input w-full"
            required
          />
        </div>
         {/* company logo url*/}
          <div className=" flex flex-col">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="logo"
            placeholder="Company Logo URL"
            className="input w-full"
            required
          />
        </div>
        
        

        {/* submit */}
        <input className="btn btn-neutral btn-outline" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddJob;