import { useContext } from "react"
import { AuthContext } from "../contects/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {

  const { logout } = useContext(AuthContext);
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const handaleLogout = () => {
    logout().then(() => {
      alert("sign out successful !!!!");
      navigate(from, {
        replace: true
      })
    }).catch((error) => {
      console.log(error)
    })

  }

  return (
    <div className="h-screen bg-teal-200 flex items-center justify-center">

      <button className="bg-red-700 px-8 py-2 text-white rounded" onClick={handaleLogout}>
        Logout
      </button>

    </div>
  )
}

export default Logout
