import backgroundImage from "../assets/main.jpg";
import peopleImage from "../assets/people.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgb(240 244 243);
  color: rgb(46 125 50);
  transition: border-color 0.25s;

  &:hover {
    border-color: rgb(46 125 50);
  }
`;

const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  background-color: #f0f4f3;
  min-height: 500px;
  position: relative;
`;

const ContainerServise = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  color: rgb(46 125 50);
  padding: 50px 0;
  background-color: rgb(255 255 255);
  position: relative;
`;
const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  flex-direction: row;
  color: rgb(46 125 50);
  padding: 20px 50px;
  background-color: #f0f4f3;
  position: relative;
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: rgb(220, 233, 226);
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  font-size: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 15px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 100px;
  resize: none;
`;

const H1 = styled.h1`
  position: relative;
  width: 50%;
  font-size: 3.2em;
  line-height: 1.1;
  left: -20%;
  color: #2e7d32;
  text-align: left;
  z-index: 2;
`;

const Image = styled.img`
  width: 450px;
  height: auto;
  position: absolute;
  top: 25%;
  left: 550px;
  z-index: 0;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
`;

const H3 = styled.h3`
  font-size: 1rem;
  color: #cccccc;
  text-align: center;
  max-width: 300px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 270px;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HomePageContainer = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    numberPhone: '',
    textProblem: ''
  });
  const [leads, setLeads] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/", formData);
      alert("Заявка успешно отправлена");
      setFormData({ name: '', numberPhone: '', textProblem: '' });
      const updatedLeads = await axios.get("http://localhost:5000/leads");
      setLeads(updatedLeads.data);
    } catch (error) {
      alert("Произошла ошибка, попробуйте позже")
    }
  };

  return (
    <div className={className}>
      <Header>
        <H3>Клиника семейного счастья</H3>
        <Button><Link to='/login'>Вход для сотрудников</Link></Button>
      </Header>
      <ContainerMain>
        <H1>Забота о вашем здоровье — забота о будущем вашей семьи</H1>
        <Circle />
        <Image src={backgroundImage} alt="Background" />
      </ContainerMain>
      <ContainerServise>
        <ServiceCard>
          <H2>Персональный комплекс</H2>
          <H3>
            Комплексный подход, который предлагает всестороннюю помощь для всей
            семьи
          </H3>
        </ServiceCard>
        <ServiceCard>
          <H2>Поддержка здоровья</H2>
          <H3>Индивидуальные решения для каждого этапа жизни вашей семьи</H3>
        </ServiceCard>
        <ServiceCard>
          <H2>Современные технологии</H2>
          <H3>
            Используем новейшие технологии для улучшения здоровья и благополучия
          </H3>
        </ServiceCard>
      </ContainerServise>
      <ContainerContact>
        <div>
          <H2>Запись на консультацию</H2>
          <FormContainer >
            <Input
              type="text"
              name="name"
              placeholder="Введите имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="numberPhone"
              placeholder="Введите номер телефона"
              value={formData.numberPhone}
              onChange={handleChange}
              required
            />
            <TextArea
              name="textProblem"
              placeholder="Что Вас беспокоит?"
              value={formData.textProblem}
              onChange={handleChange}
              required
            />
            <Button onClick={handleSubmit} >Отправить заявку</Button>
          </FormContainer>

        </div>

        <Image src={peopleImage} alt="Background" />
      </ContainerContact>
    </div>
  );
};

export const HomePage = styled(HomePageContainer)``;