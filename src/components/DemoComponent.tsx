type DemoComponentProps = {
  title: string;
};

const DemoComponent = ({ title }: DemoComponentProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default DemoComponent;
