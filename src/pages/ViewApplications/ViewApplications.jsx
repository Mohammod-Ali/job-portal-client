import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ViewApplications = () => {
    const applications = useLoaderData()

    const handleStatusUpdate = (e, id) =>{
        const data = { status: e.target.value }
        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: 'PATCh',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                          Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Status has been updated",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                          navigate('/myPostedJobs')
                        }
        })
    }
    
    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Status</th>
        <th>Update Status</th>
      </tr>
    </thead>
    <tbody>
      {
        applications.map((application, i) =>  <tr key={application._id}>
        <th>{i + 1}</th>
        <td>{application.applicant_email}</td>
        <td>Quality Control Specialist</td>
        <td>
            <select 
            onChange={(e) => handleStatusUpdate(e, application._id)}
            defaultValue={application.status || 'Change Status'} className="select select-ghost">
  <option >Change Status</option>
  <option>Under Review</option>
  <option>Set Intern</option>
  <option>Hired</option>
  <option>Rejected</option>
</select>
        </td>
      </tr>)
      }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ViewApplications;