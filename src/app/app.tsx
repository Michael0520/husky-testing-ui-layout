const Avatar = () => {
  return <div className="flex w-14 h-14 bg-pink-600 rounded-full"></div>;
};

const CircleList = () => {
  return (
    <div className="flex gap-2">
      <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
      <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
    </div>
  );
};

const Title = () => {
  return <h1>tripool</h1>;
};

const Description = () => {
  return (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat sed odio
      fugit culpa quo veniam ullam cumque. Assumenda, animi omnis.
    </p>
  );
};

function App() {
  return (
    <main>
      <section className="container mx-auto text-white rounded border border-red-300 p-10">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Avatar />
          <div className="flex-1 mx-auto flex flex-col justify-center items-center gap-2 bg-pink-900">
            <Title />
            <CircleList />
            <Description />
          </div>
          <div className="grid grid-rows-3 gap-4 w-full">
            {/* 第一行：三個等寬的盒子 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-500 p-4">1</div>
              <div className="bg-blue-500 p-4">2</div>
              <div className="bg-blue-500 p-4">3</div>
            </div>

            {/* 第二行：一個與上面等寬的盒子，另一个佔滿剩餘空間 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 bg-green-500 p-4">4</div>
              <div className="col-span-2 bg-green-500 p-4">5</div>
            </div>

            {/* 第三行：一個佔滿全部宽度的盒子 */}
            <div className="bg-red-500 p-4">6</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
