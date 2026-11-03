import { Link } from 'react-router-dom';
import { useTranslation } from '../context/LanguageContext';

interface ProjectCardProps {
  title: string;
  type: string;
  group: string;
  link: string;
  image: string;
  description: string;
  delay?: string;
}

export default function ProjectCard({
  title,
  type,
  group,
  link,
  image,
  description,
  delay = '0.3s',
}: ProjectCardProps) {
  const { t } = useTranslation();
  const isMarket = group === 'market';

  return (
    <div className="col-lg-4 col-md-6 wow slideInUp" data-wow-delay={delay}>
      <div className="project-item bg-light rounded overflow-hidden h-100 d-flex flex-column">
        <div className="position-relative overflow-hidden">
          {image && <img className="img-fluid" src={image} alt={`Project: ${title}`} />}
          <span
            className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-3 ms-3 py-1 px-3 small fw-bold"
          >
            {isMarket ? t('project.availablePublic') : t('project.clientProjects')}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="position-absolute bottom-0 end-0 bg-dark text-white rounded-start mb-3 me-3 py-2 px-3 text-decoration-none small"
          >
            {t('common.visitSite')} <i className="bi bi-box-arrow-up-right ms-1"></i>
          </a>
        </div>
        <div className="p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <small className="text-uppercase fw-bold text-primary">{type}</small>
            <span className={`badge ${isMarket ? 'bg-success' : 'bg-info'}`}>
              {isMarket ? t('project.publicProduct') : t('project.clientWork')}
            </span>
          </div>
          <h4 className="mb-3">{title}</h4>
          <p className="text-muted mb-4 flex-grow-1">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm py-2 px-4 align-self-start text-decoration-none"
          >
            {t('common.viewProject')} <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
