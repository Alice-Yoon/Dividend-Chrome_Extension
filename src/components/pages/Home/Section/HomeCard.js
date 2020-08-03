import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Home(props) {

    const [nickName, setNickName] = useState('주린이');
    const [month, setMonth] = useState('7');
    const [price, setPrice] = useState('10,000');

    return (
        <div className={props.className}>
            <div className="carouselCardStyle">
                <p><span className="nickNameStyle">{nickName}</span>님!</p>
                <p>
                    <span className="pointLetterStyle">{month}월 배당금</span>은 
                    <span className="pointLetterStyle">{price}원</span> 입니다.
                </p>
            </div>
        </div>
    )
}

export default styled(Home)`
    border: 1px solid red;
    & {
        .carouselCardStyle {
            border: 1px solid blue;
            padding: 10px;
        }
        .nickNameStyle {
            font-weight: bold;
            font-size: 32px;
        }
        .pointLetterStyle {
            font-weight: bold;
            font-size: 25px;
            color: #5e5e5e;
        }
    }

`;