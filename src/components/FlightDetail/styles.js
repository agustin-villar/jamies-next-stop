import { css } from 'styled-components';
import {getSpacing, colors, fontSizes} from '../../utils/styles';

const styles = css`
    align-items: center;
    border-bottom: 1px solid ${colors.lightGray};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${getSpacing(2)};
    
    .flight__box {
        width: 70%;
    }
    
    .flight__link {
        color: ${colors.blue};
        font-size: ${fontSizes.bodySize};
        font-weight: bold;
    }
    
    .flight__price {
        font-size: ${fontSizes.headline};
        font-weight: bold;
    }
`;

export default styles;
