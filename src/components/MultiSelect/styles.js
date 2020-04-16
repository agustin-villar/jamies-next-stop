import { css } from 'styled-components';
import { colors, fontSizes, getSpacing } from '../../utils/styles';

const styles = css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${getSpacing(2)};
    position: relative;
    
    .multi-select__label {
        margin-bottom: ${getSpacing(1)};
    }

    .multi-select__button {
        background-color: ${colors.white};
        border: 1px solid ${colors.lightGray};
        cursor: pointer;
        padding: ${getSpacing(1)};
        font-size: ${fontSizes.bodySize};
        text-align: left;
    }
    
    .multi-select__dropdown {
        background-color: ${colors.white};
        border: 1px solid ${colors.lightGray};
        box-sizing: border-box;
        display: ${({ open }) => open ? 'flex' : 'none'};
        flex-direction: column;
        position: absolute;
        top: 100%;
        width: 100%;
    }
    
    .multi-select__dropdown-item {
        border-bottom: 1px solid ${colors.lightGray};
        font-size: ${fontSizes.bodySize};
        padding: ${getSpacing(1)};
        
        &:last-child {
            border: 0;
        }
    }

    .multi-select__input {
        margin-right: ${getSpacing(1)};
    }
`;

export default styles;
