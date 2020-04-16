import { css } from 'styled-components';
import { getSpacing, colors, fontSizes } from '../../utils/styles';

const styles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${getSpacing(2)};
    
    .input__label {
        font-size: ${fontSizes.caption};
        margin-bottom: ${getSpacing(1)};
    }
    
    .input__element {
        background-color: ${colors.white};
        border: 1px solid ${colors.lightGray};
        color: ${colors.deepBlack};
        font-size: ${fontSizes.bodySize};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        padding: ${getSpacing(1)};
    }
`;

export default styles;
