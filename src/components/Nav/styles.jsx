import styled from 'styled-components'

export default {
    Nav: styled.nav`
        background: #2c3e50;
        display: flex;
        align-items: center;
        height: 60px;
        
        ul {
            display: flex;
            padding: 0px;
            margin: 0px;

            li {
                list-style: none;
                a {
                    text-decoration: none;
                    color: #f1c40f;
                    padding: 1em;
                    transition: 0.25s; 
                    /* changes color over time given */

                    &:hover {
                        color: #bada55;
                    }
                }
            }
        }
    `
};