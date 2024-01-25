function Revenue() {
  const revenue = [
    {
      title: "Total Order",
      number: 350,
      image: "./order.svg",
      green: true,
    },
    {
      title: "Total Refund",
      number: 270,
      image: "./refund.svg",
      green: false,
    },
    {
      title: "Average Sales",
      number: 1567,
      image: "./sales.svg",
      green: false,
    },
    {
      title: "Total Income",
      number: "$350.000",
      image: "./income.svg",
      green: true,
    },
  ];

  return (
    <div className="flex flex-row gap-4 h-full p-4">
      <div className="bg-red-400 flex-[2]">sales Trends</div>
      <div className=" grid grid-cols-2 gap-4">
        {revenue.map(({ title, number, image, green }) => (
          <div className="bg-white p-4 rounded-2xl">
            <div className="flex justify-between">
              <img src={image} alt="cube" />
              {green ? (
                <img src="./graphgreen.png" alt="total order" />
              ) : (
                <img src="./graphred.png" alt="total order" />
              )}
            </div>
            <h3 className="text-gray-500 my-1 text-lg">{title}</h3>
            <p className="text-2xl mb-2">{number}</p>
            <div className="flex items-center justify-between gap-2">
              <div
                className={`flex gap-1 px-2 rounded-full ${
                  green ? "bg-green-100" : "bg-red-100"
                } `}
              >
                {green ? (
                  <img src="./trending-green.svg" alt="trendingup" />
                ) : (
                  <img src="./trending-red.svg" alt="trendingdown" />
                )}
                <p
                  className={`${green ? "text-[#34CAA5]" : "text-[#ED544E]"} `}
                >
                  23.5%
                </p>
              </div>
              <p className="text-sm">vs. previous month</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Revenue;
