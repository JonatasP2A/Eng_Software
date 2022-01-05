import React, { useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import GetPlayersModal from "../../components/PlayersModal";
import { Place, Railroad, CommunityChest, Tax, Navbar } from "../../components";
import { useUsers } from "../../hooks/user";
import { User } from "../../types/user";
import { HomeCF } from "./styles";
import "../../App.css";

const Home: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(true);
  const { addUsers, userTurn, startGame } = useUsers();
  const [value, setValue] = useState(0);
  const controls = useAnimation();

  const onReceivedUsers = (currentUser: User, opponentsNumber: number) => {
    addUsers(currentUser, opponentsNumber);
    setModalVisible(false);
  };
  //TODO: Conferir esse Zindex pq tem alguém passando na frente.
  //Obs: Coloquei uma props no Dice para controlar a ativação do dado.

  const rotation = useCallback(() => {
    if (value <= 11) {
      controls.start({
        rotate: 0,
      });
      return;
    } else if (value <= 21) {
      controls.start({
        rotate: -90,
      });
      return;
    } else if (value <= 31) {
      controls.start({
        rotate: -180,
      });
      return;
    } else {
      controls.start({
        rotate: -270,
      });
      return;
    }
  }, [value, controls]);

  useEffect(() => {
    if (userTurn) {
      setValue(userTurn.houseNumber);
    }
  }, [userTurn]);

  useEffect(() => {
    rotation();
  }, [rotation]);

  useEffect(() => {
    if (!isModalVisible) {
      startGame();
    }
  }, [isModalVisible, startGame]);

  return (
    <HomeCF>
      {isModalVisible ? (
        <GetPlayersModal
          visible={isModalVisible}
          onReceivedUsers={onReceivedUsers}
        />
      ) : (
        <>
          <Navbar />
          <motion.div className="table" animate={controls}>
            <div className="board">
              <div className="center">
                <div className="community-chest-deck">
                  <h2 className="label">Patrimônio</h2>
                  <div className="deck"></div>
                </div>
                <h1 className="title">MONOPOLY</h1>
                <div className="chance-deck">
                  <h2 className="label">Sorte Revés</h2>
                  <div className="deck"></div>
                </div>
              </div>

              <div className="space corner go">
                <div className="container">
                  <div className="instructions">Receba R$: 200,00 arregos.</div>
                  <div className="go-word">Início</div>
                  <div className="instructions">Quando passar</div>
                </div>
                <div className="arrow fa fa-long-arrow-left"></div>
              </div>

              <div className="row horizontal-row bottom-row">
                <Place backgroundColor="light-blue" name="Ingá" price={200} />

                <Tax
                  type="income"
                  name="Custos de campanha"
                  instructions="PREÇO R$: 300"
                />

                <CommunityChest />

                <Place backgroundColor="light-blue" name="Icaraí" price={250} />

                <Place
                  backgroundColor="dark-purple"
                  name="Caramujo"
                  price={100}
                />

                <Tax
                  type="income"
                  name="Sinal de TV à gato"
                  instructions="PREÇO R$: 150"
                />

                <Place
                  backgroundColor="dark-purple"
                  name="Niterói (Centro)"
                  price={180}
                />

                <CommunityChest />

                <Place
                  backgroundColor="dark-purple"
                  name="FONSECA"
                  price={160}
                  threeLineName
                />
              </div>

              <div className="space corner jail">
                <div className="just">Visita</div>
                <div className="drawing">
                  <div className="container">
                    <div className="window">
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <div className="bar"></div>
                      <i className="person fa fa-frown-o"></i>
                    </div>
                    <div className="name">Bangu I</div>
                  </div>
                </div>
                <div className="visiting">Íntima</div>
              </div>

              <div className="row vertical-row left-row">
                <Place
                  backgroundColor="orange"
                  name="Laranjeiras"
                  price={200}
                  aditionalClasses="uff-large"
                />
                <Place backgroundColor="orange" name="Flamengo" price={180} />

                <CommunityChest />

                <Place backgroundColor="orange" name="Botafogo" price={230} />

                <Railroad name="Botijão de gás" price={100} longName />

                <Place
                  backgroundColor="purple"
                  name="UFF Valonguinho"
                  aditionalClasses="uff-large"
                  price={180}
                />

                <Place
                  backgroundColor="purple"
                  name="UFF Gragoatá"
                  price={250}
                />

                <div className="space utility electric-company">
                  <div className="container">
                    <div className="name">Máquinas de caça-níquel</div>
                    <i className="drawing fa fa-lightbulb-o"></i>
                    <div className="price">Preço $200</div>
                  </div>
                </div>

                <Place
                  backgroundColor="purple"
                  name="UFF Praia Vermelha"
                  price={330}
                />
              </div>

              <div className="space corner free-parking">
                <div className="container">
                  <div className="name">Pagode</div>
                  <i className="drawing fa fa-car"></i>
                  <div className="name">Cerveja 🍺</div>
                </div>
              </div>

              <div className="row horizontal-row top-row">
                <Place
                  backgroundColor="red"
                  name="Jardim Botânico"
                  price={250}
                />

                <CommunityChest />

                <Place backgroundColor="red" name="Gávea" price={200} />
                <Place
                  backgroundColor="red"
                  name="Barra da Tijuca"
                  price={300}
                />

                <Railroad name="Moto Taxi" price={50} />

                <Place backgroundColor="yellow" name="Leblon" price={350} />
                <Place
                  backgroundColor="yellow"
                  name="Copacabana"
                  price={300}
                  aditionalClasses="uff-large"
                />

                <div className="space utility waterworks fix-margin">
                  <div className="container">
                    <div className="name">Transporte Alternativo</div>
                    <i className="drawing fa fa-tint"></i>
                    <div className="price">Preço $120</div>
                  </div>
                </div>

                <Place backgroundColor="yellow" name="Ipanema" price={280} />
              </div>

              <div className="space corner go-to-jail">
                <div className="container">
                  <div className="name">Vá para</div>
                  <i className="drawing fa fa-gavel"></i>
                  <div className="name">Bangu I</div>
                </div>
              </div>

              <div className="row vertical-row right-row">
                <Place backgroundColor="green" name="Salgueiro" price={380} />
                <Place
                  backgroundColor="green"
                  name="Jardim Catarina"
                  price={500}
                  threeLineName
                />

                <CommunityChest />

                <Place
                  backgroundColor="green"
                  name="Porto da Pedra"
                  price={320}
                  longName
                />

                <Railroad name="Milícia Local" price={200} />

                <CommunityChest />

                <Place
                  backgroundColor="dark-blue"
                  name="Morro do Katiço"
                  price={350}
                />

                <div className="space utility electric-company">
                  <div className="container">
                    <div className="name">Propina</div>
                    <i className="drawing fa fa-lightbulb-o"></i>
                    <div className="price">Preço $200</div>
                  </div>
                </div>

                <Place
                  backgroundColor="dark-blue"
                  name="Reta Velha"
                  price={200}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </HomeCF>
  );
};

export default Home;
