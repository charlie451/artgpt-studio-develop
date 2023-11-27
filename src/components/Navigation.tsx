import { faCircleUser, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="border-gray-500 border-b-2 h-full flex items-center justify-center relative ">
      <Link to="/">
        <div className="text-3xl">anuta AI canvas</div>
      </Link>
      <div className="absolute right-10">
        <ul className="flex space-x-4">
          <li>
            <FontAwesomeIcon icon={faCircleUser} size="2xl" />
          </li>
          <li>
            <Link to="/gallery">
              <FontAwesomeIcon icon={faImage} size="2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
