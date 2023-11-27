import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Templates = () => {
  return (
    <div className="bg-gray-900">
      <div className="bg-gray-950 text-white font-bold mx-auto">
        <div className="h-[5vh]">
          <Navigation />
        </div>
        <div className="h-[95vh] ">
          <Outlet />
        </div>
        {/* <div className="h-[6vh] border-1">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Templates;
