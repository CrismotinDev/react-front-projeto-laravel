import React from 'react';
import { GradientBackground, SectionTitle, ListStyled, ListItemTextStyled, AvatarStyled, ListDivider } from "./_advantagens.styled";
import { Avatar, ListItem, ListItemAvatar, Container } from '@mui/material';

const advantagesList = [
    {
        icon: 'twf-woman',
        title: 'Diversidade',
        decription: 'São mais de 5.000 profissionais esperando por você!',
    },
    {
        icon: 'twf-certificate',
        title: 'Confiabilidade',
        decription: 'Todos os profissionais são verificados',
    },
    {
        icon: 'twf-search-2',
        title: 'Rastreabilidade',
        decription: 'Você pode acessar todo o histórico do(a) profissional',
    },
    {
        icon: 'twf-frame-broken',
        title: 'Segurança',
        decription: 'Seguro sobre qualquer possível dano',
    },
    {
        icon: 'twf-payment',
        title: 'Controle',
        decription: 'O pagamento é realizado somente quando o (a) profissional está na sua casa',
    },
    {
        icon: 'twf-broom-bucket',
        title: 'Experiência',
        decription: 'Mais de 50.000 diárias realizadas',
    },
];

const Advantages = () => {
    return <GradientBackground>
        <Container>
            <SectionTitle>Por que usar o E-diaristas?</SectionTitle>

            <ListStyled>
                {advantagesList.map((item) => (
                    <React.Fragment Key={item.icon}>
                        <ListDivider />
                        <ListItem Key={item.icon}>
                            <ListItemAvatar>
                                <AvatarStyled>
                                    <i className={item.icon} />
                                </AvatarStyled>
                            </ListItemAvatar>
                            <ListItemTextStyled primary={item.title} secondary={item.decription}>
                            </ListItemTextStyled>
                        </ListItem>
                    </React.Fragment>

                ))}

            </ListStyled>
            <ListDivider />
        </Container>

    </GradientBackground >
};

export default Advantages;