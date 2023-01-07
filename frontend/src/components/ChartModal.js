import {Modal} from "flowbite-react";
import {Line} from "react-chartjs-2";

export function ChartModal(props) {
    return <Modal
        show={props.showModal}
        size="5-xl"
        popup={true}
        onClose={() => {
            props.setShowModal(false);
            window.location.reload(false);
        }
        }
    >
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center">
                <div style={{height: 300}}>
                    <Line id="bestLine" ref={props.chartReference} options={props.options} height="25vh" data={props.chartData}/>
                </div>
                <label htmlFor="minmax-range"
                       className="block mb-2 text-2xl font-medium text-gray-900  dark:text-white">Осталось
                    дней: {props.days}</label>
            </div>
        </Modal.Body>
    </Modal>
}