import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
   
      <header className="flex justify-between items-center py-4 border-b-2  max-w-5xl mx-auto">
        <h2 className="text-3xl  font-bold ">Knowledge Cafe</h2>
        <img src={profile} alt="" />
      </header>
  );
};

export default Header;
