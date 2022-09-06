import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { FormElementsContainer, ProfissionaisContainer } from './_verificar-profissionais.styled';

const VerificarProfissionais: React.FC = () => {
    return (
        <>
            <SafeEnvironment />
            <PageTitle title={'Conheça os profissionais'}
                subtitle={
                    'Preencha seu endereço e veja todos os profissionais da sua localidade'
                }
            />
            <Container sx={{ mb: 10 }}>
                <FormElementsContainer>
                    <TextFieldMask
                        mask={'99.999-999'}
                        label={'Digite seu CEP'}
                        fullWidth={true}
                    />
                    <Typography color={'error'}>
                        CEP não encontrado
                    </Typography>
                    <Button variant={'contained'} color={'secondary'} sx={{ width: '220px' }}>
                        Buscar
                    </Button>
                </FormElementsContainer>
                <ProfissionaisContainer>
                    <UserInformation
                        name={'Cris'}
                        picture={'https://github.com/CrismotinDev.png'}
                        rating={3}
                        description={'São Paulo'}
                    />
                    <UserInformation
                        name={'Cris'}
                        picture={'https://github.com/CrismotinDev.png'}
                        rating={3}
                        description={'São Paulo'}
                    />
                    <UserInformation
                        name={'Cris'}
                        picture={'https://github.com/CrismotinDev.png'}
                        rating={3}
                        description={'São Paulo'}
                    />
                    <UserInformation
                        name={'Cris'}
                        picture={'https://github.com/CrismotinDev.png'}
                        rating={3}
                        description={'São Paulo'}
                    />
                </ProfissionaisContainer>
                <Container>
                    <Typography variant={'body2'} color={'textSecondary'} sx={{ mt: 5 }}>
                        ... e mais 50 profissionais atendem ao seu endereço.
                    </Typography>
                    <Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>
                        Contratar um(a) profissinal
                    </Button>
                </Container>

            </Container>
        </>
    );
};

export default VerificarProfissionais;