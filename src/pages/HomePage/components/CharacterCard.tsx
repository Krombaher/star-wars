import { Card, Col } from 'antd';
import { StarWarsCharacter } from '../../../api/starWarsApiTypes';

type Props = {
  character: StarWarsCharacter;
  onClick: () => void;
};

export const CharacterCard: React.FC<Props> = ({ character, onClick }) => {
  return (
    <Col span={6}>
      <Card className="character-card" title={character.name} onClick={onClick}>
        <p>Birth year: {character.birth_year}</p>
      </Card>
    </Col>
  );
};
