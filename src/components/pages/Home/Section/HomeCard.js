import React, {useState, useEffect} from 'react'

function Home() {

    const [nickName, setNickName] = useState('주린이');
    const [month, setMonth] = useState('7');
    const [price, setPrice] = useState('10,000');

    const carouselContainerStyle = {
        // border: '1px solid red',
        height: '180px',
    }

    const carouselCardStyle = {
        // border: '1px solid blue',
        padding: '10px',
        height: '160px',
    }

    const sentenceStyle = {
        marginBottom: '30px'
    }

    const nickNameStyle = {
        fontWeight: 'bold',
        fontSize: '32px'
    }

    const pointLetterStyle = {
        fontWeight: 'bold',
        fontSize: '25px',
        color: '#5e5e5e'
    }

    return (
        <div>
            <div style={carouselContainerStyle}>
                    <div style={carouselCardStyle}>
                        <p><span style={nickNameStyle}>{nickName}</span>님!</p>
                        <p style={sentenceStyle}>
                            <span style={pointLetterStyle}>{month}월 배당금</span>은 
                            <span style={pointLetterStyle}>{price}원</span> 입니다.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Home;