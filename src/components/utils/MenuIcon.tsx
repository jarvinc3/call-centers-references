import "../../css/navbar.css";

interface MenuIconProps {
  action: () => void;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ action }) => {
  return (
    <div>
      <input onClick={action} type="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="toggle">
        <div className="bars" id="bar1" />
        <div className="bars" id="bar2" />
        <div className="bars" id="bar3" />
      </label>
    </div>
  );
};
