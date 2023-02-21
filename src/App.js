import
  styled
from 'styled-components';

import { 
  Colors, 
  FontSizes
} from 'common/constants';

import{
  HomeUI
} from 'ui/Home/Home';

import { 
  GamePlayUI
} from 'ui/GamePlay/GamePlay';

import { 
  RestartButton 
} from 'common/styles';

const HeadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemoryText = styled.h1`
  color: ${Colors.White};
  font-size: ${FontSizes.Big};
  text-align: center;
  margin-bottom: 1em;
  margin-left: auto;
`;

function App({handleShuffleCard}) {
  return (
    <div className="App">
      <HeadContent>
        <MemoryText>
          Memory
        </MemoryText>
        <RestartButton
          onClick={handleShuffleCard}
        >
          Restart Game
        </RestartButton>
      </HeadContent>
      
      <GamePlayUI />
    </div>
  );
}

export default App;
