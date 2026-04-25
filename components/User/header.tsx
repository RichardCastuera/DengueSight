interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Header;
