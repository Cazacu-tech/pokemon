
import { useState } from 'react';
import AfficheFaq from './ListComponent';

function PopUp() {
    const [showPopUp, setPopup] = useState(false)
    function HandleClick (e) {
        e.preventDefault();
        setPopup(!showPopUp);
    }

    return <>
        <button className="bg-red-500 ml-5 mb-1" href="#" onClick={(event)=>HandleClick(event)}>
          button of favoris
        </button>

           {
            showPopUp ?
              
                    <div className='bg-green-800 overflow-y-auto w-96 h-96 overflow-hidden mr-auto ml-auto rounded-lg '>
                        <AfficheFaq/>
                        <button onClick={(event)=>HandleClick(event)} className='bg-gray-800 text-center'>close Popup</button>
                    </div>


            :null
            }
    </>
}

export default PopUp;