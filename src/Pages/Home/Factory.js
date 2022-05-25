import React from 'react';
import factory from '../../images/factory.jpg';
import machin from '../../images/machin.png';

const Factory = () => {
    return (
        <div>
            <div>
                <div className='my-5 ml-5'>
                    <p className='font-bold text-xl text-primary'>Each product is designed with new technology</p>
                </div>
                <div className='ml-5'>
                    <p>precise machinery science and technology co., ltd. is located in ZHUJING  industral zone in Jinshan，shanghai，the Yangtze River Delta region，which is  most developed area in China.  Its  construction area is 200.0000 square meter. With the  largeest capital investment in Zhujing Industrial Park HIKARI integrates R D manufacture and trade together and focus on innovative research and development of new technologies and automation manufacturing high-quality products operating in the global market. HIKARI is the shanghai small giant science and technology enterprise. The industry believes Hikari is one of the most promising companies globally.</p>
                </div>
                <div className='my-12'>
                    <img src={factory} alt="" />
                </div>
            </div>

            <div>
                <div className='my-12 ml-5'>
                    <p className='text-primary text-xl font-bold my-5'>Knobs type feeding adjusting structure</p>
                    <p>Easy operation and adjustment, the control box has been built inside to make the adjustment and installation easier; It can also avoid the running noise and the sound resonance during the top and bottom feeding  </p>
                </div>
                <div className='my-12'>
                    <img src={machin} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Factory;