import {Container, createStyles, Header, rem} from "@mantine/core";

const HEADER_HEIGHT = rem(60);

const HeaderComponent = () => {

    const { classes } = useStyles();

    return (
        <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} >
            <Container className={classes.inner} fluid>
                <p>Header</p>
            </Container>
        </Header>
    );
};

const useStyles = createStyles((theme) => ({
   inner: {
       height: HEADER_HEIGHT,
       backgroundColor: "blue",
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center"
   },
}));

export default HeaderComponent;