import { getProperties } from '@/services/properties';
import handler from '../api/hello';

const handlerClick = async () => {
  const response = await getProperties();
  console.log(response.data)
}

const Dashboard = () => {


  return (
    <div>
      <h1>Bienvenido al Dashboard 🚀</h1>
      <p>Solo entras aquí si el login fue correcto.</p>
      <div>
        <button onClick={handlerClick}>llamar endpoint</button>
      </div>
    </div>
  );
};

export default Dashboard;
