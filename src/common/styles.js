import 
    styled,
    { css }
from 'styled-components';

import { 
    Colors,
    FontSizes 
} from 'common/constants';

const BaseButtonStyles = css`
    color: ${Colors.White};
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export const HorizontalSpace = styled.div`
    width: '0.5vw';
`;
export const PrimaryButton = styled.button`
    ${BaseButtonStyles};
    background-color: ${Colors.Green};
    padding: 1vh 3vw;
    font-size: ${FontSizes.Small};
`;

export const ExitButton = styled.button`
    ${BaseButtonStyles};
    background-color: ${Colors.Red};
    padding: 1vh 2vw;
    font-size: ${FontSizes.Small};
`;

export const RestartButton = styled.button`
    ${BaseButtonStyles};
    background-color: ${Colors.Orange};
    padding: 1vh 0.3vw;
    font-size: ${FontSizes.Smaller};
    margin-left: auto;
`;