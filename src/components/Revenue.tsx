import { CategoryScale, ScriptableContext } from "chart.js";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

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

  const salesTrend = [
    {
      sales: 15.0,
      year: "Jan",
    },
    {
      sales: 32.0,
      year: "Feb",
    },
    {
      sales: 28.0,
      year: "Apr",
    },
    {
      sales: 18.0,
      year: "May",
    },
    {
      sales: 45.0,
      year: "Jun",
    },
    {
      sales: 18.0,
      year: "Jul",
    },
    {
      sales: 25.0,
      year: "Aug",
    },
    {
      sales: 35.0,
      year: "Sep",
    },
    {
      sales: 8.0,
      year: "Oct",
    },
    {
      sales: 30.0,
      year: "Nov",
    },
    {
      sales: 22.0,
      year: "Dec",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-4 w-full lg:p-4 p-2">
      <div className="bg-white dark:bg-cyan-900 flex-1 rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Sales Trend</h3>
          <div className="flex items-center gap-2">
            <p>Sort by:</p>
            <div className="flex gap-4 border dark:border-slate-400 rounded-full px-2 py-1">
              <p>Weekly</p>
              <img src="./arrowdown.svg" alt="downarrow" />
            </div>
          </div>
        </div>
        <div>
          <Bar
            data={{
              labels: salesTrend.map((data) => data.year),
              datasets: [
                {
                  label: "",
                  data: salesTrend.map((data) => data.sales),
                  backgroundColor: "rgb(55,209,171,0.1)",
                  borderRadius: 10000,
                  barThickness: 30,
                  hoverBackgroundColor: (context: ScriptableContext<"bar">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
                    gradient.addColorStop(0, "#34CAA5");
                    gradient.addColorStop(1, "rgb(55,209,171,0.1)");
                    return gradient;
                  },
                },
              ],
            }}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 mx-auto sm:grid-cols-2 gap-4 lg:w-[480px] w-full">
        {revenue.map(({ title, number, image, green }, index) => (
          <div
            key={index}
            className="bg-white dark:bg-cyan-900 flex flex-col gap-2 p-4 rounded-2xl"
          >
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
                  green
                    ? "bg-green-100 dark:bg-green-900"
                    : "bg-red-100 dark:bg-red-900"
                } `}
              >
                {green ? (
                  <img src="./trending-green.svg" alt="trendingup" />
                ) : (
                  <img src="./trending-red.svg" alt="trendingdown" />
                )}
                <p className={`${green ? "text-primary" : "text-secondary"} `}>
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
