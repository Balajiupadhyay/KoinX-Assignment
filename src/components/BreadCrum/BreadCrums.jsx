// import { Link } from 'react-router-dom';
function BreadCrums() {
    // const location = useLocation();
    // const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div className="pb-4">
        {/* we can implement breadcrums this way  */}
        {/* <Link to="/">Cryptocurriencies</Link>
        // map the array of path name beacause split returns an array
        <Link to={routeTo}>{name}</Link> */}

        <span className=" text-sm">Cryptocurriencies {">>"} <span className="text-sm font-medium">Bitcoin</span></span>
    
    </div>
  )
}

export default BreadCrums