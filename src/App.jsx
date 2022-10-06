import "./App.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Data from "./data.json";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container sm:w-5/6 lg:w-2/6">
        <article
          id="my-balance"
          className="my-balance h-24 rounded-xl sm:px-5 lg:px-9"
        >
          <div className="balance-derecha">
            <h1 className="text-md lg:text-lg">My balance</h1>
            <p className="text-2xl font-bold lg:text-3xl">$921.48</p>
          </div>
          <div className="balance-izquierda flex justify-center items-center">
            <img src="/src/assets/logo.svg" className="h-9" alt="Logo" />
          </div>
        </article>
        <article id="chart" className="chart h-3/6 rounded-xl mt-5">
          <h2 className="font-bold text-lg p-4 lg:text-4xl lg:p-8">
            Spending - Last 7 days
          </h2>
          <div className="sm:p-4 lg:p-8">
            <Bar
              data={{
                labels: Data.map((data) => {
                  return data.day;
                }),
                datasets: [
                  {
                    label: "$",
                    data: Data.map((data) => {
                      return data.amount;
                    }),
                    backgroundColor: "hsl(10, 79%, 65%)",
                    hoverBackgroundColor: "hsl(186, 34%, 60%)",
                    borderRadius: 4,
                  },
                ],
              }}
            />
          </div>
          <hr className="mx-4 lg:mx-9" />
          <div className="flex py-2 px-4 lg:py-4 lg:px-9 justify-between">
            <div className="this-month-left">
              <p className="total text-md lg:text-lg">Total this month</p>
              <p className="text-3xl font-bold lg:text-4xl">$478.33</p>
            </div>
            <div className="this-month-right">
              <p className="text-md font-bold text-right pt-9 lg:text-lg">
                +2.4%
              </p>
              <p className="total text-md lg:text-lg">from last month</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
