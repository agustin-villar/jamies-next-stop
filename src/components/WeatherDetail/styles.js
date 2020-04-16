import { css } from 'styled-components'
import {colors, fontSizes, getSpacing } from '../../utils/styles';

const styles = css`
    padding: 0 ${getSpacing(0.5)};
    text-align: center;
    
    .weather-detail__headline {
        color: ${colors.blue};
        font-size: ${fontSizes.bodySize};
        font-weight: bold;
    }
    
    .weather-detail__temperatures {
        display: flex;
        justify-content: space-between;
    }
`;

export default styles;
