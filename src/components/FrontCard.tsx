interface FrontCardProps {
  isReverse: boolean;
}
const FrontCard = ({ isReverse }: FrontCardProps) => {
  return (
    <div
      className={`bg-gradient-to-r from-teal-300 to-teal-700 w-200 h-100 flex ${
        isReverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="flex items-center pl-5 w-70">
        <img
          className="rounded-3xl"
          src="https://images.unsplash.com/photo-1631947430066-48c30d57b943?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center w-130">
        <h1 className="text-teal-100 font-semibold pt-6 text-3xl">Le Manh Jhon</h1>
        <h2 className="py-7 px-7 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Corporis provident aliquam totam molestias soluta similique,
            incidunt facere rem nihil quis laboriosam expedita voluptates adipisci suscipit distinctio,
             non veritatis. Illum, odit. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
              Esse qui reprehenderit saepe id cumque provident fuga ut iste autem quo!</h2>
              <button className="bg-teal-800 mt-10 py-1 w-50 rounded-md text-white">Learn More</button>

      </div>
    </div>
  );
};

export default FrontCard;
