import { FaMapMarkerAlt } from "react-icons/fa";

const HotJobCart = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex gap-8 m-3">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h3 className="text-2xl">{company}</h3>
          <p className="flex gap-1.5 items-center">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}  <div className="badge badge-secondary">NEW</div></h2>
       
        <p>
         {description}
        </p>
        <div className="flex gap-1.5 flex-wrap">
            {
                requirements.map(skill => <p className="rounded border-2 text-center px-1.5 hover:text-white hover:bg-black ">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center">
            <p>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCart;
