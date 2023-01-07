import {useState} from "react";

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
export function MaterialGrid(props) {
    
    return checkList.map((item, index) => (
            <li className=" overflow-hidden shadow-inner drop-shadow-sm rounded-lg text-center">
                <input type="checkbox" value={item} id={index} onChange={event => props.pick_item(event,item.rus)} className="card hidden peer" required=""/>
                <label htmlFor={index} style={{borderWidth:3}}
                       className="card inline-flex mx-auto justify-center items-center p-5 w-full text-gray-500 rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className="block2">
                        <img src={item.img} style={{width: 165, height: 165}}/>
                        <div style={{color: "whitesmoke"}} className="w-full text-lg font-semibold">{item.rus}</div>
                    </div>
                </label>
            </li>
        ))
}