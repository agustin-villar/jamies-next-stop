import { css } from 'styled-components';
import {colors, fontSizes, getSpacing} from '../../utils/styles';

const styles = css`
    background-color: ${colors.white};
    box-sizing: border-box;
    box-shadow: 0 0 3px 0 rgba(66,63,65,0.2);
    display: flex;
    flex-direction: column;
    margin-bottom: ${getSpacing(2)};
    
    .trip-column__heading {
        font-size: ${fontSizes.headline};
        font-weight: bold;
        margin: ${getSpacing(2)} 0;
        padding: 0 ${getSpacing(1)};
        text-align: center;
    }
    
    .trip-column__hr {
        border: 0;
        border-bottom: 1px solid ${colors.lightGray};
        width: 100%;
    }
    
    .trip-column__weather-headline {
        font-size: ${fontSizes.bodySize};
        margin-bottom: ${getSpacing(2)};
        padding: 0 ${getSpacing(2)};
        text-align: center;
    }
    
    .trip-column__weather-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 ${getSpacing(2)};
        margin-bottom: ${getSpacing(3)};
    }
`;

export default styles;
