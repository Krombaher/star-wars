import { Row } from 'antd';
import { StarWarsResponse } from '../../../api/starWarsApiTypes';
import { extractId } from '../../../utils/extractId';
import { useNavigate } from 'react-router-dom';
import { CharacterCard } from './CharacterCard';
import { Loader } from '../../../components/Loader';

type PersonListProps = {
  dataPeople: StarWarsResponse | undefined;
  isLoadingPeople: boolean;
};

export const CharactersList: React.FC<PersonListProps> = ({ dataPeople, isLoadingPeople }) => {
  const navigate = useNavigate();

  const handlePersonClick = (id: number) => {
    navigate(`/person/${id}`);
  };

  if (isLoadingPeople) {
    return <Loader />;
  }

  return (
    <div className="character-list">
      <Row gutter={[16, 16]}>
        {dataPeople?.results.map(item => {
          const id = extractId(item.url);
          return (
            <CharacterCard
              key={id}
              character={item}
              onClick={() => handlePersonClick(Number(id))}
            />
          );
        })}
      </Row>
    </div>
  );
};
