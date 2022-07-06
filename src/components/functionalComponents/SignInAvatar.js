import chef from "../../assets/chef.png";
import welcome from "../../assets/welcome.png";

export const SignInAvatar = () => {
  return(
      <div className="centered parent">
        <img
            src={chef}
            alt="Flaticon-chef"
            className="image-small-chef"
        />
        <img
            src={welcome}
            alt="Flaticon-welcome"
            className="image-small-welcome"
        />
      </div>
  )
}