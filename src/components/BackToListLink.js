import { Link } from 'react-router-dom';
import '../stylesheets/_BackToListLink.scss';

const BackToListLink = () => {
  return (
    <Link to="/" className="detailLink" aria-label="Go back to list" title="Go back to list">
      &lt; Back to list
    </Link>
  );
};

export default BackToListLink;
