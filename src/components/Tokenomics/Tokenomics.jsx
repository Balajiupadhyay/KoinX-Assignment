import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function Tokenomics() {
    const data = {
        labels: ['Crowdsale investor', 'Foundation'],
        datasets: [{
          data: [80, 20],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
          ],
          hoverOffset: 4
        }]
      };
      const options = {
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true // Display circle bullets for legend labels
            }
          }
        },
        responsive: true, // Enable responsiveness
      };
    
  return (
    <div className=" flex flex-col  w-[100%] md:w-[70%] bg-white rounded-lg p-6 mb-5">
        <h1 className="text-2xl font-semibold pb-4">Tokenomics</h1>
        
            <h2 className="text-lg font-medium">Initial Distribution</h2>
            <div className='sm:w-80 sm:h-72 w-[100%] h-[100%]'>
                <Doughnut data={data} options={options}/>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam animi esse saepe maxime, sequi ipsum 
              repellendus incidunt ducimus voluptatem optio! Iusto debitis voluptatibus aliquam inventore repudiandae 
              totam vero libero aperiam, perferendis laboriosam, repellat, hic animi odio aspernatur ipsum est quasi. 
              Suscipit quaerat quisquam corporis et, doloribus facere voluptas a nostrum iure aut dolor reiciendis 
              architecto. Ipsam officia, eligendi libero aut ducimus non temporibus eaque, expedita quidem quam 
              veritatis aspernatur nesciunt molestias amet magni at consequatur? Nobis recusandae quis iure hic.
            </p>
      
    </div>
  )
}

export default Tokenomics