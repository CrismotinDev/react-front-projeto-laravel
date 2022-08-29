import { FooterContainer, FooterTitle, FooterListItem, SocialContainer, AppList, FooterSocialList, SocialButton, FooterGrid } from "./Footer.style";
import { List, Box, Typography } from '@mui/material';
import Link from 'ui/components/navigation/Link/Link';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>


                <div>
                    <FooterTitle>Menu</FooterTitle>
                    <List>
                        <FooterListItem>
                            <Link href={'/encontrar-diarista'} mui={{ color: 'inherit', variant: 'body2' }}>
                                Encontrar um(a) diarista
                            </Link>
                        </FooterListItem>

                        <FooterListItem>
                            <Link href={'/cadastro-diarista'} mui={{ color: 'inherit', variant: 'body2' }}>
                                Seja um(a) diarista
                            </Link>
                        </FooterListItem>

                        <FooterListItem>
                            <Link href={'/'} mui={{ color: 'inherit', variant: 'body2' }}>
                                Porque usar o E-Diaristas?
                            </Link>
                        </FooterListItem>

                        <FooterListItem>
                            <Link href={'/'} mui={{ color: 'inherit', variant: 'body2' }}>
                                Principais Dúvidas
                            </Link>
                        </FooterListItem>
                    </List>

                </div>

                <Box sx={{ maxWidth: '400px' }}>
                    
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        E-Diarista te ajuda a encontrar um profissional perfeito para realizar
                        a limpeza da sua casa. Garantimos o (a) melhor profissional com total segurança e praticidade!
                        São milhares de clientes satisfeitos por todo o país.
                    </Typography>
                </Box>

                <SocialContainer>
                    <Box>
                        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
                        <AppList>
                            <li>
                                <a href={'https://www.apple.com/br/'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
                                </a>
                            </li>
                            <li>
                                <a href={'https://play.google.com/store/games?hl=pt_BR&gl=US'} target={'_blank'} rel={'noopener noreferrer'}>
                                    <img src={'/img/logos/google-play.png'} alt={'Google Play'} />
                                </a>
                            </li>
                        </AppList>
                    </Box>

                    <div>
                        <FooterTitle>Redes Sociais</FooterTitle>
                        <FooterSocialList>
                            <FooterListItem>
                                <SocialButton href={'/'}>
                                    <i className={'twf-facebook-f'}></i>
                                </SocialButton>

                            </FooterListItem>

                            <FooterListItem>
                                <SocialButton href={'/'}>
                                    <i className={'twf-instagram'}></i>
                                </SocialButton>

                            </FooterListItem>

                            <FooterListItem>
                                <SocialButton href={'/'}>
                                    <i className={'twf-youtube'}></i>
                                </SocialButton>

                            </FooterListItem>
                        </FooterSocialList>
                    </div>

                </SocialContainer>

            </FooterGrid>
        </FooterContainer >
    );
};

export default Footer;