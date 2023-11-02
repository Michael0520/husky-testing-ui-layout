import React, { ReactNode } from "react";
import { cn } from "utils/index";

const Avatar: React.FC = () => (
  <div className="flex w-14 h-14 bg-pink-600 rounded-full"></div>
);

interface CircleProps {
  className?: string;
}

const Circle: React.FC<CircleProps> = ({ className }) => (
  <div className={cn("w-6 h-6 bg-pink-400 rounded-full", className)}></div>
);

const CircleList: React.FC = () => (
  <div className="flex gap-2">
    <Circle />
    <Circle />
  </div>
);

const Title: React.FC = () => (
  <h1 className="text-2xl font-bold">Avatar Name</h1>
);

const Description: React.FC = () => (
  <p className="text-center sm:text-start">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sed odio
    fugit culpa quo veniam ullam cumque. Assumenda, animi omnis.
  </p>
);

const Card = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
      <Avatar />
      <div className="flex-1 mx-auto flex flex-col justify-center items-center gap-2 sm:items-start">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <Title />
          <CircleList />
        </div>
        <Description />
      </div>
    </div>
  );
};

interface GridBoxProps {
  children: ReactNode;
  span?: number;
  color?: string;
  className?: string;
}

const GridBox: React.FC<GridBoxProps> = ({
  children,
  span,
  color,
  className,
}) => {
  const spanClass = cn({ [`col-span-${span}`]: span });
  const colorClass = cn({ [`bg-${color}-500`]: color, "bg-gray-300": !color });
  const classes = cn("p-4", spanClass, colorClass, "text-white", className);

  return <div className={classes}>{children}</div>;
};

const GridBoxes: React.FC = () => (
  <>
    <div className="grid grid-cols-3 gap-4">
      <GridBox color="indigo">1</GridBox>
      <GridBox color="indigo">2</GridBox>
      <GridBox color="indigo">3</GridBox>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <GridBox span={1} color="teal">
        4
      </GridBox>
      <GridBox span={2} color="teal">
        5
      </GridBox>
    </div>
    <GridBox color="purple" className="w-full">
      6
    </GridBox>
  </>
);

const App: React.FC = () => (
  <main className="flex justify-center items-center p-4">
    <section className="container-sm mx-auto text-white rounded border border-red-300 p-10">
      <div className="flex flex-col gap-6">
        <Card />
        <hr />
        <GridBoxes />
      </div>
    </section>
  </main>
);

export default App;
