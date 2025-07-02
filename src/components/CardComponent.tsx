type CardComponentProps = {
  title: string;
  children: React.ReactNode;
};

const CardComponent = ({ title, children }: CardComponentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <div style={{ backgroundColor: "red", width: "100px", height: "100px" }}>
        {children}
      </div>
    </div>
  );
};

export default CardComponent;
