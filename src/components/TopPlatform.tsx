import ProgressTrack from "./ProgressTrack";

function TopPlatform() {
  const topPlatform = [
    {
      title: "Book Bazaar",
      color: "#6160DC",
      progress: 6,
      amount: "$2,500,000",
      percent: "+15%",
    },
    {
      title: "Artisan Aisle",
      color: "#54C5EB",
      progress: 5,
      amount: "$1,800,000",
      percent: "+10%",
    },
    {
      title: "Toy Troop",
      color: "#FFB74A",
      progress: 3,
      amount: "$1,200,000",
      percent: "+8%",
    },
    {
      title: "XStore",
      color: "#FF4A55",
      progress: 3,
      amount: "$600,000",
      percent: "+5%",
    },
  ];

  const lastOrders = [
    {
      image: "./Frame1.png",
      name: "Marcus Bergson",
      date: "Nov 15, 2023",
      amount: "$80,000",
      paid: true,
    },
    {
      image: "./Frame2.png",
      name: "Jaydon Vaccaro",
      date: "Nov 15, 2023",
      amount: "$150,000",
      paid: false,
    },
    {
      image: "./Frame3.png",
      name: "Corey Schleifer",
      date: "Nov 14, 2023",
      amount: "$87,000",
      paid: true,
    },
    {
      image: "./Frame4.png",
      name: "Cooper Press",
      date: "Nov 14, 2023",
      amount: "$100,000",
      paid: false,
    },
    {
      image: "./Frame5.png",
      name: "Phillip Lubin",
      date: "Nov 13, 2023",
      amount: "$78,000",
      paid: true,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 px-2 lg:px-4">
      <div className="bg-white dark:bg-cyan-900 h-fit w-full flex-1 p-4 rounded-2xl">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold">Last Orders</h3>{" "}
          <p className="text-primary">See All</p>
        </div>
        <table className="w-full border-collapse overflow-x-auto">
          <thead>
            <tr className="[&>th]:text-left [&>th]:text-[#9CA4AB] [&>th]:font-normal py-4">
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {lastOrders.map(({ image, date, name, paid, amount }, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-2">
                    <img src={image} alt={name} />
                    <p className="text-[#3A3F51] font-semibold">{name}</p>
                  </div>
                </td>
                <td className="text-gray-500 dark:text-gray-300">{date}</td>
                <td className="dark:text-white">{amount}</td>
                <td className={`${paid ? "text-primary" : "text-secondary"}`}>
                  {paid ? "paid" : "refund"}
                </td>
                <td>
                  <div className="flex gap-1 items-center">
                    <img src="./view.svg" alt="view" />
                    <p>View</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:w-[480px] p-4 bg-white dark:bg-cyan-900 rounded-2xl flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="font-bold">Top Platform</h3>
          <p className="text-primary cursor-pointer">See All</p>
        </div>
        {topPlatform.map(
          ({ title, color, progress, amount, percent }, index) => (
            <div key={index}>
              <h4 className="font-bold">{title}</h4>
              {/* Progress track */}
              <ProgressTrack prog={progress} color={color} />
              <div className="text-gray-500 flex justify-between">
                <p>{amount}</p>
                <p>{percent}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TopPlatform;
