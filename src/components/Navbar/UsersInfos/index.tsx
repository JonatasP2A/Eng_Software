import React from 'react';
import { User } from '../../../hooks/user';
import { Container } from './styles';
import { FaUserCircle } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';


interface UsersInfosProps {
    currentUser: User | undefined,
    opponents: User[],
    firstColor: string | undefined,
    secondColor: string | undefined,
}

export const UsersInfos: React.FC<UsersInfosProps> = ({ currentUser, opponents, firstColor, secondColor, ...rest }) => {

    return (
        <Container firstColor={firstColor} secondColor={secondColor}>
            <div className="user_infos">
                <div><FaUserCircle style={{ height: 40, width: 40, color: '#fff', marginRight: 5 }} /></div>
                <p className="title">{currentUser?.name}</p>
                <div className="opponents_infos">
                    {opponents.map((opponent, index) => (
                        <div key={index}>
                            <div className="item-info">
                                <div><FaUserCircle style={{ height: 20, width: 20, color: '#fff', marginRight: 5 }} /></div>
                                <p className="item-title">{opponent.name}</p>
                                <div><SiCashapp style={{ height: 20, width: 20, color: '#fff', marginRight: 5, marginLeft: 20 }} /></div>
                                <p className="item-title">{opponent.cash.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}

