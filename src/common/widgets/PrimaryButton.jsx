import 
    PropTypes 
from 'prop-types';

import{
    styled
} from 'styled-components'

function PrimaryButton(
    {buttonText, onClick, typeOfButton}
){
    <button
     onClick={onClick}
    >
     {buttonText}
    </button>
}

const PrimaryButton = styled.button`
    
`;

export const PrimaryButtonWidget = PrimaryButton;