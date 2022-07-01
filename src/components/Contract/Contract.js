import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncApartmentsContract } from '../../features/apartments/apartmentSlice';
import { getApartmentsContract } from '../../features/apartments/apartmentSlice';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './Contract.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const getGraphData = (obj) => {
  let labels = [];
  let price = [];
  const apartmentsName = obj[0].apartmentsName + ' 매매가';
  obj.map((res) => {
    labels.push(res.createAt);
    price.push(res.salePrice);
  });
  let data = {
    labels: labels,
    datasets: [
      {
        label: apartmentsName,
        data: price,
        fill: false,
        borderColor: '#4337de',
        tension: 0.1,
      },
    ],
  };
  return data;
};

const Contract = (props) => {
  const [term, setTerm] = useState(3);
  console.log(term);
  const params = { aptno: props.data, term: term };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncApartmentsContract(params));
  }, [dispatch]);

  const apartmentsContract = useSelector(getApartmentsContract);

  let renderTable = '';
  renderTable =
    apartmentsContract.length === undefined ? (
      <tr className="css-a7448w">
        <td colSpan={4}>No data</td>
      </tr>
    ) : (
      apartmentsContract.map((res, key) => (
        <tr key={key} className="css-a7448w">
          <td className="css-1f5shc1">{res.createAt}</td>
          <td>{res.salePriceComma}</td>
          <td>{res.areaForExclusiveUse}</td>
          <td>{res.floor}</td>
        </tr>
      ))
    );

  return (
    <div>
      <div className="chart">
        <div className="chart-container">
          <>
            <div className="chart-type">
              <div className="chart-menu-type on">
                <div
                  className="btn-chart-type"
                  onClick={() => {
                    setTerm(3);
                  }}
                >
                  최근 3개월
                </div>
              </div>
              <div className="chart-menu-type ">
                <div
                  className="btn-chart-type"
                  onClick={() => {
                    setTerm(6);
                  }}
                >
                  최근 6개월
                </div>
              </div>
              <div className="chart-menu-type ">
                <div
                  className="btn-chart-type"
                  onClick={() => {
                    setTerm(12);
                  }}
                >
                  최근 1년
                </div>
              </div>
            </div>
          </>
          <div className="chart-wrap">
            {apartmentsContract.length === undefined ? (
              console.log('graph init...')
            ) : (
              <Line data={getGraphData(apartmentsContract)} />
            )}
          </div>
        </div>
      </div>
      <div className="css-q3by2j">
        <table className="css-lwlhki">
          <thead>
            <tr className="css-1skvx7a">
              <td className="css-1qyfbk">계약일</td>
              <td className="css-1qyfbk">가격</td>
              <td className="css-1qyfbk">전용면적</td>
              <td className="css-1qyfbk">층</td>
            </tr>
          </thead>
          <tbody>{renderTable}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Contract;
