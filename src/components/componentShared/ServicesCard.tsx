const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div data-aos="fade-up">
    <p className="font-semibold text-blue-600">{title}</p>
    <p className="pt-6">{description}</p>
  </div>
);
export default ServiceCard;
