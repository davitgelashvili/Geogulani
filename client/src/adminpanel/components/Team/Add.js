import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import CustomInput from '../CustomInput/CustomInput';
import UploadWidget from '../UploadWidget/UploadWidget';
import getApi from '../../../http/getApi';
import { useParams } from 'react-router';
import CustomEditor from '../CustomEditor/CustomEditor';
import Language from '../Content/Language';

export default function AddTeam() {
  const { id } = useParams();
  const [language, setLanguage] = useState('ka'); // გამოიყენება თუ ოდესმე გექნება მრავალენოვანი ველები

  const [data, setData] = useState({
    title: {
      en: '',
      ka: '',
      ru: '',
    },
    position: {
      en: '',
      ka: '',
      ru: '',
    },
    cover: '',
    category: '',
    desc: {
      en: '',
      ka: '',
      ru: '',
    },
  });

  useEffect(() => {
    async function fetchTeam() {
      if (!id) return;
      try {
        const team = await getApi.getData(`/teams/${id}`);
        setData({
          title: {
            en: team?.title?.en || '',
            ka: team?.title?.ka || '',
            ru: team?.title?.ru || '',
          },
          desc: {
            en: team?.desc?.en || '',
            ka: team?.desc?.ka || '',
            ru: team?.desc?.ru || '',
          },
          cover: team?.cover || '',
          category: team?.category || '',
          position: {
            en: team?.position?.en || '',
            ka: team?.position?.ka || '',
            ru: team?.position?.ru || '',
          },
        });
      } catch (err) {
        console.error('Failed to load team member', err);
      }
    }

    fetchTeam();
  }, [id]);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: {
        ...prev.title,
        [language]: value,
      },
    }));
  };

  const handleEditorChange = (section, name, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const submit = async () => {
    try {
      if (id) {
        await getApi.putData(`/teams/${id}`, data);
        alert('წევრი წარმატებით განახლდა');
      } else {
        await getApi.postData('/teams', data);
        alert('წევრი წარმატებით დაემატა');
      }
    } catch (error) {
      alert('დაფიქსირდა შეცდომა');
      console.error(error);
    }
  };

  return (
    <Content title="გუნდის წევრი" language={language} setLanguage={setLanguage}>
      <UploadWidget
        title="ფოტო"
        setData={setData}
        value={data.cover}
        name="cover"
      />
      <select onChange={(e)=>setData({...data, category: e.target.value})}>
        <option value={''} >choose</option>
        <option value={'leadership'}>Leadership</option>
        <option value={'calligraphers'}>Calligraphers</option>
        <option value={'board'}>board</option>
      </select>
      <div>
        <p>category: <span> {data.category}</span></p>
      </div>
      <Language lang={language}>
        <CustomInput
          title="სახელი"
          type="text"
          value={data.title[language]}
          name="title"
          placeholder="შეიყვანე სახელი"
          onChange={handleInputChange}
        />
        <CustomInput
          title="პოზიცია"
          type="text"
          value={data.position[language]}
          name="position"
          placeholder="შეიყვანე პოზიცია"
          onChange={handleInputChange}
        />
        <CustomEditor
          section="desc"
          name={language}
          value={data.desc[language]}
          onChange={handleEditorChange}
          title="აღწერა"
        />
      </Language>
      <button onClick={submit}>შენახვა</button>
    </Content>
  );
}
