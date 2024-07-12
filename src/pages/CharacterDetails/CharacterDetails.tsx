import { Link, useParams } from 'react-router-dom';
import { useGetPersonQuery } from '../../api/StarWarsApi';
import { useEffect, useState } from 'react';
import { StarWarsCharacter } from '../../api/starWarsApiTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateCharacter } from '../../store/charactersSlice';
import { Button, Form, Input } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Loader } from '../../components/Loader';

export const CharacterDetails = () => {
  const { id } = useParams();
  const { data } = useGetPersonQuery(Number(id));
  const dispatch = useDispatch();
  const editedPerson = useSelector((state: RootState) => state.characters[id || '']);
  const [localPerson, setLocalPerson] = useState<StarWarsCharacter | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (data && !editedPerson) {
      dispatch(updateCharacter(data));
    }
    setLocalPerson(editedPerson || data);
  }, [data, editedPerson, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalPerson(prev => (prev ? { ...prev, [name]: value } : null));
  };

  const handleSave = () => {
    if (localPerson) {
      dispatch(updateCharacter(localPerson));
    }
    setIsEditing(false);
  };

  if (!localPerson) return <Loader />;

  return (
    <>
      <Link to="/">
        <ArrowLeftOutlined />
      </Link>
      <h2>Character info:</h2>
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input name="name" value={localPerson.name} onChange={handleInputChange} disabled={!isEditing}/>
        </Form.Item>
        <Form.Item label="Birth Year">
          <Input name="birth_year" value={localPerson.birth_year} onChange={handleInputChange} disabled={!isEditing}/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={() => setIsEditing(true)} disabled={isEditing}>
            Edit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
