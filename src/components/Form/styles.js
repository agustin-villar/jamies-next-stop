import { css } from 'styled-components';
import { colors, fontSizes, getSpacing } from '../../utils/styles';

const styles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${getSpacing(5)};
    margin-left: auto;
    margin-right: auto;
    max-width: 500px;

    .form__submit-button {
        background-color: ${colors.blue};
        border: 0;
        border-bottom: 2px solid ${colors.lightBlue};
        color: ${colors.white};
        font-size: ${fontSizes.bodySize};
        line-height: 1.5;
        padding: ${getSpacing(1)};
    }
`;

export default styles;
