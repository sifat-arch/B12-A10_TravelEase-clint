import lexary from "../assets/laxeryCar2.png";
import sports from "../assets/sportsCar2.png";
import suv from "../assets/suv2.png";

const cars = [
  {
    img: lexary,
    title: "Leaxery",
    description: "This is a luxury car for ultimate comfort.",
  },
  {
    img: sports,
    title: "Sports",
    description: "High speed sports car for thrill seekers.",
  },
  {
    img: suv,
    title: "SUV",
    description: "Spacious SUV perfect for family trips.",
  },
];

const RentalCar = () => {
  return (
    <div className="flex gap-4">
      {cars.map((car, idx) => (
        <div
          key={idx}
          className="relative w-xl h-[650px] bg-cover bg-center group rounded-2xl"
          style={{ backgroundImage: `url(${car.img})` }}
        >
          {" "}
          <p className="text-white ml-5 mt-5 text-2xl font-bold">{car.title}</p>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white p-4 rounded-2xl">
            <h2 className="text-2xl font-bold mb-2">{car.title}</h2>
            <p className="mb-4 text-center">{car.description}</p>
            <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 transition">
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RentalCar;
