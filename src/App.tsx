import React from 'react';
import { Place, Chance, Railroad, CommunityChest, Tax } from './components';

import './App.css';

function App() {
  return (
    <div className="table">
      <div className="board">
        <div className="center">
          <div className="community-chest-deck">
            <h2 className="label">Community Chest</h2>
            <div className="deck"></div>
          </div>
          <h1 className="title">MONOPOLY</h1>
          <div className="chance-deck">
            <h2 className="label">Chance</h2>
            <div className="deck"></div>
          </div>
        </div>

        <div className="space corner go">
          <div className="container">
            <div className="instructions">
              Collect $200.00 salary as you pass
            </div>
            <div className="go-word">go</div>
          </div>
          <div className="arrow fa fa-long-arrow-left"></div>
        </div>

        <div className="row horizontal-row bottom-row">
          <Place
            backgroundColor="light-blue"
            name="Connecticut Avenue"
            price={120}
          />

          <Place
            backgroundColor="light-blue"
            name="Vermont Avenue"
            price={100}
          />

          <Chance />

          <Place
            backgroundColor="light-blue"
            name="Oriental Avenue"
            price={100}
          />

          <Railroad name="Reading Railroad" price={200} />

          <Tax type="income" name="Income Tax" instructions="Pay 10% or $200" />

          <Place
            backgroundColor="dark-purple"
            name="Baltic Avenue"
            price={50}
          />

          <CommunityChest />

          <Place
            backgroundColor="dark-purple"
            name="Mediter-ranean Avenue"
            price={50}
            threeLineName
          />
        </div>

        <div className="space corner jail">
          <div className="just">Just</div>
          <div className="drawing">
            <div className="container">
              <div className="name">In</div>
              <div className="window">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <i className="person fa fa-frown-o"></i>
              </div>
              <div className="name">Jail</div>
            </div>
          </div>
          <div className="visiting">Visiting</div>
        </div>

        <div className="row vertical-row left-row">
          <Place backgroundColor="orange" name="New York Avenue" price={200} />
          <Place backgroundColor="orange" name="Tennessee Avenue" price={180} />

          <CommunityChest />

          <Place backgroundColor="orange" name="St. James Avenue" price={180} />

          <Railroad name="Pennsylvania Railroad" price={200} longName />

          <Place backgroundColor="purple" name="Virginia Avenue" price={160} />
          <Place backgroundColor="purple" name="States Avenue" price={140} />

          <div className="space utility electric-company">
            <div className="container">
              <div className="name">Electric Company</div>
              <i className="drawing fa fa-lightbulb-o"></i>
              <div className="price">Price $150</div>
            </div>
          </div>

          <Place
            backgroundColor="purple"
            name="St. Charles Place"
            price={140}
          />
        </div>

        <div className="space corner free-parking">
          <div className="container">
            <div className="name">Free</div>
            <i className="drawing fa fa-car"></i>
            <div className="name">Parking</div>
          </div>
        </div>

        <div className="row horizontal-row top-row">
          <Place backgroundColor="red" name="Kentucky Avenue" price={220} />

          <Chance />

          <Place backgroundColor="red" name="Indiana Avenue" price={220} />
          <Place backgroundColor="red" name="Illinois Avenue" price={200} />

          <Railroad name="B & O Railroad" price={200} />

          <Place backgroundColor="yellow" name="Atlantic Avenue" price={260} />
          <Place backgroundColor="yellow" name="Ventnor Avenue" price={260} />

          <div className="space utility waterworks">
            <div className="container">
              <div className="name">Waterworks</div>
              <i className="drawing fa fa-tint"></i>
              <div className="price">Price $120</div>
            </div>
          </div>

          <Place backgroundColor="yellow" name="Marvin Avenue" price={280} />
        </div>

        <div className="space corner go-to-jail">
          <div className="container">
            <div className="name">Go To</div>
            <i className="drawing fa fa-gavel"></i>
            <div className="name">Jail</div>
          </div>
        </div>

        <div className="row vertical-row right-row">
          <Place backgroundColor="green" name="Pacific Avenue" price={300} />
          <Place
            backgroundColor="green"
            name="North Carolina Avenue"
            price={300}
            threeLineName
          />

          <CommunityChest />

          <Place
            backgroundColor="green"
            name="Pennsylvania Avenue"
            price={320}
            longName
          />

          <Railroad name="Short Line" price={200} />

          <Chance />

          <Place backgroundColor="dark-blue" name="Park Place" price={350} />

          <Tax type="luxury" name="Luxury Tax" instructions="Pay $75.00" />

          <Place backgroundColor="dark-blue" name="Boardwalk" price={400} />
        </div>
      </div>
    </div>
  );
}

export default App;
