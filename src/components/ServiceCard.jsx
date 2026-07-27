function ServiceCard({ icon, title, description }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="single_service text-center">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard;
