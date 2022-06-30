import { React, useEffect } from 'react';
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const Graph = (props) => {
  const param = props.data;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncApartmentsContract(param));
  }, [dispatch]);
  const apartmentsContract = useSelector(getApartmentsContract);
  console.log(apartmentsContract);

  return <Line data={data} />;
};

export default Graph;
