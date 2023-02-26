import 
    PropTypes 
from 'prop-types';

import{
    PrimaryButton
}from 'common/styles';

function PrimaryButton(
    {buttonText, onClick}
){
    <PrimaryButton
     onClick={onClick}
    >
     {buttonText}
    </PrimaryButton>
}



export const PrimaryButtonWidget = PrimaryButton;