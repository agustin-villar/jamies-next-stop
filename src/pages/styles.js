import { css } from 'styled-components';
import { getSpacing, colors, fontSizes, breakpoints} from "../utils/styles";

const styles = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: calc(100% - ${getSpacing(4)});
    max-width: ${breakpoints.maxDesktopWidth};
    
    .home__header {
        margin-top: ${getSpacing(4)};
        margin-bottom: ${getSpacing(3)};
        text-align: center;
    }

    .home__heading {
        color: ${colors.blue};
        font-size: ${fontSizes.heading};
        font-weight: bold;
    }
    
    .home__tagline {
        font-size: ${fontSizes.title};
    }
    
    .home__footer {
        margin: ${getSpacing(5)} 0;
        text-align: center;
    }
`;

export default styles;
