import './App.css';
import React, {useState} from "react";
import {Modal} from "flowbite-react";
import axios from 'axios';
import {Container} from "postcss";
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
function App() {
    const [checked, setChecked] = useState([]);
    const [listOfMaterials, setListOfMaterials] = useState([]);
    const [maxMaterialCount, setMaxMaterialCount] = useState(0);
    const [materialPerDay, setMaterialPerDay] = useState(0);
    const [days, setDays, getDays] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [data4, setData4] = useState({
        labels: Array.from(Array(15).keys()),
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                borderColor: '#a855f7',
                backgroundColor: '#581c87',
            },
        ],
    });
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const chartReference = React.createRef();
    const options2 = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'center',
            },
            title: {
                display: true,
                font:{
                    size: 20,
                    style: "bold"
                },
                padding:{
                    bottom: 35
                },
                text: 'График среднего расхода материала',
            },
            layout: {
                padding: 20
            }
        },
    };
    const checkList = [
        {
            "name": "Red wood",
            "img": "https://media.discordapp.net/attachments/1045028229620191334/1060918315880558693/free-icon-tree-490091.png",
            "rus": "Красное дерево"
        },
        {
            "name": "Gruntovka",
            "img": "https://cdn.discordapp.com/attachments/1045028229620191334/1060961534198698004/pngwing.com.png",
            "rus": "Грунтовка"
        },
        {
            "name": "Glue",
            "img": "https://cdn.discordapp.com/attachments/1045028229620191334/1060918902030348451/glue_icon-icons.com_60665.png",
            "rus": "Клей"
        },
        {
            "name": "Paint",
            "img": "https://cdn.discordapp.com/attachments/1045028230085750985/1060960352726171748/free-icon-paint-bucket-588390.png",
            "rus": "Краска"
        },
        {
            "name": "Wallpaper",
            "img": "https://cdn.discordapp.com/attachments/1045028230085750985/1060960708315066528/free-icon-wallpaper-1703135.png",
            "rus": "Обои"
        },
        {
            "name": "Tile",
            "img": "https://cdn.discordapp.com/attachments/1045028230085750985/1060960485610102894/free-icon-tile-683470.png",
            "rus": "Кафель"
        }
    ];

    // Add/Remove checked item from list
    const handleCheck = (event, name) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        var updatedListOfSelectedRivals = [...listOfMaterials];
        if (event.target.checked) {
            updatedListOfSelectedRivals = [...listOfMaterials,name];
        } else {
            updatedListOfSelectedRivals.splice(checked.indexOf(name), 1);
        }
        setListOfMaterials(updatedListOfSelectedRivals);
    };
    function getPrognoz() {
        axios.post(`http://localhost:8081/`,{
            maxMaterialCount: maxMaterialCount,
            materialPerDay: materialPerDay,
            days: days,
            listOfMaterials: listOfMaterials
        })
            .then(res => {
                console.log(res.data)
                console.log(listOfMaterials)
                // setListOfMaterials([])
                setChecked([])
                setData4(
                    {
                        labels: Array.from(Array(100).keys()),
                        datasets: [
                            {
                                label: 'Dataset 1',
                                data: res.data.points,
                                borderColor: '#a855f7',
                                backgroundColor: '#581c87',
                            },
                        ],
                    }
                )
                setDays(
                    res.data.days
                )
            })
    }
  return (
    <div className="App">
        <h1 className="text2 title mb-5 text-5xl font-bold text-center text-gray-900 dark:text-white">Прогноз дней без закупок</h1>
        <form className="m-4 justify-center ">
          <h1 className="text2 mb-5 text-3xl font-bold text-justify text-gray-900 dark:text-white">Выберите материал</h1>
                        {/*<Container>*/}
          <ul className=" grid gap-6 w-full md:grid-cols-3">
              {checkList.map((item, index) => (
              <li className=" overflow-hidden shadow-inner drop-shadow-sm rounded-lg text-center">
                  <input type="checkbox" value={item} id={index} onChange={event => handleCheck(event,item.rus)} className="card hidden peer" required=""/>
                      <label htmlFor={index} style={{borderWidth:3}}
                             className="card inline-flex mx-auto justify-center items-center p-5 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <div className="block2">
                              <img src={item.img} style={{width: 165, height: 165}}/>
                              <div style={{color: "whitesmoke"}} className="w-full text-lg font-semibold">{item.rus}</div>
                          </div>
                      </label>
              </li>
              ))}
          </ul>
            <h1 className="text2 mb-5 text-3xl font-bold text-justify text-gray-900 dark:text-white">Укажите количество материала</h1>
            <label htmlFor="minmax-range" className="text2 block mb-2 text-2xl font-medium text-gray-900  dark:text-white">Количество материала: {maxMaterialCount}</label>
            <input id="minmax-range"  type="range" min="0" max="1000" value={maxMaterialCount} onChange={(e) => {setMaxMaterialCount(e.target.value)}}  className="w-full h-2 bg-gray-200 rounded-lg accent-green-400 dark:bg-gray-700"/>
            <label htmlFor="minmax-range" className="text2 block mb-2 text-2xl font-medium text-gray-900  dark:text-white">Количество материалов в первый день: {materialPerDay}</label>
            <input id="minmax-range"  type="range" min="0" max="10" value={materialPerDay} onChange={(e) => {setMaterialPerDay(e.target.value)}}  className="w-full h-2 bg-gray-200 rounded-lg accent-green-400 dark:bg-gray-700"/>

            {/*</Container>*/}
                    <button
                        className="btn1 w-full shadow bg-green-400 hover:bg-orange-800 mt-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="button"
                        data-modal-toggle="popup-modal"
                        onClick={() => {
                            setShowModal(true);
                            getPrognoz();
                        }}
                    >
                        Рассчитать
                    </button>
        </form>

        <Modal
            show={showModal}
            size="5-xl"
            popup={true}
            onClose={() => {
                setShowModal(false);
                window.location.reload(false);
            }
        }
        >
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                <div className="text-center">
                    <div style={{height: 300}}>
                    <Line  id="bestLine" ref={chartReference} options={options2}  height="25vh" data={data4} />
                    </div>
                    <label htmlFor="minmax-range" className="block mb-2 text-2xl font-medium text-gray-900  dark:text-white">Осталось дней: {days}</label>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default App;
