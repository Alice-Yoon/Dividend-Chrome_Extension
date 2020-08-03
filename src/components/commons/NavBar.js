import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavBar(props) {


    return (
        <div className={props.className}>
            <Link to="/" className="listStyle">Home</Link>
            <Link to="/community" className="listStyle">Community</Link>
            <Link to="/mypage" className="listStyle">MyPage</Link>
            <Link to="/search" className="listStyle">Search</Link>
        </div>
    )
}

export default styled(NavBar)`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    & {
        .listStyle {
            /* border: 1px solid black; */
            width: 100%;
            text-align: center;
            text-decoration: none;
            color: black;
            font-size: 1.5rem;
            font-weight: bold;
            padding: 30px 0;
            /* margin: 30px 0; */
            &:hover {
                color: skyblue;
                background-color: gray;
            }
        }
    }
`;